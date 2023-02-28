import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AboutComponent from './about';
import { Routes, Route } from 'react-router'
import { HashRouter } from 'react-router-dom';
import NavigationBar from './navigation-bar';
import ProjectsComponent from './projects';
import ContactComponent from './contact';
import EducationComponent from './education';

function App() {
  return (
    <HashRouter>
      <div className="row m-0 mt-4 mt-sm-5">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<AboutComponent />} />
          <Route path="/projects" element={<ProjectsComponent />} />
          <Route path="/education" element={<EducationComponent />} />
          <Route path="/contact" element={<ContactComponent />} />
        </Routes>
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link> */}
      </div>
    </HashRouter>
  );
}

export default App;
