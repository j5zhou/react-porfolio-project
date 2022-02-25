import Home_AboutMe from "./HomeAboutMe";
import Home_Contact from "./HomeContact";
import Home_MainContent from "./homeMainContent";
import Home_Project from "./HomeProject";
import Home_Summary from "./HomeSummary";

function Home() {
    return (
        <>
      <Home_MainContent/>
      <Home_AboutMe />
      <Home_Summary />
      <Home_Project />
      <Home_Contact />
      </>
    );
  }
  
export default Home;