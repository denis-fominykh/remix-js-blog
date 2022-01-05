import type { MetaFunction } from 'remix';
import { Links, Outlet, Scripts, LiveReload, ScrollRestoration } from 'remix';
import type { LinksFunction } from 'remix';

import NavBar from '~/components/NavBar';

import globalStylesUrl from '~/styles/global.css';

export const meta: MetaFunction = () => {
  return { title: 'Remix Blog App' };
};

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: globalStylesUrl,
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Links />
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
