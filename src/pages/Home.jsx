
import Navbar from './../components/shared/Navbar';
import Hero from './../components/sections/Hero';
import ApproachSection from './../components/sections/ApproachSection';
import HappyUser from './../components/sections/HappyUser';
import VideoReel from './../components/sections/VideoReel';


const Home = () => {
    return (
        <>
         <Navbar/>
         <Hero/>
         <ApproachSection/>
          <HappyUser/>
          <VideoReel/>
        </>
    );
};

export default Home;