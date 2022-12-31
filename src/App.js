import { Routes, Route } from "react-router-dom";

import Home from './components/Home';
import Navbar from './components/Navbar';
import Favorites from './components/Favorites';
import styles from "./App.module.css";

function App() {
    return (
        <div className={styles.container}>
            <Navbar />
            <br />
            <div className={styles.routeContainer}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </div>
            <footer style={{ textAlign: "center" }}>
                <p>Data provided by <a href="https://developer.accuweather.com/">Accuweather</a></p>
            </footer>
        </div>
    );
}

export default App;
