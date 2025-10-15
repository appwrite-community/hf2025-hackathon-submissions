export type Log = {
  date: Date;
  status: number;
  method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
  path: string;
  response: string;
};
