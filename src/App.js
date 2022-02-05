import NavBar from "./components/NavBar";
import OramaFooter from './components/OramaFooter'
import LandingPage from './components/LandingPage'
import DropPreview from './components/DropPreview'
import OramaHeader from './components/landingComponents/OramaHeader'
import ScrollToTop from './components/landingComponents/ScrollToTop'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  const navItem = [
    { name: "Home", link: "/" },
    { name: "Vision", link: "/" },
    { name: "Eco-System", link: "/" },
    { name: "Contact", link: "/" },
    { name: "Create Your Own", link: "/oramaMVP" }

  ]

  const headerData = {
    title: "Orama",
    paragraph: "The Future of NTFs'"
  }
  return (
    <div className="wholeContainer">


      <NavBar navItems={navItem}></NavBar>
      <ScrollToTop></ScrollToTop>
      <OramaHeader data={headerData}></OramaHeader>
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/oramaMVP" element={<DropPreview />}></Route>
      </Routes>
      <OramaFooter></OramaFooter>

    </div >
  );
}

export default App;
