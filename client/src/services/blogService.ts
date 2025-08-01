import axios from 'axios';
import type { BlogPost } from '../types/blog';
import { BASE_API_URL } from '../api'

const API_BASE_URL = `${BASE_API_URL}/blogs`;

export const blogService = {
  async createBlog(formData: FormData): Promise<BlogPost> {
    try {
      const response = await axios.post(`${API_BASE_URL}/create`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getAllBlogs(): Promise<BlogPost[]> {
    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async getBlogById(id: string): Promise<BlogPost> {
    try {
      const response = await axios.get(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}; 