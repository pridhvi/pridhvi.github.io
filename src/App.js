import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AboutComponent from './about';
import { Routes, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import NavigationBar from './navigation-bar';
import ProjectsComponent from './projects';
import ContactComponent from './contact';

function App() {
  return (
    <BrowserRouter>
      <div className="row m-0 mt-4 mt-sm-5">
        <NavigationBar />
        <Routes>
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/projects" element={<ProjectsComponent />} />
          <Route path="/contact" element={<ContactComponent />} />
        </Routes>
        {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" 
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
