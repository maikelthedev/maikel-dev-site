import { getPostData, getAllPosts } from "@/lib/markdown-utils";
import { Fragment } from "react";
import { Post } from "@/components/post";
import matter from 'gray-matter';
import Head from "next/head";

function Projects(props) {
  const { markdown, grayMatter } = props;
  const {title, image, excerpt} = grayMatter
  
  return (
    <Fragment>
        <Head>
        <title>{"Maikel - " + title}</title>
        <meta name="description" content={excerpt} key="description"/>
        <meta name="author" content="Maikel" key="author"/>
        <meta property="og:title" content={title} key="og-title"/>
        <meta property="og:description" content={excerpt} key="og-description"/>
        <meta property="og:image" content={image} key="og-image"/>
        <meta property="og:url" content={title} key="og-url"/>
        <meta name="twitter:card" content={image} key="twitter:card"/>
        <meta name="twitter:site" content="@maikelthedev" key="twitter:site"/>
        <meta name="twitter:creator" content="@maikelthedev" key="twitter:creator"/>
        <meta name="twitter:title" content={title} key="twitter:title"/>
        <meta name="twitter:description" content={excerpt} key="twitter:description"/>
        <meta name="twitter:image" content={image} key="twitter:image"/>
      </Head>
      <Post markdown={markdown} />
    </Fragment>
  )  
}

export async function getStaticProps(context) {
  const post = context.params.post;
  const postData = getPostData(post) ?? null;
  const grayMatter = matter(postData).data
  const {image} = grayMatter
  let imagePrefix
  if (image) {
    imagePrefix = `![${grayMatter.title}](${grayMatter.image})`
  } else {
    imagePrefix = `![${grayMatter.title}](/posts/blog.jpg)`
  }
  const markdown = `# ${grayMatter.title}\n${imagePrefix}\n${matter(postData).content}`
  return { props: { markdown, grayMatter } };
}

export function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({ params: { post: post } }));
  return { paths, fallback: false };
}

export default Projects;
