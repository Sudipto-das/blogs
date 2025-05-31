import { useState } from "react"
import { Input } from "./ui/input"
import { X } from "lucide-react"

interface TagsInputProps {
  tags: string[]
  onAddTag: (tag: string) => void
  onRemoveTag: (tag: string) => void
}

export function TagsInput({ tags, onAddTag, onRemoveTag }: TagsInputProps) {
  const [input, setInput] = useState("")

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim()) {
      e.preventDefault()
      onAddTag(input.trim())
      setInput("")
    }
  }

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-slate-700">Tags</label>
      <div className="space-y-2">
        <Input
          placeholder="Add tags (press Enter)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="border-slate-200 focus:border-blue-500 focus:ring-blue-500/20"
        />
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-1 text-sm bg-slate-100 text-slate-700 rounded-md"
            >
              {tag}
              <button
                onClick={() => onRemoveTag(tag)}
                className="text-slate-500 hover:text-slate-700"
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
} 