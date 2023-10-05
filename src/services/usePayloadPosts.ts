import { useQuery } from '@tanstack/react-query';
import { Post } from '../interfaces/Post';

interface ApiResponse {
  docs: Post[];
}

const fetchPosts = async (): Promise<ApiResponse> => {
  try {
    const endpoint = import.meta.env.VITE_PAYLOADCMS_API_ENDPOINT;

    if (!endpoint) {
      throw new Error('API endpoint not defined');
    }
    const response = await fetch(`${endpoint}/posts`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    return data.docs;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch data.');
  }
};

const usePayloadPosts = (): ReturnType<typeof useQuery> => {
  return useQuery<ApiResponse>(['posts'], fetchPosts);
}

export default usePayloadPosts;
