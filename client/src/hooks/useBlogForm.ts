import { useState, useCallback } from "react"
import type { BlogPost } from "../types/blog"
import { blogService } from "../services/blogService"

interface BlogFormData {
  title: string;
  content: string;
  tags: string[];
  image: string | null;
  imageFile: File | null;
  date: string;
  readTime: string;
  category: string;
}

export function useBlogForm() {
  const [formData, setFormData] = useState<BlogFormData>({
    title: "",
    content: "",
    tags: [],
    image: null,
    imageFile: null,
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    readTime: "5 min read",
    category: "General"
  })
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const updateTitle = useCallback((title: string) => {
    setFormData((prev) => ({ ...prev, title }))
  }, [])

  const updateContent = useCallback((content: string) => {
    // Generate excerpt from content (first 150 characters)
    const excerpt = content.slice(0, 150) + (content.length > 150 ? "..." : "")
    setFormData((prev) => ({ ...prev, content, excerpt }))
  }, [])

  const updateCategory = useCallback((category: string) => {
    setFormData((prev) => ({ ...prev, category }))
  }, [])


  const updateReadTime = useCallback((readTime: string) => {
    setFormData((prev) => ({ ...prev, readTime }))
  }, [])

  const addTag = useCallback(
    (tag: string) => {
      const trimmedTag = tag.trim()
      if (trimmedTag && !formData.tags.includes(trimmedTag)) {
        setFormData((prev) => ({
          ...prev,
          tags: [...prev.tags, trimmedTag],
        }))
      }
    },
    [formData.tags],
  )

  const removeTag = useCallback((tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }))
  }, [])

  const setImage = useCallback((file: File, dataUrl: string) => {
    setFormData((prev) => ({
      ...prev,
      image: dataUrl,
      imageFile: file,
    }))
  }, [])

  const removeImage = useCallback(() => {
    setFormData((prev) => ({
      ...prev,
      image: null,
      imageFile: null,
    }))
  }, [])

  const handleSave = useCallback(async () => {
    try {
      setIsSaving(true)
      setError(null)

      // Validate required fields
      if (!formData.title.trim()) {
        throw new Error("Title is required")
      }
      if (!formData.content.trim()) {
        throw new Error("Content is required")
      }
     
      if (!formData.category.trim()) {
        throw new Error("Category is required")
      }

      const formDataToSend = new FormData()
      formDataToSend.append('title', formData.title.trim())
      formDataToSend.append('content', formData.content.trim())
      // Append each tag individually
      formData.tags.forEach(tag => {
        formDataToSend.append('tags[]', tag)
      })
      formDataToSend.append('date', formData.date)
      formDataToSend.append('readTime', formData.readTime)
      formDataToSend.append('category', formData.category.trim())
      
      if (formData.imageFile) {
        formDataToSend.append('image', formData.imageFile)
      }

      const savedBlog = await blogService.createBlog(formDataToSend)

      // Reset form after successful save
      setFormData({
        title: "",
        content: "",
        tags: [],
        image: null,
        imageFile: null,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        readTime: "5 min read",
        category: "General"
      })

      return savedBlog
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to save blog post'
      setError(errorMessage)
      throw err
    } finally {
      setIsSaving(false)
    }
  }, [formData])

  const handlePreview = useCallback(() => {
    // Create a preview object that matches BlogPost type
    const previewData: Omit<BlogPost, '_id' | 'createdAt' | 'likes' | 'comments'> = {
      title: formData.title,
      content: formData.content,
      tags: formData.tags,
      image: formData.image || "",
      date: formData.date,
      readTime: formData.readTime,
      category: formData.category
    }
    return previewData
  }, [formData])
  console.log(formData.tags)

  return {
    formData,
    updateTitle,
    updateContent,
    updateCategory,
    updateReadTime,
    addTag,
    removeTag,
    setImage,
    removeImage,
    handleSave,
    handlePreview,
    isSaving,
    error,
  }
}
