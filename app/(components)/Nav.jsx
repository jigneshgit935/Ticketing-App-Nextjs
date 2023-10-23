import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { FaTicketAlt } from 'react-icons/fa';

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href={'/'}>
          <AiFillHome className="icon" />
        </Link>
        <Link href={'/TicketPage/new'}>
          <FaTicketAlt className="icon" />
        </Link>
      </div>

      <div>
        <p className="text-default-text">jignesh@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;
