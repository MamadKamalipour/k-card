import { Route, Routes } from "react-router";
import Profile from "./components/Profile/Profile";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <div className="main-container">
        <header className="container__header">
          <Header />
        </header>
        <main className="container__main">
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="management" element={<AdminPanel />} />
          </Routes>
        </main>
        <footer className="container__footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
