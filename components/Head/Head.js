import NextHead from 'next/head';

const Head = ({ title, description, author, keywords }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <link rel='icon' href='/favicon.ico' />
      <meta name='description' description={description} />
      <meta name='author' author={author} />
      <meta name='keyword' keywords={keywords} />
    </NextHead>
  );
};

export default Head;
