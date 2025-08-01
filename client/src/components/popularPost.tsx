import { TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { blogService } from "../services/blogService";
import type { BlogPost } from "../types/blog";

const PopularPost = () => {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setIsLoading(true);
                const blogs = await blogService.getAllBlogs();
                setBlogPosts(blogs);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch blogs');
            } finally {
                setIsLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (isLoading) {
        return (
            <div className="bg-card-background rounded-xl shadow-sm p-6 border border-border-color mt-10">
                <h3 className="text-lg font-bold text-text-color mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-orange-600" />
                    Popular Posts
                </h3>
                <div className="space-y-4">
                    {[1, 2, 3].map((index) => (
                        <div key={index} className="animate-pulse">
                            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-card-background rounded-xl shadow-sm p-6 border border-border-color">
                <h3 className="text-lg font-bold text-text-color mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-orange-600" />
                    Popular Posts
                </h3>
                <div className="text-red-500">{error}</div>
            </div>
        );
    }

    return (
        <div>
            <div className="bg-card-background rounded-xl shadow-sm p-6 border border-border-color mt-10">
                <h3 className="text-lg font-bold text-text-color mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-orange-600" />
                    Popular Posts
                </h3>
                <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                        <div key={post._id} className="pb-4 border-b border-border-color last:border-b-0">
                            <h4 className="text-text-color hover:text-primary-color cursor-pointer font-medium mb-2 text-sm leading-tight">
                                {post.title}
                            </h4>
                            <div className="flex items-center justify-between text-xs text-secondary-color">
                                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                                <div className="flex items-center space-x-2">
                                    <span>❤️ {post.likes || 0}</span>
                                    <span>💬 {post.comments || 0}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopularPost;