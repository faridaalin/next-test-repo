import Layout from '../../components/Layout/Layout';
import axios from 'axios';

export default function user(props) {
  console.log('PROPS', props.user);
  const user = props.user;
  return (
    <Layout>
      <h1>{user && user.username}</h1>
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const response = await axios.get('http://localhost:5500/api/users');

    const users = response.data;

    const paths = users.map((user) => ({
      params: { id: user.id.toString() },
    }));

    return { paths: paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps(params) {
  const url = `http://localhost:5500/api/users/${params.params.id}`;
  let user = null;

  try {
    const response = await axios.get(url);

    user = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      user: user,
    },
  };
}
