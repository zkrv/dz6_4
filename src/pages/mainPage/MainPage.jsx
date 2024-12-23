import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function App() {
    const {
        register,
        handleSubmit,
        reset } = useForm();
    const [users, setUsers] = useState([]);

    const onSubmit = (data) => {
        users.push(data);
        setUsers([...users]);
        reset();
    };

    const deleteUser = (index) => {
        users.splice(index, 1);
        setUsers([...users]);
    };

    const clearTable = () => setUsers([]);

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('name', { required: true })} placeholder="Name (обязательно)" />
                <input {...register('username', { required: true })} placeholder="Username (обязательно)" />
                <input {...register('email', { required: true })} placeholder="Email (обязательно)" />
                <input {...register('phone', { required: true })} placeholder="Phone (обязательно)" />
                <input {...register('website')} placeholder="Website (не обязательно)" />
                <button type="submit">Создать</button>
                <button type="button" onClick={clearTable}>Очистить таблицу</button>
            </form>

            {users.length === 0 ? (
                <p>Таблица пуста</p>
            ) : (
                <table border="1">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Delete user</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website || ''}</td>
                            <td>
                                <button onClick={() => deleteUser(index)}>Удалить</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default App;
