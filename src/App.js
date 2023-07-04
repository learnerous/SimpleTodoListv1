
import './App.css';
import React from "react"
import MainTodoList from "./Components/MainTodoList/MainTodoList";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Register from "./Components/Register/Register";
import SignInPage from "./Components/Register/Login/LoginPagee";
import SignUpPage from "./Components/Register/Subbscribe/Subscibe";

function App() {

  return (

    <div className="App">
           <Routes>
               <Route exact path="/" element={<Register/>}/>
               <Route path="/TodoList" element={<MainTodoList/>} />
               <Route path="/login" element={ <SignInPage/>} />
               <Route path="/Subscribe" element={<SignUpPage/>}/>
           </Routes>

    </div>

  );
}
export default App;
