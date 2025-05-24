import { Heart, MessageCircle } from "lucide-react";
import { useState } from "react";

const BlogPost = () => {
    const blogPosts = [
        {
            id: 2,
            title: "Building My First AI-Powered Code Review Tool",
            excerpt: "Documenting the process of creating an intelligent code reviewer using OpenAI's API and lessons learned about AI integration in development workflows.",
            author: "Alex Johnson",
            date: "May 15, 2025",
            readTime: "8 min read",
            image: "https://www.womenintech.co.uk/wp-content/uploads/2021/11/Tech-skills-2022-1.png",
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
            image: "https://www.womenintech.co.uk/wp-content/uploads/2021/11/Tech-skills-2022-1.png",
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
            image: "https://www.womenintech.co.uk/wp-content/uploads/2021/11/Tech-skills-2022-1.png",
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
            image: "https://www.womenintech.co.uk/wp-content/uploads/2021/11/Tech-skills-2022-1.png",
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
            image: "https://www.womenintech.co.uk/wp-content/uploads/2021/11/Tech-skills-2022-1.png",
            tags: ["Open Source", "Learning", "Community"],
            likes: 78,
            comments: 19,
            category: "Learning Journey"
        }
    ];
    const [activeCategory, setActiveCategory] = useState('All');
    const filteredPosts = activeCategory === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);
    return (
        <div>
            {/* Blog Posts */}
            <div className="space-y-6">
                {filteredPosts.map((post) => (
                    <article key={post.id} className="bg-card-background rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="md:flex">
                            <div className="md:w-1/3">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-48 md:h-full object-cover"
                                />
                            </div>
                            <div className="md:w-2/3 p-6">
                                <div className="flex flex-wrap gap-2 mb-3">
                                    <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                                        {post.category}
                                    </span>
                                    {post.tags.slice(0, 2).map((tag, index) => (
                                        <span
                                            key={index}
                                            className="bg-background-color text-gray-600 px-2 py-1 rounded text-xs"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-xl font-bold text-text-color mb-3 hover:text-slate-700 cursor-pointer">
                                    {post.title}
                                </h3>
                                <p className="text-text-color mb-4 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-4 text-sm text-text-color">
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center space-x-1 text-red-600">
                                            <Heart className="h-4 w-4" />
                                            <span className="text-sm">{post.likes}</span>
                                        </div>
                                        <div className="flex items-center space-x-1 text-blue-600">
                                            <MessageCircle className="h-4 w-4" />
                                            <span className="text-sm">{post.comments}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}

export default BlogPost;