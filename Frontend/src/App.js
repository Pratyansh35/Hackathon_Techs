import React from "react";
import About from "./components/Java script/About";
import Video from "./components/Java script/Video";
import Form from "./components/Java script/Form";
import Volunteer from "./components/Java script/Volunteer";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import Header from "./components/Java script/Header";
import Body from "./components/Java script/Body";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" index element={<Body />} />
          <Route path="/About" element={<About />} />
          <Route path="/Video" element={<Video />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Volunteer" element={<Volunteer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
