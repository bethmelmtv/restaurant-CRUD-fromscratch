import { client, checkError } from './client';

export function getUser() {
  return client.auth.session();
}

export async function signUp(email, password) {
  const response = await client.auth.signUp({ email, password });
  return response.user;
}

export async function signIn(email, password) {
  const response = await client.auth.signIn({ email, password });
  return response.user;
}

export async function logout() {
  await client.auth.signOut();
  return (window.location.href = '../');
}

export async function createTree(tree) {
  const response = await client.from('types_of_trees').insert([tree]);

  return checkError(response);
}

export async function updateTree(id, newTree) {
  const response = await client.from('types_of_trees').update(newTree).match({ id });
  return checkError(response);
}

export async function getTree() {
  const response = await client.from('types_of_trees').select();

  return checkError(response);
}

export async function getTreebyId(id) {
  const response = await client.from('types_of_trees').select().match({ id }).single();

  return checkError(response);
}
