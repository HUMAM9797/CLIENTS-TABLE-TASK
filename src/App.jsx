import { useState, useEffect } from "react";

export default function App(){

const Url = "https://68a04cea6e38a02c58184c4b.mockapi.io/users";

const [users, setUsers] = useState([]);

const GetUsers = async () => {
  try {
    const res = await fetch(Url);
    if (!res.ok) throw new Error("fetch failed");
    const data = await (res).json();
    setUsers(data);
  } catch (error) { console.log(error); }
};

useEffect(() => {
  GetUsers();
}, []);

return (
  <div>
    <h1>Users CRUD</h1>
    <div users={users}></div>  
  </div>
);

}