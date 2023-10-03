import React, { useEffect, useState } from "react";

export default function FilterPaginateSortTest1() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetchUsers();
  }, [name, age, city, page, sort]);

  const fetchUsers = async () => {
    try {
      // const response = await fetch(`http://localhost:5000/users?name=${name}&age=${age}&city=${city}&page=${page}&limit=5&sort=${sort}`);
      const response = await fetch(
        `/api/?name=${name}&age=${age}&city=${city}&page=${page}&limit=5&sort=${sort}`
      );
      console.log("response", response);
      const data = await response.json();
      console.log("data", data);
      setUsers(data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <div>
      <div>
        <label>
          Search by Name:
          <input
            type="text"
            value={name}
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Filter by Age:
          <select value={age} onChange={(e) => setAge(e.target.value)}>
            <option value="">All</option>
            {Array.from(new Set(users.map((user) => user.age))).map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </select>
        </label>
        <label>
          Filter by City:
          <select value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="">All</option>
            {Array.from(new Set(users.map((user) => user.city))).map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </label>
        <label>
          Sort by:
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="name">Name</option>
            <option value="age">Age</option>
            <option value="city">City</option>
          </select>
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button
          onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage((prevPage) => prevPage + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}
