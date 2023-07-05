import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostData, getAllPosts } from "@/lib/project-utils";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Post } from "@/components/post";

function Projects(props) {
  const { markdown } = props;
  return (
    <Fragment>
      <Post markdown={markdown} />
    </Fragment>
  )  
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const markdown = getPostData(slug) ?? null;

  return { props: { markdown } };
}

export function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({ params: { slug: post } }));
  return { paths, fallback: false };
}

export default Projects;
