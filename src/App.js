import { Route, Routes } from "react-router";
import Profile from "./components/Profile/Profile";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="management" element={<AdminPanel />} />
      </Routes>
      <Footer /> 
    </>
  );
}

export default App;
