import { request } from "../request";

export default async function login(
  phone: number,
  password: string
): Promise<any> {
  const data = await request.get(
    `/login/cellphone?phone=${phone}&password=${password}`
  );
  console.log("data", data);

  return data;
}
