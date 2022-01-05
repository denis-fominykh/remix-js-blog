import type { MetaFunction } from 'remix';
import { Outlet, Scripts, LiveReload, ScrollRestoration } from 'remix';

import NavBar from '~/components/NavBar';

export const meta: MetaFunction = () => {
  return { title: 'Remix Blog App' };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </head>
      <body>
        <NavBar>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          {process.env.NODE_ENV === 'development' && <LiveReload />}
        </NavBar>
      </body>
    </html>
  );
}
