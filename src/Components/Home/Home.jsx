import { Helmet } from "react-helmet";
import AboutUs from "../../Pages/AboutUs";
import Banner from "../../Pages/Banner";
import Ourteam from "../../Pages/Ourteam";
import PresentFeed from "../../Pages/PresentFeed";
import QuesAAns from "../../Pages/QuesAAns";
import Sarcicses from "../../Pages/Sarcicses";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>DOC CARE || Home</title>
      </Helmet>
      <Banner></Banner>
      <Sarcicses></Sarcicses>
      <AboutUs></AboutUs>
      <Ourteam></Ourteam>
      <PresentFeed></PresentFeed>
      <QuesAAns></QuesAAns>
    </div>
  );
};

export default Home;
