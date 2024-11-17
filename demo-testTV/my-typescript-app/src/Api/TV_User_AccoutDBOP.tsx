import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";

// 定义 UserDataBase 对象，包含 fetchUsers 方法
// 读取数据
export const fetchUsers = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "TV_User_Account"));
        const users: any[] = [];// 用于存储用户数据
        querySnapshot.forEach((doc) => {
            users.push({ id: doc.id, ...doc.data() })
            console.log(`${doc.id} =>`, doc.data());
        });
        return users;// 返回用户数据数组
    } catch (error) {
        console.error("Error fetching users: ", error);
        throw error;// 抛出错误，便于在调用时处理
    }
}

console.log(fetchUsers); // 打印确认 fetchUsers 是否导出

// 添加数据
export const addUser = async () => {
    try {
        const docRef = await addDoc(collection(db, "TV_User_Account"), {
            name: "Jane Doe",
            age: 25,
            email: "jane.doe@example.com"
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (error) {
        console.error("Error adding document: ", error);
    }
};

// // 更新数据
// const updateUser = async (documentId: string) => {
//     try {
//         const userDoc = doc(db, "users", documentId);
//         await updateDoc(userDoc, {
//             age: 26
//         });
//         console.log("Document updated successfully!");
//     } catch (error) {
//         console.error("Error updating document: ", error);
//     }
// };

// // 删除数据
// const deleteUser = async (documentId: string) => {
//     try {
//         const userDoc = doc(db, "users", documentId);
//         await deleteDoc(userDoc);
//         console.log("Document deleted successfully!");
//     } catch (error) {
//         console.error("Error deleting document: ", error);
//     }
// };

// // 调用操作
// //fetchUsers();
// //addUser();
// console.log("database.tsx is running");

// //updateUser("USER_DOCUMENT_ID");
// //deleteUser("USER_DOCUMENT_ID");


