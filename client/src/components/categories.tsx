import { useState } from "react";


const Categories = () => {
    
    const [activeCategory, setActiveCategory] = useState('All');
    const categories = [
        { name: "All", count: 47 },
        { name: "Learning Journey", count: 18 },
        { name: "Technical Deep Dive", count: 12 },
        { name: "Project Showcase", count: 8 },
        { name: "Resources", count: 9 }
    ];
    return (
        <>
         {/* Category Filter */}
         <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
                <button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors border border-[var(--border-primary)] ${
                        activeCategory === category.name
                            ? 'bg-[var(--primary-500)] text-white'
                            : 'bg-card-background text-text-color hover:bg-opacity-80 border border-border-color'
                    }`}
                >
                    {category.name}
                    <span className="ml-2 text-sm opacity-75">({category.count})</span>
                </button>
            ))}
        </div>
        </>
    )
}   
export default Categories;