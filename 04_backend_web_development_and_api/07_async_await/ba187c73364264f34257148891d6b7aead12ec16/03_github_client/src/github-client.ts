import fetch, { Response } from "node-fetch";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string | number | boolean | null;
};

export type GitHub = {
  message: string;
  repos_url: string;
};

export const getReposUrl = (nickname: string): Promise<string | void> => {
  return fetch(`https://api.github.com/users/${nickname}`)
    .then((text) => text.json())
    .then((data) => {
      if (data.message === "Not Found") {
        throw new Error("The user doesn't exist");
      }
      return data.repos_url;
    });
};

export const getRepos = async (url: string): Promise<[]> => {
  try {
    const reponse = await fetch(url);
    const data = await reponse.json();
    const arrayRepo = data.map((element: { name: string }) => {
      return element;
    });
    return arrayRepo;
  } catch (error) {
    throw new Error("Not found");
  }
};

export const getProjectInformations = async (url: string): Promise<Repo> => {
  const reponse = await fetch(url);
  const data = await reponse.json();
  return data;
};

export const printRepos = (data: Repo[]) => {
  data.forEach((element) => console.log(`${data.indexOf(element) + 1}.${element.name}`));

  return data;
};

export const printRepository = async (data: Repo) => {
  console.log(data.name);
  console.log(data.description);
  console.log(data.subscribers_count);
  console.log(data.stargazers_count);
  console.log(data.language);
  console.log(data.url);
};
