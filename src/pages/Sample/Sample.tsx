import React from 'react';
import Article from '../../components/Articles/Article';
import styles from './Sample.module.scss';
import logo from '../../assets/logo.svg';
import usePayloadPosts from '../../services/usePayloadPosts';
import { Post } from '../../interfaces/Post';

interface ApiResponse {
  data: Post[];
  isLoading: boolean;
  isError: boolean;
}

const Sample: React.FC = () => {
  const { data, isLoading, isError } = usePayloadPosts() as ApiResponse;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <div className={styles.sample}>
      <div className={styles.content}>
        <a href="https://store.avenza.com" target="_blank" className={styles.logo}>
          <img src={logo} alt="Avenza Maps" />
        </a>
        <h1 className={styles.title}>
          Headless CMS with
          <br />
          Avenza Frontend Boilerplate!
        </h1>
        <section className={styles.wrapper}>
          {data.map((post: Post) => <Article post={post} key={post.id} />)}
        </section>
      </div>
    </div>
  );
};

export default Sample;