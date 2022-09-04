import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Study from "./pages/Study/Study";
import Readme from "./pages/ReadMe/Readme";
import Layout from "./UI/Layout";
import QA from "./pages/QA/Qa";
import CardBuilder from "./pages/CardBuilder/CardBuilder";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/study" element={<Study />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/readme" element={<Readme />} /> */}
          <Route path="/qa" element={<QA />} />
          <Route path="/card-builder" element={<CardBuilder />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
