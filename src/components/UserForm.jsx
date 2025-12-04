import { useState, useEffect } from "react";

export default function UserForm({ onSubmit, editingUser }) {
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");

    useEffect(() => {
        if (editingUser) {
            setName(editingUser.name);
            setAvatar(editingUser.avatar);
        }
    }, [editingUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, avatar });

        setName("");
        setAvatar("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{ marginBottom: "20px", display: "flex", gap: "8px" }}
        >
            <input
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Avatar URL"
                required
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
            />

            <button type="submit">
                {editingUser ? "Update User" : "Add User"}
            </button>
        </form>
    );
}
