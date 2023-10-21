import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Dashboard from "../pages/dashboard";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path="login" element={<Login/>}/>
        <Route path="Dashboard/*" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}