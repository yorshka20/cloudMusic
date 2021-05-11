import { request } from "../request";

export default async function getUserPlayRecord(userId: string): Promise<any> {
  const data = await request.get(`/user/record?uid=${userId}`);
  console.log("userrecord", data);

  return data;
}
