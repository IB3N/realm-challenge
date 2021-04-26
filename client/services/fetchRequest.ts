export default async function (path: string) {
  const url: RequestInfo = `http://192.168.1.147:4000/${path}`;
  try {
    const res: Response = await fetch(url);
    return await res.json();
  } catch (error) {
    console.error(`Error with path: ${path}`);
    return error;
  }
}
