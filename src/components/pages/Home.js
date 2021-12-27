import Navigation from "../navigation/Navigation";
import Introduction from "../main/Introduction";
import Technologies from "../main/Technologies";
import BlogsOverview from "../main/BlogsOverview";
import ProjectsOverview from "../main/ProjectsOverview";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <>
      <Navigation />
      <Introduction />
      <Technologies />
      <BlogsOverview />
      <ProjectsOverview />
      <Footer />
    </>
  );
};

export default Home;
