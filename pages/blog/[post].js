import { getPostData, getAllPosts } from "@/lib/markdown-utils";
import { Fragment } from "react";
import { Post } from "@/components/post";
import matter from "gray-matter";
import Head from "next/head";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

function Projects(props) {
  const router = useRouter();
  const post = router.query.post;
  const { markdown, grayMatter } = props;
  const { title, image, excerpt, date } = grayMatter;
  const unformattedDate = new Date(date);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    daySuffix: "numeric",
  };
  const formattedDate = unformattedDate.toLocaleDateString("en-GB", options);

  return (
    <Fragment>
      <div className="custom-bg-white">
        <Head>
          <title>{"Maikel - " + title}</title>
          <meta name="description" content={excerpt} key="description" />
          <meta name="author" content="Maikel" key="author" />
          <meta property="og:title" content={title} key="og-title" />
          <meta
            property="og:description"
            content={excerpt}
            key="og-description"
          />
          <meta
            property="og:image"
            content={"https://maikel.dev/" + image}
            key="og-image"
          />
          <meta
            property="og:url"
            content={`https://maikel.dev/blog/${post}`}
            key="og-url"
          />

          <meta
            property="twitter:url"
            content={`https://maikel.dev/blog/${post}`}
            key="twitter:url"
          />
          <meta
            name="twitter:site"
            content="@maikelthedev"
            key="twitter:site"
          />
          <meta
            name="twitter:creator"
            content="@maikelthedev"
            key="twitter:creator"
          />
          <meta name="twitter:title" content={title} key="twitter:title" />
          <meta
            name="twitter:description"
            content={excerpt}
            key="twitter:description"
          />
          <meta
            name="twitter:image"
            content={"https://maikel.dev/" + image}
            key="twitter:image"
          />
        </Head>
        <div className="lg:max-w-7xl lg:mx-auto">
          <div className=" flex text-sm   mx-auto text-center items-center justify-center space-x-2">
            <CalendarDaysIcon
              className="h-5 w-5 custom-text-slate-300"
              aria-hidden="true"
            />
            <p className="custom-text-indigo-900">{formattedDate}</p>
          </div>
          <Post markdown={markdown} />
        </div>
      </div>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const post = context.params.post;
  const postData = getPostData(post) ?? null;
  const grayMatter = matter(postData).data;
  const { image } = grayMatter;

  let imagePrefix;
  if (image) {
    imagePrefix = `![${grayMatter.title}](${grayMatter.image})`;
  } else {
    imagePrefix = `![${grayMatter.title}](/posts/blog.jpg)`;
  }

  const markdown = `# ${grayMatter.title}\n ${imagePrefix}\n  ${
    matter(postData).content
  }`;
  return { props: { markdown, grayMatter } };
}

export function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({ params: { post: post } }));
  return { paths, fallback: false };
}

export default Projects;
