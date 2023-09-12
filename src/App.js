import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Signin from "./Signin";
import Register from "./Register";
import NoPage from "./NoPage";
import Dashboard from "./Dashboard";
import Dash from "./Dash";
import Header from "./Header";
import Layout1 from "./Layout1";
// const {MongoClint} = require('mongodb')

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signin" element={<Signin />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
        </Route>

        <Route path="/layout1" element={<Layout1 />}>
          <Route index element={<Dashboard />} />
          {/* <Route path="dash" element={<Dash />} /> */}
          <Route path="signin" element={<Signin />} />
          <Route path="register" element={<Register />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
