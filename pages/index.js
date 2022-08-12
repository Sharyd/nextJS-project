import { Fragment } from "react";
import Head from "next/head";
import Hero from "../components/home-page/hero";
import FeaturesPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Dan Blog</title>
        <meta
          name="description"
          content="I post about programmng and web development"
        />
      </Head>
      <Hero />
      <FeaturesPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  console.log(featuredPosts);
  return {
    props: {
      posts: featuredPosts,
    },
    // revalidate: 1800,
  };
}

export default HomePage;

// 1) Hero => Present ourselves
// 2) Featured Posts
