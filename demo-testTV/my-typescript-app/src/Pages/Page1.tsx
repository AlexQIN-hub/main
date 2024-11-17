import { useEffect, useState } from 'react';
import { fetchUsers } from '../Api/TV_User_AccoutDBOP';

console.log(fetchUsers);


const mainPage = () => {

    const [users, setUsers] = useState<any[]>([]);

    useEffect(() => {
        const fetchedUsers = async () => {

            try {
                const usersData = await fetchUsers();// 获取用户数据
                setUsers(usersData); // 将获取到的数据存储到状态
            } catch (error) {
                console.error("Error fetching users: ", error);
            }
        }

        fetchedUsers();
    }, [])
    return (
        <>
            <div>
                <h1>the TV react </h1>
                <h2>Users:</h2>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.user_address}
                        </li>
                    ))}
                </ul>

            </div>


        </>

    )
}

export default mainPage;