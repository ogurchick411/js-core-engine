import React, { useState } from 'react';

export function UserSearch() {
    const [search, setSearch] = useState('');

    const users = ['Alice', 'Bob', 'Charlie', 'Devid', 'Eva'];

    const filteredUsers = users.filter((user) =>
    user.toLowerCase().includes(search.toLowerCase())
);

return (
    <div style={{ padding: '20px'}}>
        <h2>User Search</h2>

        <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />

        <ul>
            {filteredUsers.map((user, index) => (
                <li key={index}>{user}</li>
            ))}
        </ul>
    </div>
);
}