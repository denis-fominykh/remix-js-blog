import { Link } from 'remix';
import type { ReactNode } from 'react';
interface NavBarProps {
  children: ReactNode;
}

export default function NavBar({ children }: NavBarProps) {
  return (
    <>
      <nav className="navbar">
        <Link className="logo" to="/">
          Remix
        </Link>
        <ul>
          <li>
            <Link to="/people">People</Link>
          </li>
        </ul>
      </nav>
      <div className="container">{children}</div>
    </>
  );
}
