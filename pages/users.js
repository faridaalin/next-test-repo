import Layout from '../components/Layout/Layout';

import axios from 'axios';

const about = ({ users }) => {
  console.log(users);
  return (
    <Layout>
      <main className='container '>
        <h1>Users</h1>
        <div>
          {users &&
            users.map((user) => (
              <p key={user.id}>
                {user.username} - {user.age}
              </p>
            ))}
        </div>
      </main>
    </Layout>
  );
};

export default about;

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
