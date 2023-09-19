import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Footer from "../components/Footer";
import './app.css'

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Project />
      <Footer />
    </div>
  );
}

export default Home;
