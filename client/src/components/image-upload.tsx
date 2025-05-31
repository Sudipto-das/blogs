import type React from "react"

import { Plus, X } from "lucide-react"
import type { ImageUploadProps } from "../types/blog"
import { Label } from "@radix-ui/react-label"

export function ImageUpload({ image, onImageUpload, onImageRemove }: ImageUploadProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string
        onImageUpload(file, dataUrl)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="space-y-3">
      <Label htmlFor="image" className="text-sm font-medium text-slate-700">
        Featured Image
      </Label>

      {!image ? (
        <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-slate-400 transition-colors">
          <input id="image" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
          <label htmlFor="image" className="cursor-pointer flex flex-col items-center space-y-2">
            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
              <Plus className="h-6 w-6 text-slate-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-700">Upload an image</p>
              <p className="text-xs text-slate-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </label>
        </div>
      ) : (
        <div className="relative">
          <img
            src={image || "/placeholder.svg"}
            alt="Featured image preview"
            className="w-full h-48 object-cover rounded-lg border border-slate-200"
          />
          <button
            onClick={onImageRemove}
            className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 transition-colors"
            type="button"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  )
}
