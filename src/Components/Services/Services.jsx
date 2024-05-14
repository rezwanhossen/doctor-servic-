import { Helmet } from "react-helmet";
import Allservics from "../../Pages/SurvicesPag/Allservics";
import SBanner from "../../Pages/SurvicesPag/SBanner";

const Services = () => {
  return (
    <div>
      <Helmet>
        <title>DOCCARE || services</title>
      </Helmet>
      <SBanner />
      <Allservics></Allservics>
    </div>
  );
};

export default Services;
