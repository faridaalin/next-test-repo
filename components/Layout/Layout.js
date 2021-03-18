import Head from '../Head/Head';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const Layout = ({ children }) => {
  return (
    <>
      <Head
        title='News for you'
        description='A fancy website'
        author='Farida A.'
        keywords='news, js'
      />
      <Header content={'News for you'} />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
