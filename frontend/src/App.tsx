import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Team from "./pages/Team";
import LandingPage from "./pages/LandingPage";
import { ThemeProvider } from "./components/ui/theme-provider";

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/team" element={<Team/>}></Route>
        </Routes>
      </Router>

    </ThemeProvider>
    
  );
}

export default App;
