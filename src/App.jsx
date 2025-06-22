import './App.scss';
import ComicsSection from './ComicsSection';
import HeroesSection from './HeroesSection';
import NewsSection from './NewsSection';
import MarvelInsightsSection from './MarvelInsightsSection';
import MarvelFooter from './MarvelFooter';

function App() {
  return (
    <div className="marvel-homepage">
      <header className="marvel-header">
        <img src="/marvel-logo.png" alt="Marvel Logo" className="marvel-logo" />
        <nav className="marvel-nav">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Movies</a>
          <a href="#" className="nav-link">Comics</a>
          <a href="#" className="nav-link">Characters</a>
          <a href="#" className="nav-link">About</a>
        </nav>
      </header>
      <section className="marvel-banner">
        <img src="/banner.jpg" alt="Marvel Banner" className="banner-img" />
        <div className="banner-content">
          <h1>Welcome to the Marvel Universe</h1>
          <p>Explore movies, comics, and your favorite characters!</p>
          <button className="explore-btn">Explore Now</button>
        </div>
      </section>
      <ComicsSection />
      <HeroesSection />
      <NewsSection />
      <MarvelInsightsSection />
      <MarvelFooter />
    </div>
  );
}

export default App;
