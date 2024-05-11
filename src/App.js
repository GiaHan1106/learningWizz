import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import Home from "./component/HomePage/Home";
import FindTutor from "./component/HomePage/FindTuTor";
import ApplyToTeach from "./component/HomePage/ApplyToTeach";
import SignUp from "./component/Login/SignUp";
import SignOut from "./component/Login/SignOut";
function App() {
    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/findtutor" element={<FindTutor></FindTutor>}></Route>
                <Route path="/applytoteach" element={<ApplyToTeach></ApplyToTeach>}></Route>
                <Route path="/signup" element={<SignUp></SignUp>}></Route>
                <Route path="/signout" element={<SignOut></SignOut>}></Route>
            </Routes>
        </div>
    );
}

export default App;
