export interface BlogPost {
    title:string;
    content:string;
    tags:string[];
    image:string|null
    imageFile:File | null
}
export interface ImageUploadProps {
    image: string | null
    onImageUpload: (file: File, dataUrl: string) => void
    onImageRemove: () => void
  }
  
  export interface TagsInputProps {
    tags: string[]
    onAddTag: (tag: string) => void
    onRemoveTag: (tag: string) => void
  }
  
  export interface BlogPreviewProps {
    post: Omit<BlogPost, "imageFile">
  }