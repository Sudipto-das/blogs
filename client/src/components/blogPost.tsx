import { Heart, MessageCircle } from "lucide-react"
import { useState,} from "react"

import { useRecoilValue,} from "recoil"
import { blogState } from "../store/blogState"

const BlogPostList = () => {
  const { posts, isLoading, error } = useRecoilValue(blogState);
  const [activeCategory] = useState("All")

  

  const filteredPosts =
    activeCategory === "All" ? posts : posts.filter((post) => post.category === activeCategory)

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div>
      {/* Blog Posts */}
      <div className="space-y-6 ">
        {filteredPosts.map((post) => (
          <article
            key={post._id}
            className="card-base overflow-hidden cursor-pointer group"
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "var(--shadow-lg)"
              e.currentTarget.style.transform = "translateY(-2px)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "var(--shadow-sm)"
              e.currentTarget.style.transform = "translateY(0)"
            }}
          >
            <div className="md:flex">
              <div className="md:w-1/3 relative overflow-hidden">
                <img
                  src={post.image ? `http://localhost:5000/${post.image}` : "https://placehold.co/600x400/e2e8f0/475569?text=No+Image"}
                  alt={post.title}
                  className="w-full h-48 md:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ backgroundColor: "var(--primary-500)" }}
                />
              </div>
              <div className="md:w-2/3" style={{ padding: "var(--spacing-xl)" }}>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: "var(--primary-50)",
                      color: "var(--primary-700)",
                      fontWeight: "var(--font-weight-medium)",
                    }}
                  >
                    {post.category}
                  </span>
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-xs"
                      style={{
                        backgroundColor: "var(--surface-secondary)",
                        color: "var(--text-secondary)",
                        border: "1px solid var(--border-secondary)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3
                  className="text-xl font-bold mb-3 transition-colors duration-200 group-hover:text-primary"
                  style={{
                    color: "var(--text-primary)",
                    fontWeight: "var(--font-weight-bold)",
                    fontSize: "var(--font-size-xl)",
                    lineHeight: "var(--line-height-tight)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--primary-600)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-primary)"
                  }}
                >
                  {post.title}
                </h3>



                <div className="flex items-center justify-between">
                  <div
                    className="flex items-center space-x-4 text-sm"
                    style={{
                      color: "var(--text-tertiary)",
                      fontSize: "var(--font-size-sm)",
                    }}
                  >
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div
                      className="flex items-center space-x-1 transition-colors duration-200 hover:scale-105"
                      style={{
                        color: "var(--error-500)",
                        cursor: "pointer",
                      }}
                    >
                      <Heart className="h-4 w-4" />
                      <span className="text-sm font-medium" style={{ fontWeight: "var(--font-weight-medium)" }}>
                        {post.likes}
                      </span>
                    </div>

                    <div
                      className="flex items-center space-x-1 transition-colors duration-200 hover:scale-105"
                      style={{
                        color: "var(--info-500)",
                        cursor: "pointer",
                      }}
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span className="text-sm font-medium" style={{ fontWeight: "var(--font-weight-medium)" }}>
                        {post.comments}
                      </span>
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

export default BlogPostList
