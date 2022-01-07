import { useLoaderData, redirect, Link } from 'remix';
import type { LoaderFunction, ActionFunction } from 'remix';

import { db } from '~/utils/db.server';

export const loader: LoaderFunction = async ({ params }) => {
  const post = await db.post.findUnique({
    where: { id: params.postId },
  });

  if (!post) throw new Error('Post not find');

  return { post };
};

export const action: ActionFunction = async ({ request, params }) => {
  const form = await request.formData();

  if (form.get('_method') === 'delete') {
    const post = await db.post.findUnique({
      where: { id: params.postId },
    });

    if (!post) throw new Error('Post not find');

    await db.post.delete({ where: { id: params.postId } });
    return redirect('/posts');
  }
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
      <div className="page-footer">
        <form method="POST">
          <input type="hidden" name="_method" value="delete" />
          <button className="btn btn-delete">Delete</button>
        </form>
      </div>
    </div>
  );
}
