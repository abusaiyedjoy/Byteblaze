import { Outlet } from 'react-router-dom';
import Footer from '../Footer/footer';
import Navbar from './../Components/navbar';const container = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default container;