import PersonalInformation from '../components/personalInformation';
import Categories from '../components/categories';
import About from '../components/About';
import Skills from '../components/Skills';
import Newsletter from '../components/newsletter';
import FeatureadPost from '../components/featureadPost';
import { ArrowRight } from 'lucide-react';
import PopularPost from '../components/popularPost';
import BlogPostList from '../components/blogPost';
import { useEffect, } from 'react';
import { useSetRecoilState } from 'recoil';
import { blogState } from '../store/blogState';
import { blogService } from '../services/blogService';

const BlogPage = () => {
    const setBlog = useSetRecoilState(blogState);
    useEffect(() => {
        const fetchPosts = async () => {
            try {

                const data = await blogService.getAllBlogs()
                setBlog({ posts: data, isLoading: false, error: null });
            } catch (err) {

                setBlog((prev) => ({ ...prev, isLoading: false, error: "Failed to fetch blog posts" }));
            }
        }

        fetchPosts()
    }, [])
    return (
        <div className="min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        <PersonalInformation />

                        <Categories />

                        <FeatureadPost />

                        <BlogPostList />

                        <PopularPost />

                        {/* Load More */}
                        <div className="text-center mt-8">
                            <button className="bg-primary-color text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors flex items-center space-x-2 mx-auto">
                                <span>Load More Articles</span>
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    {/* Professional Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="space-y-6 sticky top-8">
                            <About />

                            <Skills />

                            <Newsletter />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;