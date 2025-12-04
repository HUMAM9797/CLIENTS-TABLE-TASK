import { useState, useEffect } from "react";
import UsersTable from "./components/UsersTable";
import UserForm from "./components/UserForm";

import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "./api/usersApi";

export default function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  // ------------------ READ ------------------
  const loadUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  // ------------------ CREATE / UPDATE ------------------
  const handleFormSubmit = async (user) => {
    if (editingUser) {
      // UPDATE
      const updated = await updateUser(editingUser.id, user);
      setUsers(users.map((u) => (u.id === editingUser.id ? updated : u)));
      setEditingUser(null);
    } else {
      // CREATE
      const newUser = await createUser(user);
      setUsers([...users, newUser]);
    }
  };

  // ------------------ DELETE ------------------
  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((u) => u.id !== id));
  };

  // ------------------ EDIT ------------------
  const handleEdit = (user) => {
    setEditingUser(user);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Users CRUD</h1>

      <UserForm onSubmit={handleFormSubmit} editingUser={editingUser} />

      <UsersTable
        users={users}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
