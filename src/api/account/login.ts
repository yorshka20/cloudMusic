import { request } from "../request";

interface LoginResponse {
  [key: string]: any;
}

export default async function login(
  phone: number,
  password: string
): Promise<LoginResponse> {
  const data = await request.get(
    `/login/cellphone?phone=${phone}&password=${password}`
  );
  console.log("data", data);

  return data;
}
