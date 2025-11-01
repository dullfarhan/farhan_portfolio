export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  featured: boolean;
  thumbnail: string;
  images: string[];
  videoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
  techStack: TechStack[];
  metrics: Metric[];
  problem: string;
  solution: string;
  results: string[];
  testimonial?: Testimonial;
  category: 'web' | 'ai' | 'mobile' | 'devops';
  year: number;
}

export interface TechStack {
  name: string;
  icon?: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'ai/ml' | 'other';
}

export interface Metric {
  label: string;
  value: string;
  icon?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  image?: string;
  quote: string;
}

export const projects: Project[] = [
  {
    id: 'fullframe',
    title: 'FullFrame',
    shortDescription: 'A secure AI-powered tool that generates fast summaries of scripts and books, enhanced with deep character description and visualized headshots/scenes.',
    fullDescription: 'FullFrame is an innovative AI-powered platform designed specifically for the entertainment industry, providing instant script and book analysis with character visualization capabilities.',
    featured: true,
    thumbnail: '/assets/images/FullFrame.png',
    images: ['/assets/images/FullFrame.png', '/assets/images/FullFrame-2.png'],
    liveUrl: 'https://fullfr.me/',
    tags: ['AI Summarization', 'Secure', 'Full-Stack'],
    category: 'ai',
    year: 2024,
    techStack: [
      { name: 'React', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'OpenAI GPT-4', category: 'ai/ml' },
      { name: 'DALL-E', category: 'ai/ml' },
      { name: 'PostgreSQL', category: 'database' },
      { name: 'AWS', category: 'devops' },
    ],
    metrics: [
      { label: 'Processing Speed', value: '10x Faster' },
      { label: 'Accuracy', value: '95%+' },
      { label: 'User Satisfaction', value: '4.8/5' },
      { label: 'Scripts Processed', value: '1000+' },
    ],
    problem: 'Entertainment industry professionals spend hours manually reading and analyzing scripts, making it difficult to quickly evaluate project potential and understand character dynamics.',
    solution: 'Built an AI-powered platform that instantly analyzes scripts, generates comprehensive summaries, provides character descriptions, and creates visual representations using DALL-E. Implemented secure authentication and data encryption to protect intellectual property.',
    results: [
      'Reduced script analysis time from hours to minutes',
      'Processing accuracy of 95%+ verified by industry professionals',
      'Handled 1000+ scripts in first 6 months',
      'Positive feedback from major production companies',
    ],
    testimonial: {
      name: 'Sarah Mitchell',
      role: 'Production Manager',
      company: 'FullFrame Studios',
      quote: 'FullFrame transformed how we evaluate scripts. What used to take hours now takes minutes, and the character visualizations help us make better casting decisions.',
    },
  },
  {
    id: 'crowdiq',
    title: 'DevelMo - CrowdIQ',
    shortDescription: 'CrowdIQ turns standard cameras into smart AI analytics tools for real-time people counting, heatmaps, and demographics insights.',
    fullDescription: 'An advanced computer vision platform that transforms ordinary security cameras into intelligent analytics tools, providing real-time crowd monitoring and demographic insights.',
    featured: true,
    thumbnail: '/assets/images/DevelMo.png',
    images: ['/assets/images/DevelMo.png', '/assets/images/DevelMo-2.png'],
    liveUrl: 'https://develmo.com/our-products/crowdiq/',
    tags: ['Comp. Vision', 'YOLO11x', 'Analytics'],
    category: 'ai',
    year: 2024,
    techStack: [
      { name: 'Python', category: 'backend' },
      { name: 'YOLO11x', category: 'ai/ml' },
      { name: 'PyTorch', category: 'ai/ml' },
      { name: 'OpenCV', category: 'ai/ml' },
      { name: 'React', category: 'frontend' },
      { name: 'FastAPI', category: 'backend' },
      { name: 'Redis', category: 'database' },
      { name: 'Docker', category: 'devops' },
    ],
    metrics: [
      { label: 'Detection Accuracy', value: '98%' },
      { label: 'Processing Speed', value: '30 FPS' },
      { label: 'Locations Deployed', value: '50+' },
      { label: 'Daily Insights', value: '1M+' },
    ],
    problem: 'Retail stores and venues struggled to understand foot traffic patterns, optimize staff allocation, and improve customer experience due to lack of real-time crowd analytics.',
    solution: 'Developed a cutting-edge computer vision system using YOLO11x for real-time people detection and tracking. Created an intuitive dashboard for visualizing heatmaps, crowd density, and demographic data. Optimized for edge deployment to work with existing camera infrastructure.',
    results: [
      '98% accuracy in people detection and counting',
      'Real-time processing at 30 FPS on standard hardware',
      'Deployed across 50+ retail locations and venues',
      'Enabled data-driven decisions leading to 25% improvement in staff efficiency',
    ],
    testimonial: {
      name: 'Ahmed Hassan',
      role: 'CTO',
      company: 'DevelMo',
      quote: 'The CrowdIQ platform exceeded our expectations. The accuracy and real-time capabilities have made it an essential tool for our clients.',
    },
  },
  {
    id: 'mmken',
    title: 'MMKEN',
    shortDescription: 'A complete digital marketplace with dedicated seller, buyer, and admin portals. Features include product management, order processing, secure payments, CRM, and real-time dashboards.',
    fullDescription: 'A comprehensive B2B2C marketplace platform connecting vendors and buyers with advanced features for product management, order processing, and business analytics.',
    featured: true,
    thumbnail: '/assets/images/Walqalum.png',
    images: ['/assets/images/Walqalum.png', '/assets/images/Walqalum-2.png'],
    liveUrl: 'https://mmken.co/',
    tags: ['B2B2C', 'Secure Payments', 'Multi-Vendor'],
    category: 'web',
    year: 2023,
    techStack: [
      { name: 'Next.js', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Node.js', category: 'backend' },
      { name: 'Express', category: 'backend' },
      { name: 'MongoDB', category: 'database' },
      { name: 'Redis', category: 'database' },
      { name: 'Stripe', category: 'other' },
      { name: 'AWS', category: 'devops' },
    ],
    metrics: [
      { label: 'Vendors Onboarded', value: '200+' },
      { label: 'Monthly Transactions', value: '$500K+' },
      { label: 'Products Listed', value: '10K+' },
      { label: 'Uptime', value: '99.9%' },
    ],
    problem: 'Traditional marketplaces lacked the sophisticated multi-vendor capabilities and integrated CRM tools needed for B2B2C operations, making it difficult for businesses to scale.',
    solution: 'Built a scalable multi-vendor marketplace with separate portals for sellers, buyers, and admins. Implemented secure payment processing with Stripe, real-time inventory management, advanced search and filtering, and comprehensive analytics dashboards. Architected for high availability with load balancing and caching.',
    results: [
      'Successfully onboarded 200+ vendors in first year',
      'Processing $500K+ in monthly transactions',
      'Managing 10,000+ products across multiple categories',
      'Achieved 99.9% uptime with robust infrastructure',
    ],
    testimonial: {
      name: 'Talha Rahman',
      role: 'Business Owner',
      company: 'MMKEN',
      quote: 'This platform transformed our business operations. The vendor management and analytics tools have been game-changers for our growth.',
    },
  },
  {
    id: 'ai-chreade',
    title: 'AI Chreade',
    shortDescription: 'An Azure-powered image generation tool using DALL·E to create visuals from text prompts, supporting advanced prompt engineering.',
    fullDescription: 'An intelligent image generation platform leveraging Azure OpenAI Service and DALL-E to create high-quality images from text descriptions with advanced prompt engineering capabilities.',
    featured: false,
    thumbnail: '/assets/images/AI-Chreades.png',
    images: ['/assets/images/AI-Chreades.png', '/assets/images/AI-Chreades-2.png'],
    tags: ['Azure', 'Image Gene', 'Prompt Engg.'],
    category: 'ai',
    year: 2023,
    techStack: [
      { name: 'React', category: 'frontend' },
      { name: 'TypeScript', category: 'frontend' },
      { name: 'Azure', category: 'devops' },
      { name: 'DALL-E', category: 'ai/ml' },
      { name: 'OpenAI API', category: 'ai/ml' },
      { name: 'Node.js', category: 'backend' },
    ],
    metrics: [
      { label: 'Images Generated', value: '50K+' },
      { label: 'Average Rating', value: '4.7/5' },
      { label: 'Generation Time', value: '<30s' },
      { label: 'Users', value: '5K+' },
    ],
    problem: 'Content creators and designers needed a user-friendly tool for generating custom images quickly without requiring design skills or expensive software.',
    solution: 'Created an intuitive web application powered by Azure OpenAI Service and DALL-E. Implemented advanced prompt engineering features, image history management, and download capabilities. Optimized API calls for cost efficiency and speed.',
    results: [
      'Generated 50,000+ images for 5,000+ users',
      'Average generation time under 30 seconds',
      'User satisfaction rating of 4.7/5',
      'Reduced image creation costs by 80% compared to traditional methods',
    ],
  },
];

// Filter featured projects
export const featuredProjects = projects.filter(p => p.featured);

// Get project by ID
export const getProjectById = (id: string) => projects.find(p => p.id === id);

// Get projects by category
export const getProjectsByCategory = (category: Project['category']) => 
  projects.filter(p => p.category === category);


