import { TrendingUp } from "lucide-react";

const PopularPost = () => {
    const blogPosts = [
        {
            id: 2,
            title: "Building My First AI-Powered Code Review Tool",
            excerpt: "Documenting the process of creating an intelligent code reviewer using OpenAI's API and lessons learned about AI integration in development workflows.",
            author: "Alex Johnson",
            date: "May 15, 2025",
            readTime: "8 min read",
            image: "/api/placeholder/400/250",
            tags: ["AI", "Tools", "Development"],
            likes: 67,
            comments: 18,
            category: "Project Showcase"
        },
        {
            id: 3,
            title: "TypeScript Generics: From Confusion to Clarity",
            excerpt: "My systematic approach to mastering TypeScript generics, including practical examples and mental models that finally made it click.",
            author: "Alex Johnson",
            date: "May 12, 2025",
            readTime: "10 min read",
            image: "/api/placeholder/400/250",
            tags: ["TypeScript", "Learning", "Tutorial"],
            likes: 124,
            comments: 31,
            category: "Learning Journey"
        },
        {
            id: 4,
            title: "Optimizing Database Queries: Real Performance Gains",
            excerpt: "Case study of how I improved our application's database performance by 60% through query optimization and indexing strategies.",
            author: "Alex Johnson",
            date: "May 8, 2025",
            readTime: "6 min read",
            image: "/api/placeholder/400/250",
            tags: ["Database", "Performance", "Backend"],
            likes: 98,
            comments: 27,
            category: "Technical Deep Dive"
        },
        {
            id: 5,
            title: "My Developer Setup: Tools That Boost Productivity",
            excerpt: "A comprehensive overview of my development environment, from VS Code extensions to terminal configurations that save me hours each week.",
            author: "Alex Johnson",
            date: "May 5, 2025",
            readTime: "5 min read",
            image: "/api/placeholder/400/250",
            tags: ["Productivity", "Tools", "Setup"],
            likes: 156,
            comments: 42,
            category: "Resources"
        },
        {
            id: 6,
            title: "Contributing to Open Source: My First PR Experience",
            excerpt: "The complete story of my first meaningful contribution to a major open source project, including mistakes made and lessons learned.",
            author: "Alex Johnson",
            date: "May 1, 2025",
            readTime: "7 min read",
            image: "/api/placeholder/400/250",
            tags: ["Open Source", "Learning", "Community"],
            likes: 78,
            comments: 19,
            category: "Learning Journey"
        }
    ];
    return (
        <div>
            {/* Popular Posts */}
            <div className="bg-card-background rounded-xl shadow-sm p-6 border border-border-color">
                <h3 className="text-lg font-bold text-text-color mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-orange-600" />
                    Popular Posts
                </h3>
                <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post, index) => (
                        <div key={index} className="pb-4 border-b border-border-color last:border-b-0">
                            <h4 className="text-text-color hover:text-primary-color cursor-pointer font-medium mb-2 text-sm leading-tight">
                                {post.title}
                            </h4>
                            <div className="flex items-center justify-between text-xs text-secondary-color">
                                <span>{post.date}</span>
                                <div className="flex items-center space-x-2">
                                    <span>❤️ {post.likes}</span>
                                    <span>💬 {post.comments}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PopularPost;