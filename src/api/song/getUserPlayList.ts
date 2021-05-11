import { request } from "../request";

export default async function getUserPlayList(userId: string): Promise<any> {
  const data = await request.get(`/user/playlist?uid=${userId}`);
  console.log("playlist", data);

  return data;
}
