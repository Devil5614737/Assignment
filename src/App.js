import { useEffect, useState } from "react";
import { Card } from './components/Card';
import { useSelector,useDispatch } from "react-redux";
import {fetchSingleUser, fetchUsers} from './features/actions/fetchUsers';

function App() {
const dispatch=useDispatch()
const[showCard,setShowCard]=useState(false);


const state=useSelector(state=>state.fetchTheUser);


const {users,loading}=state;

// calling the api
useEffect(()=>{
  dispatch(fetchUsers())
},[dispatch])


// handling the user
const handleClick=(id)=>{
  setShowCard(true)
dispatch(fetchSingleUser(id))
}


  return (
    <>
    <main className="px-3 py-3 " >
   {!showCard&&   <p className="text-center">Click on any button!!!</p>}
   {!showCard&& <div className="d-flex justify-content-center my-5">
   {loading? <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div>:users&&users.map(user=> <button onClick={()=>handleClick(user.id)} key={user.id} className="btn btn-primary mx-2">{user.id}</button>)}
    </div>}

    
    </main>
    <Card showCard={showCard} setShowCard={setShowCard}/>
    </>
  );
}

export default App;
