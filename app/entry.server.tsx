import { RemixServer } from 'remix';
import type { EntryContext } from 'remix';
import ReactDOMServer from 'react-dom/server';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

import StylesContext from '~/StylesContext';

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  // set up the Styled Components sheet
  const sheet = new ServerStyleSheet();

  // This render is thrown away, it's here simply to let styled components
  // extract the styles used
  renderToString(
    sheet.collectStyles(
      <StylesContext.Provider value={null}>
        <RemixServer context={remixContext} url={request.url} />
      </StylesContext.Provider>,
    ),
  );

  // Now that we've rendered, we get the styles out of the sheet
  const styles = sheet.getStyleTags();
  sheet.seal();

  // Finally, we render a second time, but this time we have styles to apply,
  // make sure to pass them to `<StylesContext.Provider value>`
  const markup = ReactDOMServer.renderToString(
    <StylesContext.Provider value={styles}>
      <RemixServer context={remixContext} url={request.url} />
    </StylesContext.Provider>,
  );

  responseHeaders.set('Content-Type', 'text/html');

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
