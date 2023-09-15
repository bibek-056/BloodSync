import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Project from './components/Project';

export default function App() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <Project/>
        <Footer />
      </div>
    </>
  );
}
