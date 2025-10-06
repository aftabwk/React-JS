export const githubInfoLoader = async () => {
  console.log("loading");
  const response = await fetch("https://api.github.com/users/aftabwk");
  return response.json();
};
