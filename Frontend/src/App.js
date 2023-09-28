import React from "react";
import About from "./components/Java script/About";
import Video from "./components/Java script/Video";
import Form from "./components/Java script/Form";
import Volunteer from "./components/Java script/Volunteer";
import AgencyForm from "./components/Java script/AgencyDetaiRegistration";
import AgencyMapComponent from "./components/Java script/Map";
import MapComponent from './components/Java script/MapComponent';
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import Header from "./components/Java script/Header";
import Body from "./components/Java script/Body";
import Agency from "./components/Java script/Agency";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Header /> */}
        <Routes>
          <Route path="/" index element={<Body />} />
          <Route path="/About" element={<About />} />
          <Route path="/Video" element={<Video />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Volunteer" element={<Volunteer />} />
          <Route path="/Agency" element={<Agency />} />
          <Route path="/AgencyForm" element={<AgencyForm/>}/>
          <Route path="/AgentMap" element={<AgencyMapComponent/>}/>
          <Route path="/ReportMap" element={<MapComponent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
