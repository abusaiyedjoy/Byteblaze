
import Wave from '../assets/wave.svg'
import Hero from "../Components/hero";
const Home = () => {
    return (
        <div className=' flex relative flex-col justify-center items-center min-h-[calc(100vh-196px)]'>
            <Hero></Hero>
            <img className="w-full absolute bottom-0" src={Wave} alt="" />
        </div>

    );
};

export default Home;