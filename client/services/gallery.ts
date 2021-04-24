import fetchRequest from './fetchRequest';

let path = 'gallery';

export const getAll = () => fetchRequest(path);

export const getOne = (id: number) => fetchRequest(`path/${id}`);
