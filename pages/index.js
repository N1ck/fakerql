import Head from 'next/head';
import dynamic from 'next/dynamic';

import initialQuery from '../lib/initialQuery';
import Banner from '../components/Banner';
import Spinner from '../components/Spinner';

const Playground = dynamic(import('../components/Playground'), {
  ssr: false,
  loading: () => <Spinner />
});

export default () => {
  const query = initialQuery.trim();

  return (
    <div>
      <Head>
        <title>
          Hosted faker GraphQL endpoint for frontend developers | FakerQL
        </title>
      </Head>

      <Banner />

      <Playground query={query} />

      <style jsx global>{`
        html {
          box-sizing: border-box;
          font-size: 62.25%;
          line-height: 1.5;
          width: 100%;
          height: 100%;
          -ms-overflow-style: -ms-autohiding-scrollbar;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        body {
          height: 100%;
          margin: 0;
          width: 100%;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica,
            Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
          font-size: 1.7rem;
        }
      `}</style>
    </div>
  );
};
