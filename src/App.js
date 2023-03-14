import logo from './logo.svg';
import { useState, useEffect } from "react";
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore'
import './App.css';

function App() {
  const name = 'Chris'
  const nameShown = true
  const testArray = ["First","Second","Third","Fourth"]
  const listItems = testArray.map((item) => 
  <li>{item}</li>
  )
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "Users")
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getUsers();
  }, [])

  return (
    <div className="App">
      <div>Hello, Test</div>
      {users.map((user) => {
        return (
        <div>
          <h1>First Name: {user.First_Name}</h1>
          <h2>Birthdate: {user.Birthdate}</h2>
          <h3>ID: {user.id}</h3>
        </div>
        );
      })}
    </div>
  );
}

export default App;
