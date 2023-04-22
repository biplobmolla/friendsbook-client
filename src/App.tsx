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
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <AsideRight />
      </BrowserRouter>
    </>
  );
}

export default App;
