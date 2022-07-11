import React from 'react';
import { GetServerSideProps } from 'next';
import ReactMarkdown from 'react-markdown';
import Router from 'next/router';
import Layout from '../../components/Layout';
import { PostProps } from '../../components/Post';
import { useSession } from 'next-auth/react';
import prisma from '../../lib/prisma';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });
  return {
    props: post,
  };
};

async function publishPost(id: string): Promise<void> {
  await fetch(`/api/publish/${id}`, {
    method: 'PUT',
  });
  await Router.push('/');
}

async function deletePost(id: string): Promise<void> {
  await fetch(`/api/post/${id}`, {
    method: 'DELETE',
  });
  Router.push('/');
}

const Post: React.FC<PostProps> = (props) => {
  const { data: session, status } = useSession();
  if (status === 'loading') {
    return <div>Are you for real?....</div>;
  }
  const userHasValidSession = Boolean(session);
  const postBelongsToUser = session?.user?.email === props.author?.email;
  let title = props.title;
  if (!props.published) {
    title = `${title} (Draft)`;
  }


  return (
    <Layout>
      <div className='page'>
        <h2>{title}</h2>
        <p>By {props?.author?.name || 'Author Unknown'}</p>
        <ReactMarkdown children={props.content} />
        {
          !props.published && userHasValidSession && postBelongsToUser && (
            <button onClick={() => publishPost(props.id)}>Publish</button>
          )
        }
        {
          userHasValidSession && postBelongsToUser && (
            <button onClick={() => deletePost(props.id)}>Delete</button>
          )
        }
      </div>

      <style jsx>{`

        .page {
          background: var(--geist-background);
          padding: 2rem;
          background: white;
          border-radius: 30px;
        }

        .actions {
          margin-top: 2rem;
        }

        button {
          background: #ececec;
          border: 1px black solid;
          border-radius: 1rem;
          padding: 1rem 2rem;
        }

        button + button {
          margin-left: 1rem;
        }

        .page + .page {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default Post;