import axios from "axios";

export default async function getProfile(username: string) {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
}
