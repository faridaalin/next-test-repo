import Layout from '../components/Layout/Layout';
import { GAMES_ENDPOINT } from '../constants/api';
import axios from 'axios';
import Image from 'next/image';

const LatestNews = (props) => {
  const { games } = props;

  const defaultImg =
    'https://images.unsplash.com/photo-1479030160180-b1860951d696?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FueW9ufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60';
  return (
    <Layout>
      <main className='container '>
        <h1>Latest Games</h1>
        {games.map((game) => {
          return (
            <div key={game.slug}>
              <h3 key={game.slug}>{game.name}</h3>
              <Image
                src={
                  game.screenshots[0].image
                    ? game.screenshots[0].image
                    : defaultImg
                }
                width={500}
                height={500}
                alt='test'
              />

              <a href={`game/${game.slug}`}>{game.name}</a>
            </div>
          );
        })}
      </main>
    </Layout>
  );
};

export default LatestNews;

// export async function getStaticProps() {
//   let games = [];

//   try {
//     const response = await axios.get(GAMES_ENDPOINT);
//
//     games = response.data.data;
//   } catch (error) {
//     console.log(error);
//   }

//   return {
//     props: {
//       games: games,
//     },
//   };
// }
export async function getStaticProps() {
  let games = [];

  try {
    const response = await axios.get('http://localhost:5500/api/games');
    games = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      games: games,
    },
  };
}
