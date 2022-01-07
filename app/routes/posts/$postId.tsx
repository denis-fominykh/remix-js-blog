import { useLoaderData, Link } from 'remix';
import type { LoaderFunction } from 'remix';

import { db } from '~/utils/db.server';

export const loader: LoaderFunction = async ({ params }) => {
  const post = await db.post.findUnique({
    where: { id: params.postId },
  });

  if (!post) throw new Error('Post not find');

  return { post };
};

export default function Post() {
  const {
    post: { title, body },
  } = useLoaderData();

  return (
    <div>
      <div className="page-header">
        <h1>{title}</h1>
        <Link className="btn btn-reverse" to="/posts">
          Back
        </Link>
      </div>
      <div className="page-content">{body}</div>
    </div>
  );
}
