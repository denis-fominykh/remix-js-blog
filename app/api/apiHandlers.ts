import API_PATHS from '~/api/apiPaths';
import { getData } from '~/api/crudHandlers';
import { AxiosResponseSuccess, GetPeopleResponseSuccess } from '~/api/types';

const API_HANDLERS = {
  PEOPLE(): AxiosResponseSuccess<GetPeopleResponseSuccess> {
    return getData<GetPeopleResponseSuccess>(API_PATHS.PEOPLE._);
  },
};

export default API_HANDLERS;
