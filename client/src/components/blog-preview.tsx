interface BlogPost {
  title: string
  content: string
  image: string | null
  tags: string[]
}

interface BlogPreviewProps {
  post: BlogPost
}

export function BlogPreview({ post }: BlogPreviewProps) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-4">Preview</h2>
      <div className="bg-white rounded-lg shadow-lg p-6">
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        )}
        <h1 className="text-3xl font-bold text-slate-900 mb-4">{post.title}</h1>
        <div className="prose max-w-none">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-slate-700">
              {paragraph}
            </p>
          ))}
        </div>
        {post.tags.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 