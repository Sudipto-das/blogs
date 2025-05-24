import Navbar from '../components/navbar';
import PersonalInformation from '../components/personalInformation';
import Categories from '../components/categories';
import About from '../components/About';
import Skills from '../components/Skills';
import Newsletter from '../components/newsletter';
import FeatureadPost from '../components/featureadPost';
import { ArrowRight } from 'lucide-react';
import BlogPost from '../components/blogPost';
import { useTheme } from '../context/ThemeContext';

const BlogPage = () => {
    const { theme } = useTheme();

    return (
        <div className="min-h-screen bg-background-color">
            <Navbar />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        <PersonalInformation />

                        <Categories />

                        <FeatureadPost />

                        <BlogPost />

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