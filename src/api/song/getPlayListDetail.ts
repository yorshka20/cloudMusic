import { request } from "../request";

export default async function getPlayListDetail(
  playListId: string
): Promise<any> {
  const data = await request.get(`/playlist/detail?id=${playListId}`);
  console.log("playlistdetail", data);

  return data;
}
