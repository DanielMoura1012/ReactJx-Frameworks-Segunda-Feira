import React, { useState } from 'react';

const UserInfo = () => {
  const [user, setUser] = useState({ name: '', age: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Nome"
        value={user.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="age"
        placeholder="Idade"
        value={user.age}
        onChange={handleChange}
      />
      <div>
        <p>Nome: {user.name}</p>
        <p>Idade: {user.age}</p>
      </div>
    </div>
  );
};

export default UserInfo;
