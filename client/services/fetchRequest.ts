export default async function (path: string) {
  const url: RequestInfo = `http://localhost:4000/${path}`;
  const res: Response = await fetch(url);
  if (res.ok) return await res.json();
  else console.error(`Error with path: ${path}`, res.text);
}
