import { getProjectData, getAllProjects } from "@/lib/markdown-utils";
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
  const markdown = getProjectData(slug) ?? null;

  return { props: { markdown } };
}

export function getStaticPaths() {
  const posts = getAllProjects();
  const paths = posts.map((post) => ({ params: { slug: post } }));
  return { paths, fallback: false };
}

export default Projects;
