import { Award, Calendar, Clock, Heart, MessageCircle, Share2 } from "lucide-react";
import { useRecoilValue } from "recoil";
import { blogState } from "../store/blogState";

const FeatureadPost = () => {
    const { posts, isLoading, error } = useRecoilValue(blogState);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    // Check if posts array exists and has at least one item
    if (!posts || posts.length === 0) {
        return <div>No featured posts available</div>;
    }

    const featuredPost = posts[0];
    console.log(featuredPost)
    return (
        <div>
            {/* Featured Post */}
            <article className="bg-card-background rounded-xl shadow-sm overflow-hidden mb-8 ">
                <div className="relative">
                    <img
                        src={featuredPost.image ? `http://localhost:5000/${featuredPost.image}` : "https://placehold.co/600x400/e2e8f0/475569?text=No+Image"}
                        alt={featuredPost.title}
                        className="w-full h-64 sm:h-80 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                        <span className="bg-primary-color text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                            <Award className="h-4 w-4 mr-1" />
                            Featured
                        </span>
                    </div>
                </div>
                <div className="p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {featuredPost.tags?.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-primary-color bg-opacity-10 text-primary-color px-3 py-1 rounded-full text-sm font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h2 className="text-3xl font-bold text-text-color mb-4 leading-tight">
                        {featuredPost.title}
                    </h2>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-secondary-color">
                            <div className="flex items-center space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>{featuredPost.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>{featuredPost.readTime}</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1 text-red-600">
                                <Heart className="h-4 w-4" />
                                <span className="text-sm">{featuredPost.likes}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-blue-600">
                                <MessageCircle className="h-4 w-4" />
                                <span className="text-sm">{featuredPost.comments}</span>
                            </div>
                            <button className="p-2 text-secondary-color hover:text-primary-color transition-colors">
                                <Share2 className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default FeatureadPost;