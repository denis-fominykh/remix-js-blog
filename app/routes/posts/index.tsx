import type { LoaderFunction } from 'remix';
import { useLoaderData, Link } from 'remix';

interface LoaderData {
  posts: Array<{ id: number; title: string; body: string }>;
}

export const loader: LoaderFunction = () => {
  const data: LoaderData = {
    posts: [
      { id: 1, title: 'Post 1', body: 'This is a first test post' },
      { id: 2, title: 'Post 2', body: 'This is a second test post' },
      { id: 3, title: 'Post 3', body: 'This is a third test post' },
    ],
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
        {posts.map(({ id, title, body }) => (
          <li key={id}>
            <Link to={id.toString()}>
              <h3>{title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
