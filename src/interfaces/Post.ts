export interface Post {
  id: string;
  title: string;
  excerpt: string;
  coverImage: {
    url: string;
    alt: string;
  };
  content: any;
  author: {
    firstName: string;
    lastName: string;
  };
  publishDate: string;
}