
import { Navbar } from './components';
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import './app.scss'
import WSPGallery from './container/gallery/WSPGallery';


function App() {



  return (
    <div className="app">
    <Navbar /> 
    <Header />
    <About />
    <Work />
    <Skills />
    
    <Testimonial />
    <Footer />
    <WSPGallery />
  </div>
  );
}

export default App;




