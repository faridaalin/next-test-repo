import Layout from '../../../components/Layout/Layout';
import axios from 'axios';

export default function user(props) {
  const { order } = props;
  console.log('order', order);
  return (
    <Layout>
      <h1>User orders</h1>
      <div>
        {order &&
          order.map((order) => (
            <div key={order.id}>
              <p>{order.title}</p>
              <p>{order.description}</p>
            </div>
          ))}
      </div>
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
  //http://localhost:5500/api/users/${params.params.id}/orders
  const url = `http://localhost:5500/api/users/${params.params.id}/orders`;
  let order = null;

  try {
    const response = await axios.get(url);

    order = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      order: order,
    },
  };
}
