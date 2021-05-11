import { request } from "../request";

export default async function getAccountInfo(): Promise<any> {
  const data = await request.get(`/user/account`);
  console.log("accountinfo", data);
  return data;
}
