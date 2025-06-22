import './NewsSection.scss';

const news = [
  {
    title: 'Watch: Marvel Introduces Classic Mutant In New She-Hulk Clip',
    date: '2024-06-01',
    image: '/mutant-she-hulk 5.png',
    summary: 'Watch: Marvel Introduces Classic Mutant In New She-Hulk Clip.'
  },
  {
    title: 'Spider-Man: Across the Spider-Verse Breaks Records',
    date: '2024-05-20',
    image: '/mutant-she-hulk 5.png',
    summary: 'The latest Spider-Man animated film has broken box office records globally.'
  },
  {
    title: 'Watch: Marvel Introduces Classic Mutant In New She-Hulk Clip',
    date: '2024-05-10',
    image: '/mutant-she-hulk 5.png',
    summary: 'Marvel launches a new Avengers game, bringing fans closer to their favorite heroes.'
  },
  {
    title: 'Dave Filoni Defends Star Wars’ ‘Flexible’ Tone Amid Criticism',
    date: '2024-04-28',
    image: 'mutant-she-hulk 5.png',
    summary: 'Loki returns for a second season with more multiverse adventures.'
  },
];

export default function NewsSection() {
  return (
    <section className="marvel-news-section-redesign">
      <h2 className="section-title">Latest News</h2>
      <div className="news-grid-2col">
        <div className="news-col news-col-right">
          {news.slice(2).map((item) => (
            <div className="news-card-horizontal" key={item.title}>
              <img src={item.image} alt={item.title} className="news-img-thumb" />
              <div className="news-info-horizontal">
                <h4>{item.title}</h4>
                <span className="news-date">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="news-col news-col-right">
          {news.slice(2).map((item) => (
            <div className="news-card-horizontal" key={item.title}>
              <img src={item.image} alt={item.title} className="news-img-thumb" />
              <div className="news-info-horizontal">
                <h4>{item.title}</h4>
                <span className="news-date">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 