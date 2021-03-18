import Layout from '../../components/Layout/Layout';
import { GAMES_ENDPOINT } from '../../constants/api';
import axios from 'axios';

export default function News(props) {
  console.log('game:', props.game);
  const game = props.game;
  return (
    <Layout>
      <h1>{game.name}</h1>
      <img src={game.image} />
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    // the same API call we used in `index.js`
    // we want to get all the slugs from the array of games
    // so first we need to fetch the games
    const response = await axios.get(GAMES_ENDPOINT);
    // the log here will happen on the server, you can check the console in your editor

    // the array is on the response.data.data property
    const games = response.data.data;

    // Get the paths we want to pre-render based on the slugs in the games
    const paths = games.map((game) => ({
      params: { slug: game.slug },
    }));

    // console.log('🔴 paths', paths);

    return { paths: paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps(params) {
  // console.log('params: ⏲️', params.params.slug);
  const url = `${GAMES_ENDPOINT}/${params.params.slug}`;
  console.log('URL: 🌼', url);
  let game = null;
  try {
    const response = await axios.get(url);
    game = response.data;
    // console.log('😀 RESPONSE', response);
  } catch (err) {
    console.error(err);
  }

  return {
    props: { game: game },
  };
}
