import { request } from "../request";

export default async function logout(): Promise<void> {
  const data = await request.get(`/logout`);
  console.log("data", data);
}
