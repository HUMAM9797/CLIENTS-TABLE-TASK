export default function UsersTable({ users, onEdit, onDelete }) {
    return (
        <table border="1" cellPadding="8" style={{ minWidth: "600px" }}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Avatar</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {users.map((u) => (
                    <tr key={u.id}>
                        <td>{u.id}</td>
                        <td>{u.name}</td>
                        <td>
                            <img src={u.avatar} alt={u.name} width={50} />
                        </td>
                        <td>
                            <button onClick={() => onEdit(u)}>Edit</button>
                            <button onClick={() => onDelete(u.id)}>Delete</button>
                        </td>
                    </tr>
                ))}

                {users.length === 0 && (
                    <tr>
                        <td colSpan="4">No users found</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}
