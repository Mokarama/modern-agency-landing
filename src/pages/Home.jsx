
import Navbar from './../components/shared/Navbar';
import Hero from './../components/sections/Hero';
import ApproachSection from './../components/sections/ApproachSection';
import HappyUser from './../components/sections/HappyUser';
import VideoReel from './../components/sections/VideoReel';
import AboutAwards from './../components/sections/AboutAwards';
import OurTeam from './../components/sections/OurTeam';
import BlogSection from './../components/sections/BlogSection';
import Footer from './../components/shared/Footer';



const Home = () => {
    return (
        <>
         <Navbar/>
         <Hero/>
         <ApproachSection/>
          <HappyUser/>
          <VideoReel/>
          <AboutAwards/>
          <OurTeam/>
         <BlogSection/>


         <Footer/>
        </>
    );
};

export default Home;