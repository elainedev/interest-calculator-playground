import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopNavigation from './components/TopNavigation';
import SideMenu from './components/SideMenu';
import ContentsContainer from './components/ContentsContainer';
import Welcome from './components/Welcome';
import Enrollment from './components/Enrollment';
import Calculator from './components/Calculator';

import './App.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <TopNavigation />
        <SideMenu />

        <ContentsContainer>
          <Routes>
            <Route path="/interest-calculator/" element={<Welcome />} />
            <Route path="/interest-calculator/enrollment" element={<Enrollment />} />
            <Route path="/interest-calculator/calculator" element={<Calculator/>} />
          </Routes>
        </ContentsContainer>
      </div>
    </Router>
  );
}

export default App;
