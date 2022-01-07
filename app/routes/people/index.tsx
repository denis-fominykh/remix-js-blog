import type { LoaderFunction } from 'remix';
import { useLoaderData } from 'remix';

import API_HANDLERS from '~/api/apiHandlers';

import { GetPeopleResponseSuccess } from '~/api/types';

export const loader: LoaderFunction = async () => {
  const response = await API_HANDLERS.PEOPLE();

  return response.data;
};

export default function People() {
  const { results } = useLoaderData<GetPeopleResponseSuccess>();

  return (
    <>
      <div className="page-header">
        <h1>People</h1>
      </div>
      <ul className="items-list">
        {results.map(({ name, birth_year: birthYear }, idx) => (
          <li key={idx}>
            <h3>{name}</h3>
            Birth year: {birthYear}
          </li>
        ))}
      </ul>
    </>
  );
}
