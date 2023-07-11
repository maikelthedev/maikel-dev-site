import { getProjectData, getAllProjects } from "@/lib/markdown-utils";
import { Fragment } from "react";
import { Post } from "@/components/post";

function Projects(props) {
  const { markdown } = props;
  return (
    <Fragment>
      <div className="custom-bg-white ">
        <div className="lg:max-w-7xl lg:mx-auto">
          <Post markdown={markdown} />
        </div>
      </div>
    </Fragment>
  );
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
