import './MarvelInsightsSection.scss';

export default function MarvelInsightsSection() {
  return (
    <section className="marvel-insights-redesign">
      <div className="insights-left">
        <div className="insider-overlay">
        </div>
        {/* Replace with your Marvel characters background image */}
        <img className="insights-bg" src="/marvel_insider_master.png" alt="Marvel Characters" />
      </div>
      <div className="insights-right">
        <div className="insider-right-content">
          <div className="insider-title-right">MARVEL INSIDER</div>
          <div className="insider-action">watch, Earn, Redeem!</div>
          <div className="insider-subtext">Get a reward for what you already do as a fan.</div>
          <button className="insider-join-btn">Join Now</button>
        </div>
      </div>
    </section>
  );
} 