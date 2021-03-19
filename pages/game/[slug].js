import Layout from '../../components/Layout/Layout';
import { GAMES_ENDPOINT } from '../../constants/api';
import axios from 'axios';

export default function game(props) {
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
    const response = await axios.get(GAMES_ENDPOINT);
    const games = response.data.data;
    const paths = games.map((game) => ({
      params: { slug: game.slug },
    }));

    return { paths: paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps(params) {
  const url = `${GAMES_ENDPOINT}/${params.params.slug}`;
  let game = null;
  try {
    const response = await axios.get(url);
    game = response.data;
  } catch (err) {
    console.error(err);
  }

  return {
    props: { game: game },
  };
}
