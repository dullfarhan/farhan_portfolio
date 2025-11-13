import React, { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { Search as SearchIcon, X, ArrowRight, Command } from 'lucide-react';
import { search, highlightSearchTerms, initializeSearchData, type SearchResult, type SearchableItem } from '../../utils/search';

interface SearchProps {
  items?: SearchableItem[];
  onResultClick?: (result: SearchResult) => void;
}

export default function Search({ items: propItems = [], onResultClick }: SearchProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchItems, setSearchItems] = useState<SearchableItem[]>(propItems);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Initialize search data on mount
  useEffect(() => {
    if (propItems.length > 0) {
      setSearchItems(propItems);
    } else {
      initializeSearchData().then((items) => {
        setSearchItems(items);
      });
    }
  }, [propItems]);

  // Handle search
  useEffect(() => {
    if (query.trim().length > 0 && searchItems.length > 0) {
      const searchResults = search(query, searchItems);
      setResults(searchResults);
      setSelectedIndex(0);
    } else {
      setResults([]);
    }
  }, [query, searchItems]);

  // Keyboard shortcut (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
        setTimeout(() => inputRef.current?.focus(), 100);
      }
      
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        setQuery('');
        setResults([]);
      }
    };

    window.addEventListener('keydown', handleKeyDown as any);
    return () => window.removeEventListener('keydown', handleKeyDown as any);
  }, [isOpen]);

  // Keyboard navigation in results
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault();
      handleResultClick(results[selectedIndex]);
    }
  };

  // Scroll selected result into view
  useEffect(() => {
    if (resultsRef.current && selectedIndex >= 0) {
      const selectedElement = resultsRef.current.children[selectedIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [selectedIndex]);

  const handleResultClick = (result: SearchResult) => {
    if (onResultClick) {
      onResultClick(result);
    } else {
      window.location.href = result.url;
    }
    setIsOpen(false);
    setQuery('');
    setResults([]);
  };

  const handleClose = () => {
    setIsOpen(false);
    setQuery('');
    setResults([]);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="liquid-glass-button text-textSecondary hover:text-accent-blue inline-flex items-center gap-2 px-4 py-2 min-h-[44px] min-w-[44px] rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2"
        aria-label="Open search (Cmd/Ctrl + K)"
        title="Search (Cmd/Ctrl + K)"
      >
        <SearchIcon size={18} aria-hidden="true" />
        <span className="hidden sm:inline text-sm font-medium">Search</span>
        <kbd className="hidden md:inline-flex items-center gap-1 px-2 py-1 text-xs font-mono bg-wash-light rounded border border-wash-medium">
          <Command size={12} />
          <span>K</span>
        </kbd>
      </button>
    );
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Search Modal */}
      <div
        className="fixed inset-x-4 top-20 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:top-32 md:w-full md:max-w-2xl z-50"
        role="dialog"
        aria-modal="true"
        aria-label="Search"
      >
        <div className="liquid-glass-card rounded-3xl shadow-2xl overflow-hidden">
          {/* Search Input */}
          <div className="flex items-center gap-3 p-4 border-b border-black/5">
            <SearchIcon size={20} className="text-textSecondary flex-shrink-0" aria-hidden="true" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search projects, skills, sections..."
              className="flex-1 bg-transparent border-none outline-none text-textPrimary placeholder:text-textTertiary text-base"
              autoFocus
              aria-label="Search input"
            />
            <button
              onClick={handleClose}
              className="liquid-glass rounded-full p-2 hover:bg-glass-tinted transition-all duration-300 min-h-[36px] min-w-[36px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2"
              aria-label="Close search"
            >
              <X size={18} className="text-textSecondary" aria-hidden="true" />
            </button>
          </div>

          {/* Results */}
          <div
            ref={resultsRef}
            className="max-h-[60vh] overflow-y-auto"
            role="listbox"
            aria-label="Search results"
          >
            {results.length > 0 ? (
              results.map((result, index) => (
                <button
                  key={result.id}
                  onClick={() => handleResultClick(result)}
                  className={`w-full text-left p-4 hover:bg-glass-tinted transition-colors duration-200 border-b border-black/5 last:border-b-0 focus:outline-none focus:bg-glass-tinted ${
                    index === selectedIndex ? 'bg-glass-tinted' : ''
                  }`}
                  role="option"
                  aria-selected={index === selectedIndex}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-accent-blue uppercase tracking-wide">
                          {result.type}
                        </span>
                        <h3
                          className="font-semibold text-textPrimary truncate"
                          dangerouslySetInnerHTML={{
                            __html: highlightSearchTerms(result.title, query),
                          }}
                        />
                      </div>
                      {result.excerpt && (
                        <p
                          className="text-sm text-textSecondary line-clamp-2"
                          dangerouslySetInnerHTML={{
                            __html: highlightSearchTerms(result.excerpt, query),
                          }}
                        />
                      )}
                    </div>
                    <ArrowRight
                      size={18}
                      className="text-textTertiary flex-shrink-0 mt-1"
                      aria-hidden="true"
                    />
                  </div>
                </button>
              ))
            ) : query.trim().length > 0 ? (
              <div className="p-8 text-center">
                <p className="text-textSecondary">No results found for "{query}"</p>
                <p className="text-sm text-textTertiary mt-2">Try a different search term</p>
              </div>
            ) : (
              <div className="p-8 text-center">
                <p className="text-textSecondary">Start typing to search...</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-textTertiary">
                  <kbd className="px-2 py-1 bg-wash-light rounded border border-wash-medium">
                    ↑↓
                  </kbd>
                  <span>Navigate</span>
                  <kbd className="px-2 py-1 bg-wash-light rounded border border-wash-medium">
                    Enter
                  </kbd>
                  <span>Select</span>
                  <kbd className="px-2 py-1 bg-wash-light rounded border border-wash-medium">
                    Esc
                  </kbd>
                  <span>Close</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

