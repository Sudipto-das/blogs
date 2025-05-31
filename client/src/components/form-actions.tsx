import { Button } from "./ui/button"

interface FormActionsProps {
  onSave: () => void
  onPreview: () => void
}

export function FormActions({ onSave, onPreview }: FormActionsProps) {
  return (
    <div className="flex justify-end gap-4">
      <Button
        variant="outline"
        onClick={onPreview}
        className="border-slate-200 hover:bg-slate-100"
      >
        Preview
      </Button>
      <Button onClick={onSave} className="bg-blue-600 hover:bg-blue-700">
        Save Post
      </Button>
    </div>
  )
} 