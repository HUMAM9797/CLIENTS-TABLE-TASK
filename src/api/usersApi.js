// src/api/usersApi.js

const Url = "https://68a04ce6e38a02c58184c4b.mockapi.io/users";

export async function getUsers() {
  const res = await fetch(Url);
  if (!res.ok) throw new Error("Failed to fetch users");
  return await res.json();
}

export async function createUser(user) {
  const res = await fetch(Url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  if (!res.ok) throw new Error("Failed to create user");
  return await res.json();
}

export async function updateUser(id, user) {
  const res = await fetch(`${Url}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  if (!res.ok) throw new Error("Failed to update user");
  return await res.json();
}

export async function deleteUser(id) {
  const res = await fetch(`${Url}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete user");
  return true;
}
