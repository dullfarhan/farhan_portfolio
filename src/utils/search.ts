/**
 * Client-side search utility for portfolio site
 * Implements fuzzy search across projects, skills, and content
 */

export interface SearchResult {
  id: string;
  title: string;
  type: 'project' | 'skill' | 'section' | 'content';
  url: string;
  excerpt?: string;
  relevance: number;
}

export interface SearchableItem {
  id: string;
  title: string;
  description?: string;
  tags?: string[];
  type: 'project' | 'skill' | 'section' | 'content';
  url: string;
}

/**
 * Simple fuzzy search implementation
 */
function fuzzyMatch(query: string, text: string): number {
  const queryLower = query.toLowerCase();
  const textLower = text.toLowerCase();
  
  // Exact match gets highest score
  if (textLower === queryLower) return 100;
  
  // Starts with query gets high score
  if (textLower.startsWith(queryLower)) return 90;
  
  // Contains query gets medium score
  if (textLower.includes(queryLower)) return 70;
  
  // Check for word matches
  const queryWords = queryLower.split(/\s+/);
  const textWords = textLower.split(/\s+/);
  let wordMatches = 0;
  
  for (const queryWord of queryWords) {
    for (const textWord of textWords) {
      if (textWord.startsWith(queryWord) || textWord.includes(queryWord)) {
        wordMatches++;
        break;
      }
    }
  }
  
  if (wordMatches > 0) {
    return (wordMatches / queryWords.length) * 50;
  }
  
  return 0;
}

/**
 * Search across all searchable items
 */
export function search(query: string, items: SearchableItem[]): SearchResult[] {
  if (!query || query.trim().length === 0) {
    return [];
  }
  
  const queryTrimmed = query.trim();
  const results: SearchResult[] = [];
  
  for (const item of items) {
    let relevance = 0;
    
    // Title match (highest weight)
    const titleScore = fuzzyMatch(queryTrimmed, item.title);
    relevance += titleScore * 1.0;
    
    // Description match (medium weight)
    if (item.description) {
      const descScore = fuzzyMatch(queryTrimmed, item.description);
      relevance += descScore * 0.6;
    }
    
    // Tag match (medium weight)
    if (item.tags && item.tags.length > 0) {
      for (const tag of item.tags) {
        const tagScore = fuzzyMatch(queryTrimmed, tag);
        if (tagScore > 0) {
          relevance += tagScore * 0.5;
          break;
        }
      }
    }
    
    if (relevance > 0) {
      // Create excerpt from description or title
      const excerpt = item.description 
        ? item.description.substring(0, 100) + (item.description.length > 100 ? '...' : '')
        : item.title;
      
      results.push({
        id: item.id,
        title: item.title,
        type: item.type,
        url: item.url,
        excerpt,
        relevance: Math.min(relevance, 100), // Cap at 100
      });
    }
  }
  
  // Sort by relevance (highest first)
  results.sort((a, b) => b.relevance - a.relevance);
  
  // Return top 10 results
  return results.slice(0, 10);
}

/**
 * Highlight search terms in text
 */
export function highlightSearchTerms(text: string, query: string): string {
  if (!query || query.trim().length === 0) {
    return text;
  }
  
  const queryTrimmed = query.trim();
  const regex = new RegExp(`(${queryTrimmed})`, 'gi');
  return text.replace(regex, '<mark class="search-highlight">$1</mark>');
}

/**
 * Initialize search data from page content
 */
export async function initializeSearchData(): Promise<SearchableItem[]> {
  const items: SearchableItem[] = [];
  
  // Add sections
  const sections = [
    { id: 'about', title: 'About Me', url: '/#about', type: 'section' as const },
    { id: 'experience', title: 'Experience', url: '/#experience', type: 'section' as const },
    { id: 'projects', title: 'Projects', url: '/#projects', type: 'section' as const },
    { id: 'skills', title: 'Skills & Technologies', url: '/#skills', type: 'section' as const },
    { id: 'testimonials', title: 'Testimonials', url: '/#testimonials', type: 'section' as const },
    { id: 'contact', title: 'Contact', url: '/#contact', type: 'section' as const },
  ];
  
  items.push(...sections);
  
  // Try to load projects data if available
  try {
    if (typeof window !== 'undefined') {
      // Try to get from window global
      if ((window as any).__PROJECTS_DATA__) {
        const projects = (window as any).__PROJECTS_DATA__;
        for (const project of projects) {
          items.push({
            id: project.id || project.title.toLowerCase().replace(/\s+/g, '-'),
            title: project.title,
            description: project.shortDescription || project.description,
            tags: project.tags || project.techStack?.map((t: any) => t.name || t) || [],
            type: 'project',
            url: `/projects/${project.id || project.slug || project.title.toLowerCase().replace(/\s+/g, '-')}`,
          });
        }
      }
      // Try to get from data attribute
      else {
        const projectsScript = document.querySelector('script[data-projects]');
        if (projectsScript) {
          try {
            const projects = JSON.parse(projectsScript.getAttribute('data-projects') || '[]');
            for (const project of projects) {
              items.push({
                id: project.id || project.title.toLowerCase().replace(/\s+/g, '-'),
                title: project.title,
                description: project.shortDescription || project.description,
                tags: project.tags || project.techStack?.map((t: any) => t.name || t) || [],
                type: 'project',
                url: `/projects/${project.id || project.slug || project.title.toLowerCase().replace(/\s+/g, '-')}`,
              });
            }
          } catch (e) {
            console.log('Could not parse projects data:', e);
          }
        }
      }
    }
  } catch (error) {
    console.log('Could not load projects data for search:', error);
  }
  
  return items;
}

