
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div 
      className="home-container"
      style={{
        backgroundImage: "linear-gradient(to bottom right, rgba(0, 0, 0, 0.3), rgba(26, 32, 44, 0.3)), url('/Blog_Mars_Header.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'contrast(1.2) brightness(1.05)',
      }}
    >
      <div className="home-overlay" />

      <h1 className="home-heading">
        Welcome to GoMars 🚀
      </h1>

      <p className="home-subheading">
        Experience the future of space travel. Book your interplanetary adventure now and become one of the first tourists on Mars.
      </p>

      <button 
        onClick={() => navigate('/Info')}
        className="cta-button"
      >
        Start Application
      </button>

      <div className="feature-tags">
        <span>🪐 Interstellar Cuisine</span>
        <span>👨‍🚀 Meet Real Astronauts</span>
        <span>🚀 Launch Pad Tours</span>
        <span>🌠 Night Sky Observation</span>
      </div>
    </div>
  );
}

export default Home;