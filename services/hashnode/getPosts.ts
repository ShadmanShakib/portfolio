//fetching data from hashnode graphql api

const query = `
query user {
  user(username: "Shadmanshakib") {
    publication {
      posts(page: 0) {
        title
        brief
        _id
        coverImage
        slug
      }
    }
  }
}
`;
const graphql = JSON.stringify({
  query: query,
  variables: {},
});

export default async function getPosts() {
  const data = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: graphql,
  });
  const json = await data.json();
  return json;
}
