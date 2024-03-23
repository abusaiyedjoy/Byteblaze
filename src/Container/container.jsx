import { Outlet } from 'react-router-dom';
import Footer from '../Footer/footer';
import Navbar from './../Components/navbar';const container = () => {
    return (
        <div>
            <div className='h-[64px]'>
            <Navbar></Navbar>
            </div>
            <div className=' min-h-[calc(100vh-196px)]'>
            <Outlet></Outlet>
            </div>
            <div>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default container;