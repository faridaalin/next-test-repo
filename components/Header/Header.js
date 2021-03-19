import Link from 'next/link';

export default function Header({ content }) {
  return (
    <>
      <header className='app-header'>
        <nav>
          <span className='logo'>{content}</span>
          <Link href='/'> | Home</Link>
          <Link href='/about'> | About</Link>
          <Link href='/game'> | Game</Link>
          <Link href='/users'> | Users</Link>
          <Link href='/orders'> | Orders</Link>
        </nav>
      </header>
    </>
  );
}
