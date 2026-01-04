import { Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import PropertyPage from "./pages/PropertyPage";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const App = () => {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<SearchPage />} />
                <Route path="/property/:id" element={<PropertyPage />} />
            </Routes>

            <Footer />
        </>
    );
};

export default App;
