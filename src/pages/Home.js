import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome</h1>
          <p>Pixel art and animation portfolio</p>
          <div className="hero-buttons">
            <Link to="/animations" className="btn">View Animations</Link>
            <Link to="/illustrations" className="btn">See Illustrations</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;