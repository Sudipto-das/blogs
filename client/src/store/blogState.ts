import { atom } from 'recoil';
import type { BlogPost } from '../types/blog';
interface BlogDataState {
    posts: BlogPost[],
    isLoading: boolean,
    error: string | null
}

export const blogState = atom<BlogDataState>({
    key: 'blogState',
    default: {
        posts: [],
        isLoading: false,
        error: null
    }
});


