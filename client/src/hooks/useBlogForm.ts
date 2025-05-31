

import { useState, useCallback } from "react"
import type { BlogPost } from "../types/blog"

export function useBlogForm() {
  const [formData, setFormData] = useState<BlogPost>({
    title: "",
    content: "",
    tags: [],
    image: null,
    imageFile: null,
  })

  const updateTitle = useCallback((title: string) => {
    setFormData((prev) => ({ ...prev, title }))
  }, [])

  const updateContent = useCallback((content: string) => {
    setFormData((prev) => ({ ...prev, content }))
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

  const handleSave = useCallback(() => {
    console.log("Saving:", formData)
    // Implement save logic
  }, [formData])

  const handlePreview = useCallback(() => {
    console.log("Preview:", formData)
    // Implement preview logic
  }, [formData])

  return {
    formData,
    updateTitle,
    updateContent,
    addTag,
    removeTag,
    setImage,
    removeImage,
    handleSave,
    handlePreview,
  }
}
