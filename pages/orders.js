import Layout from '../components/Layout/Layout';

import axios from 'axios';

const orders = ({ orders }) => {
  console.log(orders);
  return (
    <Layout>
      <main className='container '>
        <h1>Orders</h1>
        {/* <div>
          {users &&
            users.map((user) => (
              <p key={user.id}>
                {user.username} - {user.age}
              </p>
            ))}
        </div> */}
      </main>
    </Layout>
  );
};

export default orders;

export async function getStaticProps() {
  const url = 'http://localhost:5500/api/orders';
  let orders = null;

  try {
    const response = await axios.get(url);

    users = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      orders: orders,
    },
  };
}
