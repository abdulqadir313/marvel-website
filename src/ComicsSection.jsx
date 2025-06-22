import { useState, useEffect } from 'react';
import './ComicsSection.scss';
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider, gql, useQuery } from "@apollo/client";

const username = "srdevtest1";
const appPassword = "9O7V kaWH 4jKe 6Z3Y npj6 g4yR"; // Without spaces

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://srdevtest1.wpenginepowered.com/graphql",
    headers: {
      authorization: `Basic ${btoa(`${username}:${appPassword}`)}`,
    },
  }),
  cache: new InMemoryCache(),
});

const GET_VILLAIN_OPTIONS = gql`
  query GetVillainOptions {
    comics(first: 100) {
      nodes {
        villain
      }
    }
  }
`;

function VillainDropdown() {
  const { loading, error, data } = useQuery(GET_VILLAIN_OPTIONS);

  if (loading) return <p>Loading villains...</p>;
  if (error) return <p>Error loading villains.</p>;

  // Extract unique villains
  const villains = Array.from(
    new Set(
      data.comics.nodes
        .map((node) => node.villain)
        .filter(Boolean)
    )
  );

  return (
    <div className="villain-dropdown-wrapper">
      <label htmlFor="villain-select">Filter by Villain: </label>
      <select id="villain-select">
        <option value="">All Villains</option>
        {villains.map((villain, idx) => (
          <option value={villain} key={idx}>{villain}</option>
        ))}
      </select>
    </div>
  );
}

const GET_COMICS_BY_VILLAIN = gql`
  query GetComics($villain: String!) {
    comics(
      where: {
        metaQuery: {
          metaArray: { key: "villain", value: $villain, compare: EQUAL }
        }
      }
    ) {
      nodes {
        id
        title
      }
    }
  }
`;
console.log(GET_COMICS_BY_VILLAIN)

// Demo data for Spider-Man comics from 2022
const DEMO_COMICS = [
  {
    title: 'Amazing Spider-Man #1',
    issueNumber: '1',
    volume: 'Amazing Spider-Man (2022)',
    coverDate: '2022-04-01',
    image: '/Rectangle 14.png',
    description: 'Peter Parker returns as Spider-Man in this new series'
  },
  {
    title: 'Spider-Man #2',
    issueNumber: '2',
    volume: 'Spider-Man (2022)',
    coverDate: '2022-05-01',
    image: '/Rectangle 14.png',
    description: 'The web-slinger faces new challenges in the city'
  },
  {
    title: 'Spider-Man: Beyond #1',
    issueNumber: '1',
    volume: 'Spider-Man: Beyond (2022)',
    coverDate: '2022-06-01',
    image: '/Rectangle 14.png',
    description: 'Ben Reilly takes up the mantle in this limited series'
  },
  {
    title: 'Amazing Spider-Man #3',
    issueNumber: '3',
    volume: 'Amazing Spider-Man (2022)',
    coverDate: '2022-07-01',
    image: '/Rectangle 14.png',
    description: 'Peter Parker continues his heroic journey'
  },
  {
    title: 'Spider-Man: No Way Home #1',
    issueNumber: '1',
    volume: 'Spider-Man: No Way Home (2022)',
    coverDate: '2022-08-01',
    image: '/Rectangle 14.png',
    description: 'Comic adaptation of the blockbuster movie'
  },
  {
    title: 'Spider-Man: Miles Morales #1',
    issueNumber: '1',
    volume: 'Spider-Man: Miles Morales (2022)',
    coverDate: '2022-09-01',
    image: '/Rectangle 14.png',
    description: 'Miles Morales swings into action in his own series'
  },
  {
    title: 'Spider-Man: Dark Web #1',
    issueNumber: '1',
    volume: 'Spider-Man: Dark Web (2022)',
    coverDate: '2022-10-01',
    image: '/Rectangle 14.png',
    description: 'Spider-Man faces the dark forces of the multiverse'
  },
  {
    title: 'Amazing Spider-Man #900',
    issueNumber: '900',
    volume: 'Amazing Spider-Man (2022)',
    coverDate: '2022-11-01',
    image: '/Rectangle 14.png',
    description: 'Milestone issue celebrating Spider-Man\'s legacy'
  }
];

export default function ComicsSection() {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isUsingDemoData, setIsUsingDemoData] = useState(true);

  useEffect(() => {
    // Load demo data to avoid CORS issues
    loadDemoData();
  }, []);

  const loadDemoData = () => {
    setLoading(true);
    setTimeout(() => {
      setComics(DEMO_COMICS);
      setIsUsingDemoData(true);
      setLoading(false);
    }, 1000); // Simulate loading time
  };

  if (loading) {
    return (
      <section className="marvel-comics-section">
        <h2 className="section-title">Spider-Man Comics (2022)</h2>
        <div className="comics-loading">
          <div className="loading-spinner"></div>
          <p>Loading Spider-Man comics...</p>
        </div>
      </section>
    );
  }

  return (
    <ApolloProvider client={client}>
      <section className="marvel-comics-section">
        <h2 className="section-title">Spider-Man Comics (2022)</h2>
        <VillainDropdown />
        {isUsingDemoData && (
          <div className="demo-notice">
            <p>📚 Showing demo data. For real ComicVine API integration, set up a backend proxy to avoid CORS issues.</p>
          </div>
        )}
        <div className="comics-grid">
          {comics.map((comic, index) => (
            <div className="comic-card" key={`${comic.title}-${index}`}>
              <img src={comic.image} alt={comic.title} className="comic-cover" />
              <div className="comic-info">
                <h3>{comic.title}</h3>
                <p className="comic-volume">{comic.volume}</p>
                <p className="comic-date">{comic.coverDate}</p>
                <p className="comic-description">{comic.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </ApolloProvider>
  );
} 