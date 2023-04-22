import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AsideLeft from "./components/AsideLeft";
import AsideRight from "./components/AsideRight";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AsideLeft />
        <main
          className="fixed top-20 left-72 bg-red-600 w-7/12"
          style={{ transform: "translate(-0px, -5px) scaleX(1.01)" }}
        >
          <Routes>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
        <AsideRight />
      </BrowserRouter>
    </>
  );
}

export default App;
