import { request } from "../request";

export default async function getUserInfo(userId: string): Promise<any> {
  const data = await request.get(`/user/detail?uid=${userId}`);
  console.log("userdefail", data);

  return data;
}
