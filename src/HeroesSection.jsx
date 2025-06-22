import { useState } from 'react';
import './HeroesSection.scss';

const heroes = [
  {
    name: 'Iron Man',
    image: '/Rectangle 14.png',
    desc: 'Genius inventor and philanthropist Tony Stark fights evil as Iron Man.',
    fullName: 'Anthony Edward Stark',
    powers: ['Genius-level intellect', 'Powered armor suit', 'Energy weapons', 'Flight'],
    firstAppearance: 'Tales of Suspense #39 (1963)',
    team: 'Avengers',
    origin: 'Kidnapped by terrorists, Tony Stark built his first Iron Man suit to escape and save his life.'
  },
  {
    name: 'Captain America',
    image: '/Rectangle 14.png',
    desc: 'Super-soldier Steve Rogers stands for justice as Captain America.',
    fullName: 'Steven Grant Rogers',
    powers: ['Peak human strength', 'Enhanced agility', 'Shield mastery', 'Leadership'],
    firstAppearance: 'Captain America Comics #1 (1941)',
    team: 'Avengers',
    origin: 'A frail young man enhanced to superhuman levels by an experimental serum to aid the U.S. war effort.'
  },
  {
    name: 'Thor',
    image: '/Rectangle 14.png',
    desc: 'The God of Thunder wields his mighty hammer to protect the realms.',
    fullName: 'Thor Odinson',
    powers: ['God of Thunder', 'Mjolnir wielder', 'Weather control', 'Immortality'],
    firstAppearance: 'Journey into Mystery #83 (1962)',
    team: 'Avengers',
    origin: 'The Norse God of Thunder, son of Odin, protector of the Nine Realms.'
  },
  {
    name: 'Black Widow',
    image: '/Rectangle 14.png',
    desc: 'Natasha Romanoff is a master spy and Avenger.',
    fullName: 'Natalia Alianovna Romanova',
    powers: ['Master spy', 'Martial arts expert', 'Weapons specialist', 'Intelligence'],
    firstAppearance: 'Tales of Suspense #52 (1964)',
    team: 'Avengers',
    origin: 'Trained from childhood in the Red Room, Natasha became one of the world\'s deadliest assassins.'
  },
];

export default function HeroesSection() {
  const [selectedHero, setSelectedHero] = useState(null);

  const handleHeroClick = (hero) => {
    setSelectedHero(hero);
  };

  const handleCloseModal = () => {
    setSelectedHero(null);
  };

  return (
    <section className="marvel-heroes-section">
      <h2 className="section-title">Marvel Heroes</h2>
      <div className="heroes-grid">
        {heroes.map((hero) => (
          <div
            className="hero-card"
            key={hero.name}
            onClick={() => handleHeroClick(hero)}
          >
            <img src={hero.image} alt={hero.name} className="hero-img" />
            <div className="hero-info">
              <h3>{hero.name}</h3>
              <p>{hero.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedHero && (
        <div className="hero-modal-overlay" onClick={handleCloseModal}>
          <div className="hero-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleCloseModal}>×</button>
            <div className="modal-content">
              <div className="modal-hero-image">
                <img src={selectedHero.image} alt={selectedHero.name} />
              </div>
              <div className="modal-hero-details">
                <h2>{selectedHero.name}</h2>
                <p className="hero-full-name">{selectedHero.fullName}</p>
                <p className="hero-description">{selectedHero.desc}</p>
                
                <div className="hero-stats">
                  <div className="stat-group">
                    <h4>Powers & Abilities</h4>
                    <ul>
                      {selectedHero.powers.map((power, index) => (
                        <li key={index}>{power}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="stat-group">
                    <h4>First Appearance</h4>
                    <p>{selectedHero.firstAppearance}</p>
                  </div>
                  
                  <div className="stat-group">
                    <h4>Team Affiliations</h4>
                    <p>{selectedHero.team}</p>
                  </div>
                  
                  <div className="stat-group">
                    <h4>Origin</h4>
                    <p>{selectedHero.origin}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 