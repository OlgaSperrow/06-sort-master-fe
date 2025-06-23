import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./layouts/Layout";
import Containers from "./pages/Containers";
import CreateContainerForm from "./components/CreateContainerForm";
import ItemsList from "./pages/ItemsList.tsx";

function App() {
  return (
    <div>
      <nav></nav>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/containers" element={<Containers />} />
          <Route path="/container-form" element={<CreateContainerForm />} />
          <Route path="/items" element={<ItemsList />} />

        </Routes>
      </Layout>
    </div>
  );
}

export default App;
