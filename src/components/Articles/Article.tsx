import React from 'react'
import styles from './Article.module.scss'
import { Post } from '../../interfaces/Post';
import serialize from '../../uitls/Serialize';

interface ArticleProps {
  post: Post;
}

const formatDate = (date: string) => {
  const dateObject = new Date(date);
  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, '0');
  const day = String(dateObject.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

const Article: React.FC<ArticleProps> = ({ post }) => {
  
  return (
    <article key={post.id} className={styles.article}>
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.details}>Published by <em>{post.author.firstName}</em> <em>{post.author.lastName}</em> on <em>{formatDate(post.publishDate)}</em></p>
      <figure className={styles.image}>
        <img src={`http://localhost:3000${post.coverImage.url}`} alt={post.coverImage.alt} />
      </figure>
      <p className={styles.excerpt}>{post.excerpt}</p>
      <div className={styles.content}>
        {serialize(post.content)}
      </div>
    </article>
  );
};

export default Article;






