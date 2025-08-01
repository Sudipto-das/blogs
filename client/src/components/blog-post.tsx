



import { useBlogForm } from "../hooks/useBlogForm"
import { FormActions } from "./form-actions"
import { ImageUpload } from "./image-upload"
import { TagsInput } from "./tags-input"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"

export default function BlogPostForm() {
  const { formData, updateTitle, updateContent, addTag, removeTag, setImage, removeImage, handleSave, handlePreview } =
    useBlogForm()

  return (
    <div className="mt-24">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-color mb-2">Create Blog Post</h1>
          <p className="text-slate-600">Share your thoughts with the world</p>
        </header>

        <Card className="shadow-xl border-0 bg-[var(--background-secondary)] backdrop-blur-sm">
          <CardHeader className="pb-6">
            <CardTitle className="text-xl text-slate-800 text-color">Post Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Title Input */}
            <div className="space-y-2">
              <Label htmlFor="title" className="text-sm font-medium text-color">
                Title
              </Label>
              <Input
                id="title"
                placeholder="Enter your blog post title..."
                value={formData.title}
                onChange={(e) => updateTitle(e.target.value)}
                className="text-lg font-medium border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
              />
            </div>

            {/* Image Upload */}
            <ImageUpload image={formData.image} onImageUpload={setImage} onImageRemove={removeImage} />

            {/* Content Input */}
            <div className="space-y-2">
              <Label htmlFor="content" className="text-sm font-medium text-slate-700">
                Content
              </Label>
              <Textarea
                id="content"
                placeholder="Write your blog post content here..."
                value={formData.content}
                onChange={(e) => updateContent(e.target.value)}
                className="min-h-[300px] resize-none border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
              />
              <div className="text-right text-xs text-slate-500">{formData.content.length} characters</div>
            </div>

            {/* Tags Input */}
            <TagsInput tags={formData.tags} onAddTag={addTag} onRemoveTag={removeTag} />

            {/* Action Buttons */}
            <FormActions onSave={handleSave} onPreview={handlePreview} />
          </CardContent>
        </Card>

        {/* Blog Preview */}
        {/* <BlogPreview post={formData} /> */}
      </div>
    </div>
  )
}
