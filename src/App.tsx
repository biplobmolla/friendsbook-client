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
<<<<<<< Updated upstream
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
=======
        <main
          className="fixed top-20 left-72 bg-red-600 w-7/12 h-full overflow-y-auto p-4"
          style={{ transform: "translate(-4px, -5px) scaleX(1.01)" }}
        >
          <Routes>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
>>>>>>> Stashed changes
        <AsideRight />
      </BrowserRouter>
    </>
  );
}

export default App;
