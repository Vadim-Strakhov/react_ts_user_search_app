import { GithubUser } from "src/types";

export const isGithubUser = (user: any): user is GithubUser => "id" in user;
