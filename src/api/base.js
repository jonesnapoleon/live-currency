import { LATEST_CURRENCY_API_URL } from "../utils/constant";

export const fetchUrl = async (
  url = LATEST_CURRENCY_API_URL,
  method = "get"
) => {
  try {
    const res = await fetch(url, { method });
    const json = await res.json();
    return json;
  } catch (error) {}
};
