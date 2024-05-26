import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="Main">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;