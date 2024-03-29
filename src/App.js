import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomeComponent from './home';
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
          <Route path="/" element={<HomeComponent />} />
          <Route path="/projects" element={<ProjectsComponent />} />
          <Route path="/education" element={<EducationComponent />} />
          <Route path="/contact" element={<ContactComponent />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
