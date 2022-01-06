import type { Post } from '@prisma/client';
import type { LoaderFunction } from 'remix';
import { useLoaderData, Link } from 'remix';

import { db } from '~/utils/db.server';

interface LoaderData {
  posts: Post[];
}

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    posts: await db.post.findMany({
      take: 20,
      select: {
        id: true,
        body: true,
        title: true,
        createdAt: true,
        updatedAt: true,
      },
      orderBy: { createdAt: 'desc' },
    }),
  };

  return data;
};

export default function PostItems() {
  const { posts } = useLoaderData<LoaderData>();

  return (
    <>
      <div className="page-header">
        <h1>Posts</h1>
        <Link className="btn" to="/posts/new">
          New Post
        </Link>
      </div>
      <ul className="posts-list">
        {posts.map(({ id, title, createdAt }) => (
          <li key={id}>
            <Link to={id.toString()}>
              <h3>{title}</h3>
              {new Date(createdAt).toLocaleString()}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
