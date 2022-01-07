import type { LoaderFunction } from 'remix';
import { useLoaderData } from 'remix';

import API_HANDLERS from '~/api/apiHandlers';

import { GetPeopleResponseSuccess } from '~/api/types';
import { PageHeader, PeopleList } from '~/routes/people/styled';

export const loader: LoaderFunction = async () => {
  const response = await API_HANDLERS.PEOPLE();

  return response.data;
};

export default function People() {
  const { results } = useLoaderData<GetPeopleResponseSuccess>();

  return (
    <>
      <PageHeader>
        <h1>People</h1>
      </PageHeader>
      <PeopleList>
        {results.map(({ name, birth_year: birthYear }, idx) => (
          <li key={idx}>
            <h3>{name}</h3>
            Birth year: {birthYear}
          </li>
        ))}
      </PeopleList>
    </>
  );
}
