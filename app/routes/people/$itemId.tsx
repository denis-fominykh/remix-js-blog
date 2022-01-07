import { useLoaderData, Link } from 'remix';
import type { LoaderFunction } from 'remix';

import API_HANDLERS from '~/api/apiHandlers';

import { GetCharacterResponseSuccess } from '~/api/types';

export const loader: LoaderFunction = async ({ params }) => {
  if (params.itemId) {
    const response = await API_HANDLERS.PEOPLE.CHARACTER_BY_ID(params.itemId);

    if (!response) throw new Error('Character not find');

    return response.data;
  } else {
    return null;
  }
};

export default function PeopleItem() {
  const {
    name,
    mass,
    gender,
    height,
    birth_year: birthYear,
  } = useLoaderData<GetCharacterResponseSuccess>();

  return (
    <div>
      <div className="page-header">
        <h1>{name}</h1>
        <Link className="btn btn-reverse" to="/people">
          Back
        </Link>
      </div>
      <div className="page-content">
        <p>Gender: {gender}</p>
        <p>Mass: {mass}</p>
        <p>Height: {height}</p>
        <p>Birth year: {birthYear}</p>
      </div>
    </div>
  );
}
