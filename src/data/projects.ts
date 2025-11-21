import type { ImageMetadata } from "astro";
import FullFrame1 from "@/assets/images/FullFrame.png";
import FullFrame2 from "@/assets/images/FullFrame-2.png";
import DevelMo1 from "@/assets/images/DevelMo.png";
import DevelMo2 from "@/assets/images/DevelMo-2.png";
import Walqalum1 from "@/assets/images/Walqalum.png";
import Walqalum2 from "@/assets/images/Walqalum-2.png";
import AIChreades1 from "@/assets/images/AI-Chreades.png";
import AIChreades2 from "@/assets/images/AI-Chreades-2.png";
import FlowStack from "@/assets/images/FlowStack.png";
import NovaTech from "@/assets/images/NovaTech.png";
import ProductLead from "@/assets/images/ProductLead.png";

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image1: ImageMetadata;
  image2: ImageMetadata;
  link?: string;
  videoDemo?: string;
  tags: string[];
  technologies?: string[];
  features?: string[];
  challenges?: string[];
  solutions?: string[];
  year?: string;
  role?: string;
  problemStatement?: string;
  solution?: string;
  process?: string[];
  metrics?: { label: string; value: string }[];
  testimonials?: { name: string; role: string; quote: string; image?: ImageMetadata }[];
  relatedProjects?: string[];
  teamSize?: string;
  timeline?: string;
  keyTakeaways?: string[];
}

export const projects: Project[] = [
  {
    slug: "fullframe",
    title: "FullFrame",
    shortDescription:
      "A secure AI-powered tool that generates fast summaries of scripts and books, enhanced with deep character description and visualized headshots/scenes.",
    fullDescription:
      "FullFrame is an innovative AI-powered platform designed to revolutionize how scripts and books are analyzed and summarized. The tool leverages advanced AI algorithms to generate comprehensive summaries while providing deep character descriptions and visual representations. Built with security and performance in mind by DaanFr, FullFrame offers a seamless experience for writers, producers, and content creators who need quick insights into lengthy documents, capable of processing 1,000+ pages with parallel analysis pipelines.",
    image1: FullFrame1,
    image2: FullFrame2,
    link: "https://fullfr.me/",
    videoDemo: "https://assets.mixkit.co/videos/preview/mixkit-working-on-code-on-a-laptop-screen-closup-42662-large.mp4",
    tags: ["AI Summarization", "Secure", "Full-Stack"],
    technologies: [
      "React",
      "Context API",
      "Tailwind CSS",
      "Django",
      "LangChain",
      "Google Maps API",
      "MongoDB",
      "GitHub Actions",
      "Azure",
    ],
    features: [
      "AI-powered script and book summarization",
      "Deep character analysis and descriptions",
      "Visualized headshots and scene generation",
      "Secure document processing",
      "Fast and efficient summarization",
      "User-friendly interface",
    ],
    challenges: [
      "Processing large documents efficiently",
      "Maintaining accuracy in AI-generated summaries",
      "Ensuring data security and privacy",
      "Optimizing performance for real-time processing",
    ],
    solutions: [
      "Implemented chunk-based processing for large documents",
      "Fine-tuned AI models for better accuracy",
      "Built robust security measures with encryption",
      "Optimized API calls and caching strategies",
    ],
    year: "2024",
    role: "Full Stack Team Lead",
    problemStatement:
      "Content creators and producers needed a faster way to analyze lengthy scripts and books. Manual reading and analysis was time-consuming, and existing tools lacked the depth needed for character analysis and visual representation.",
    solution:
      "DaanFr developed an AI-powered platform that uses advanced natural language processing to automatically generate comprehensive summaries, extract character details, and create visual representations. The solution combines OpenAI's GPT models with custom algorithms for document processing and image generation.",
    process: [
      "Research & Discovery",
      "AI Model Selection & Training",
      "Architecture Design",
      "Frontend Development",
      "Backend API Development",
      "Security Implementation",
      "Testing & Optimization",
      "Deployment & Launch",
    ],
    metrics: [
      { label: "Processing Speed", value: "45% reduction" },
      { label: "Deployment Time", value: "60% reduction" },
      { label: "Reliability", value: "50+ zero-downtime releases" },
      { label: "Scale", value: "1,000+ page docs" },
    ],
    testimonials: [
      {
        name: "Sarah Jenkins",
        role: "Head of Production at StreamLine Studios",
        quote: "FullFrame has completely transformed our development process. What used to take weeks of reading and manual breakdown now happens in minutes. The character consistency is mind-blowing.",
      }
    ],
    teamSize: "4 members",
    timeline: "6 months",
    relatedProjects: ["develmo-crowdiq", "ai-chreade"],
    keyTakeaways: [
        "Architected a scalable Django backend and integrated AI-driven analysis pipelines.",
        "Implemented secure enterprise authentication using Azure AD B2C.",
        "Established CI/CD pipelines, automated testing, and production deployment workflows.",
        "Mastered advanced prompt engineering for complex narrative structures."
    ]
  },
  {
    slug: "develmo-crowdiq",
    title: "DevelMo - CrowdIQ",
    shortDescription:
      "CrowdIQ turns standard cameras into smart AI analytics tools for real-time people counting, heatmaps, and demographics insights.",
    fullDescription:
      "CrowdIQ is a cutting-edge computer vision solution developed by DaanFr that transforms standard cameras into intelligent analytics systems. Using advanced YOLO11x models, the platform provides real-time people counting, generates heatmaps for crowd analysis, and delivers detailed demographics insights. This powerful tool helps businesses understand customer behavior, optimize space utilization, and make data-driven decisions.",
    image1: DevelMo1,
    image2: DevelMo2,
    link: "https://develmo.com/our-products/crowdiq/",
    tags: ["Comp. Vision", "YOLO11x", "Analytics"],
    technologies: [
      "Python",
      "YOLO11x",
      "OpenCV",
      "TensorFlow",
      "Django",
      "React",
      "PostgreSQL",
      "Docker",
    ],
    features: [
      "Real-time people counting",
      "Heatmap generation",
      "Demographics analysis",
      "Multi-camera support",
      "Real-time dashboard",
      "Historical data analytics",
    ],
    challenges: [
      "Real-time processing of video streams",
      "Accuracy in crowded environments",
      "Handling multiple camera feeds simultaneously",
      "Privacy compliance and data security",
    ],
    solutions: [
      "Optimized YOLO11x model for real-time inference",
      "Implemented advanced tracking algorithms",
      "Built scalable microservices architecture",
      "Ensured GDPR compliance with anonymization",
    ],
    year: "2024",
    role: "DaanFr AI & Development Team",
    problemStatement:
      "Businesses needed real-time insights into customer behavior and crowd patterns but existing solutions were expensive, required specialized hardware, and lacked real-time processing capabilities.",
    solution:
      "DaanFr created a computer vision platform that transforms standard cameras into intelligent analytics systems using YOLO11x models. The solution processes video streams in real-time, generates heatmaps, and provides demographics insights without requiring expensive hardware upgrades.",
    process: [
      "Computer Vision Research",
      "YOLO Model Optimization",
      "Real-time Processing Pipeline",
      "Dashboard Development",
      "Multi-camera Integration",
      "Privacy Compliance",
      "Performance Optimization",
      "Production Deployment",
    ],
    metrics: [
      { label: "Real-time Processing", value: "< 100ms latency" },
      { label: "Accuracy", value: "98.5%" },
      { label: "Cost Reduction", value: "60%" },
      { label: "Deployed Cameras", value: "200+" },
    ],
    testimonials: [
      {
        name: "David Chen",
        role: "Operations Director, RetailGiant",
        quote: "We were looking at spending millions on new hardware. CrowdIQ let us use our existing CCTV network to get even better data. The heatmap analytics alone have increased our store conversion by 15%.",
      }
    ],
    teamSize: "6 members",
    timeline: "8 months",
    relatedProjects: ["fullframe", "mmken"],
    keyTakeaways: [
        "Developed expertise in optimizing computer vision models for edge deployment.",
        "Solved complex challenges in multi-camera synchronization and tracking.",
        "Navigated the complexities of privacy-compliant data collection in public spaces.",
        "Created effective visualizations for real-time spatial data."
    ]
  },
  {
    slug: "mmken",
    title: "MMKEN",
    shortDescription:
      "A complete digital marketplace with dedicated seller, buyer, and admin portals. Features include product management, order processing, secure payments, CRM, and real-time dashboards.",
    fullDescription:
      "MMKEN is a comprehensive B2B2C digital marketplace platform developed by DaanFr that connects sellers, buyers, and administrators through dedicated portals. The platform features robust product management, streamlined order processing, secure payment integration, comprehensive CRM capabilities, and real-time analytics dashboards. Built to handle high transaction volumes, MMKEN provides a seamless experience for all stakeholders in the marketplace ecosystem.",
    image1: Walqalum1,
    image2: Walqalum2,
    link: "https://mmken.co/",
    tags: ["B2B2C", "Secure Payments", "Multi-Vendor"],
    technologies: [
      "NestJS",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Stripe",
      "URWAY",
      "Zatica",
      "Alibaba Cloud",
      "Docker",
    ],
    features: [
      "Multi-vendor marketplace",
      "Secure payment processing",
      "Order management system",
      "CRM integration",
      "Real-time dashboards",
      "Inventory management",
      "Seller and buyer portals",
      "Admin control panel",
    ],
    challenges: [
      "Handling concurrent transactions",
      "Managing multiple vendor inventories",
      "Ensuring payment security",
      "Scalability for growing user base",
    ],
    solutions: [
      "Implemented Redis for caching and session management",
      "Built robust inventory synchronization system",
      "Integrated secure payment gateways with PCI compliance",
      "Designed scalable microservices architecture",
    ],
    year: "2023-2024",
    role: "DaanFr Development & Leadership Team",
    problemStatement:
      "The marketplace needed a scalable platform to handle multiple vendors, complex transactions, and real-time inventory management while ensuring secure payments and seamless user experience across different user roles.",
    solution:
      "DaanFr built a comprehensive B2B2C marketplace using microservices architecture with NestJS and React. The solution includes dedicated portals for sellers, buyers, and admins, with Redis for caching, Stripe for payments, and real-time inventory synchronization.",
    process: [
      "Requirements Analysis",
      "System Architecture Design",
      "Database Schema Design",
      "Payment Integration",
      "Multi-portal Development",
      "Inventory Management System",
      "CRM Integration",
      "Security & Testing",
      "Scalability Optimization",
      "Launch & Monitoring",
    ],
    metrics: [
      { label: "Adoption Rate", value: "45% improved" },
      { label: "Response Time", value: "0.6s (from 1.8s)" },
      { label: "Reconciliation", value: "Automated" },
      { label: "Vendor Count", value: "500+" },
    ],
    testimonials: [
      {
        name: "Amira K.",
        role: "CEO, MMKEN Marketplace",
        quote: "The scalability of the platform is incredible. We went from 50 to 500 vendors in three months without a single hiccup. The admin dashboard gives us exactly the control we need.",
      }
    ],
    teamSize: "8 members",
    timeline: "12 months",
    relatedProjects: ["fullframe", "develmo-crowdiq"],
    keyTakeaways: [
        "Designed and directed the full-scale redevelopment of MMKEN 2.0.",
        "Integrated payment and invoice-clearance APIs (URWAY, Zatica).",
        "Optimized database queries and cache strategies, cutting response time by 66%.",
        "Delivered a real-time buyer dashboard with analytics and automated notifications."
    ]
  },
  {
    slug: "ai-chreade",
    title: "AI Chreade",
    shortDescription:
      "An Azure-powered image generation tool using DALL·E to create visuals from text prompts, supporting advanced prompt engineering.",
    fullDescription:
      "AI Chreade is an innovative image generation platform developed by DaanFr, powered by Azure and DALL·E technology. The tool enables users to create stunning visuals from text prompts with support for advanced prompt engineering techniques. Whether for creative projects, marketing materials, or conceptual designs, AI Chreade makes professional image generation accessible and efficient.",
    image1: AIChreades1,
    image2: AIChreades2,
    link: "https://image-generator.azurewebsites.net/",
    tags: ["Azure", "Image Gene", "Prompt Engg."],
    technologies: [
      "React",
      "Next.js",
      "Azure",
      "DALL·E API",
      "TypeScript",
      "Node.js",
      "MongoDB",
    ],
    features: [
      "Text-to-image generation",
      "Advanced prompt engineering",
      "Image variation generation",
      "Batch processing",
      "Image gallery and management",
      "Prompt templates library",
    ],
    challenges: [
      "Optimizing API costs",
      "Handling long generation times",
      "Managing image storage",
      "Improving prompt quality",
    ],
    solutions: [
      "Implemented request queuing and caching",
      "Added progress tracking for long operations",
      "Integrated Azure Blob Storage for efficient storage",
      "Created prompt templates and suggestions",
    ],
    year: "2024",
    role: "DaanFr Development Team",
    problemStatement:
      "Users needed an accessible way to generate high-quality images from text prompts without technical expertise in prompt engineering, while managing costs and storage efficiently.",
    solution:
      "DaanFr developed an Azure-powered platform that simplifies image generation using DALL·E API with intelligent prompt engineering, request queuing, and Azure Blob Storage for efficient image management. The solution includes a template library and batch processing capabilities.",
    process: [
      "API Integration Research",
      "Prompt Engineering System",
      "Queue Management",
      "Storage Architecture",
      "UI/UX Design",
      "Cost Optimization",
      "Template Library",
      "Testing & Launch",
    ],
    metrics: [
      { label: "Images Generated", value: "50,000+" },
      { label: "Cost Efficiency", value: "40% reduction" },
      { label: "User Satisfaction", value: "4.7/5" },
      { label: "Generation Time", value: "8-12 seconds" },
    ],
    teamSize: "3 members",
    timeline: "4 months",
    relatedProjects: ["fullframe"],
    keyTakeaways: [
        "Optimized cloud resource costs for generative AI applications.",
        "Built robust asynchronous processing pipelines for long-running tasks.",
        "Addressed the UX challenges of AI-assisted creative tools.",
        "Leveraged Azure cloud services and integration patterns effectively."
    ]
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
