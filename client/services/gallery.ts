import fetchRequest from './fetchRequest';

let path = 'gallery';

export const getAllArt = () => fetchRequest(path);

export const getOneArtPiece = (id: number) => fetchRequest(`path/${id}`);
