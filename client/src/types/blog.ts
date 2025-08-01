export interface BlogPost {
    _id: string;
    title: string;
    content: string;
    date: string;
    readTime: string;
    image: string;
    tags: string[];
    likes: number;
    comments: number;
    category: string;
    createdAt: string;
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