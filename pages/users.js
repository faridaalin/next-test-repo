import Layout from '../components/Layout/Layout';

import axios from 'axios';

const users = ({ users }) => {
  return (
    <Layout>
      <main className='container '>
        <h1>Users</h1>
        <div>
          {users &&
            users.map((user) => (
              <div key={user.id}>
                {user.username} - {user.age}
                <a href={`/users/${user.id}`}> | See user profile</a> | 
                <a href={`/users/${user.id}/orders/`}> View user order | </a>
              </div>
            ))}
        </div>
      </main>
    </Layout>
  );
};

export default users;

export async function getStaticProps() {
  const url = 'http://localhost:5500/api/users';
  let users = null;

  try {
    const response = await axios.get(url);

    users = response.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      users: users,
    },
  };
}
