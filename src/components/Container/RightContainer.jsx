import React,{useEffect,useState} from 'react';
import User from '../User/User';
import './Container.css'
const url='https://jsonplaceholder.typicode.com/users';

const RightContainer = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        const getUsers=async()=>{
            try{

                const response=await fetch(url);
                const data=await(response.json());
                setUsers(data);
            }
            catch(e){
                console.log(e.message);
            }
        }
        getUsers();
    },[])
    
    return (
        <div className="sub">
            <div className="users">
                <h3>Users</h3>
                {
                    users.map(user=><User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default RightContainer;