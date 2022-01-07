import { useContext } from 'react';
import type { MetaFunction } from 'remix';
import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  ScrollRestoration,
} from 'remix';

import NavBar from '~/components/NavBar';

import StylesContext from '~/StylesContext';

export const meta: MetaFunction = () => {
  return { title: 'New Remix App' };
};

export default function App() {
  const styles = useContext(StylesContext);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        {styles}
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
