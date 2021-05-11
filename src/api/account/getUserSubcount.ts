import { request } from "../request";

export default async function getUserSubcount(): Promise<any> {
  const data = await request.get(`/user/subcount`);
  console.log("usersubcount", data);

  return data;
}
