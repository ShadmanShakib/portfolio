import axios from "axios";

export default async function getProfile(username: string) {
  const response: { data: GithubUser } = await axios.get(
    `https://api.github.com/users/${username}`
  );
  return response.data;
}

// Language: typescript
interface GithubUser {
  avatar_url: string;
  bio: string;
  blog: string;
  company: null;
  created_at: string;
  email: null;
  events_url: string;
  followers: 5;
  followers_url: string;
  following: 5;
  following_url: string;
  gists_url: "/gists{/gist_id}";
  gravatar_id: "";
  hireable: true;
  html_url: string;
  id: 72305492;
  location: "Bangladesh";
  login: "ShadmanShakib";
  name: "Shadman Shakib";
  node_id: "MDQ6VXNlcjcyMzA1NDky";
  organizations_url: string;
  public_gists: 0;
  public_repos: 21;
  received_events_url: "/received_events";
  repos_url: "/repos";
  site_admin: false;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: string;
  type: "User";
  updated_at: string;
  url: string;
}
