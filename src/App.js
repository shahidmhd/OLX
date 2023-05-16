import React,{useEffect,useContext} from "react";
import Home from "./Pages/Home";
import {BrowserRouter,Routes,Route}  from "react-router-dom"
import SignupPage from "./Pages/Signup";
import Login from "./Components/Login/Login";
import { AuthContext } from "./store/Firebasecontext";
import { getAuth, onAuthStateChanged } from "firebase/auth";


function App() {
  const auth = getAuth();
  const {setUser} =useContext(AuthContext)
  // const {firebase} =useContext(Firebasecontext)
  useEffect(()=>{
 
    onAuthStateChanged(auth, (user) => {
      console.log("userrrrrr",user);
      setUser(user);
    });
  })
  return (

    <div style={{overflowX:"hidden"}} >
       <BrowserRouter>
      <Routes>
        <Route exact path="/"  element={<Home/>} />
        <Route exact path="/signup"  element={<SignupPage/>} />
        <Route exact path="/login"  element={<Login/>} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
