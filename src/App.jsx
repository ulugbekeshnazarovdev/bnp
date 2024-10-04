import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import { CookieBanner } from "./components/utils/cookiebanner";
import TelegramButton from "./components/utils/telegrambuttons";
import ErrorBoundary from "./ErrorBoundery";
import About from "./pages/About";
import Collection from "./pages/Collection";
import CollectionDetails from "./pages/CollectionDetails";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import News from "./pages/News";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails ";
const App = () => {
    return (
        <ErrorBoundary>
            <Header />
            <CookieBanner />
            <TelegramButton />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about-me" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/collection" element={<Collection />} />
                <Route path="/collection/:id" element={<CollectionDetails />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/news/:id" element={<News />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </ErrorBoundary>
    );
};

export default App;
