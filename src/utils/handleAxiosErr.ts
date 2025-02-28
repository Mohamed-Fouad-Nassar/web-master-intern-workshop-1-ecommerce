import { isAxiosError } from "axios";

export default function handleAxiosErr(err: unknown, message?: string) {
  console.error(err);
  return isAxiosError(err)
    ? err.response?.data || err.response?.data.message || err.message
    : message || "An Unexpected Error. Failed to get data";
}
