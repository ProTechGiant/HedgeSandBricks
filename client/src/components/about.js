import React from "react";
import Navbar from "./global-components/navbar-v2";
import PageHeader from "./global-components/page-header2";
import About from "./section-components/about";
import Counter from "./section-components/counter";
import Service from "./section-components/service-v3";
import AgentV3 from "./section-components/agent-v3";
import Testimonial from "./section-components/testimonial-v3";
import MoreInfo from "./section-components/more-info";
import Footer from "./global-components/footer2";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      {/* <PageHeader headertitle="About Us" headerimg="assets/img/about.png" /> */}
      <PageHeader headerimg="assets/img/about.png" />
      {/* <About />
      <Counter />
      <Service />
      <AgentV3 />
      <Testimonial />
      <MoreInfo /> */}
      <Footer />
    </div>
  );
};

export default AboutPage;
