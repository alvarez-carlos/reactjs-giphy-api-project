import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, LionGifs, PandaGifs, CatGifs } from "./pages";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/lions" element={<LionGifs />}></Route>
        <Route path="/pandas" element={<PandaGifs />}></Route>
        <Route path="/cats" element={<CatGifs />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
