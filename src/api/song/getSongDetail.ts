import { request } from "../request";

export default async function getSongDetail(id: string): Promise<any> {
  const data = await request.get(`/song/detail?id=${id}`);
  console.log("data");
  console.log(data);

  return data;
}
