import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPostData } from '@/lib/project-utils';
import Image from 'next/image'
import Link from 'next/link';

function Projects(props) {
  const {markdown} = props;
  const customRenderers = {
    h1(details) {
      return <h1 className="text-4xl text-center pb-10 font-bold text-indigo-900"> {details.children } </h1>
    },
    h2(details) {
      return <h2 className="text-3xl font-bold text-indigo-900"> {details.children } </h2>
    },
    h3(details) {
      return <h3 className="text-2xl text-indigo-900"> {details.children } </h3>
    },
    h4(details) {
      return <h4 className="text-xl text-indigo-900"> {details.children } </h4>
    },
    h5(details) {
      return <h5 className="text-lg text-indigo-900"> {details.children } </h5>
    },
    img(image) {
      return <div className="flex items-center justify-center py-5">
        <Image className="w-full md:w-6/12" src={image.src} alt={image.alt} width={500} height={500} />
      </div>
    },
    li(details) {
      return <li className=""> {details.children } </li>
    },
    ul(details) {
      return <ul className="list-disc px-5"> {details.children } </ul>
    },
    ol(details) {
      return <ul className="list-decimal px-10"> {details.children } </ul>
    },
    a(details)  {
      return <Link className="text-indigo-900 font-semibold" href={details.href} target="_blank">{details.children}</Link>
    }
    /*
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].type === 'image') {
        const image = node.children[0];

        return (
          <div className="object-content w-100">
            <Image
              src={`/images/posts/${post.slug}/${image.url}`}
              alt={image.alt}
              width={100}
              height={100}
            />
            Whatever
          </div>
        );
      }

      return <p className="text-lg">{paragraph.children}</p>;
    },*/
  }
  return (
    <div className="p-6 md:mx-20">
      <ReactMarkdown components={customRenderers} remarkPlugins={[remarkGfm]} >{markdown}</ReactMarkdown>
    </div>
  )
}

export async function getStaticProps(context) {
  const { params } = context;
  const slug = params.slug;
  
  const markdown = getPostData(slug) ?? null;

  if (!markdown) { 
    return {notFound: true }    
  }
  return {props: { markdown } }  
}

export function getStaticPaths() {
  return { paths: [], fallback: true }
}


export default Projects;