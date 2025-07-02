import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./layouts/Layout";
import Containers from "./pages/Containers";
import CreateContainerForm from "./components/CreateContainerForm";
import Items from "./pages/Items.tsx";
import ItemDetail from "./pages/ItemDetail.tsx";
import {AdvertProvider} from "./components/AdvertContext.tsx";

function App() {
    return (
        <div>
            <nav></nav>
            <AdvertProvider>
                <Layout>
                    <Routes>
                        <Route index element={<Home/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/containers" element={<Containers/>}/>
                        <Route path="/container-form" element={<CreateContainerForm/>}/>
                        <Route path="/items" element={<Items/>}/>
                        <Route path="/items/:id" element={<ItemDetail/>}/>

                    </Routes>
                </Layout>
            </AdvertProvider>
        </div>
    );
}

export default App;
