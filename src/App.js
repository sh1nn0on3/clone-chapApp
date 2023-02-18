import "./App.css";
import { Route, Routes } from "react-router-dom";

import Login from "./components/Chat/Forms/Login";
import SignUp from "./components/Chat/Forms/SignUp";
import EmptyRoom from "./components/Chat/ChatRoom/EmptyRoom";

function App() {
  return(
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<EmptyRoom />} />
    </Routes>
  )
}

export default App;

