import fetch from "node-fetch";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string | number | boolean | null;
}

export type GitHub = {
  message: string;
  repos_url: string;
}


export const getReposUrl = () => {
  // Code here
}

export const getRepos = () => {
  // Code here
}

export const printRepos = () => {
  // Code here
}


export const printRepository = () => {
  // Code here
}

export const getProjectInformations = () => {
  // Code here
}

