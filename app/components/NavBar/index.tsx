import { Link } from 'remix';
import type { ReactNode } from 'react';

import { Navbar, LogoLink, Container } from '~/components/NavBar/styled';

interface NavBarProps {
  children: ReactNode;
}

export default function NavBar({ children }: NavBarProps) {
  return (
    <>
      <Navbar>
        <LogoLink to="/">Remix</LogoLink>
        <ul>
          <li>
            <Link to="/people">People</Link>
          </li>
        </ul>
      </Navbar>
      <Container>{children}</Container>
    </>
  );
}
