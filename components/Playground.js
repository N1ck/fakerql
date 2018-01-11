import Head from 'next/head';
// import GraphiQL from 'graphiql/dist';
import Playground from 'graphql-playground';
import 'graphql-playground/playground.css';

import fetcher from '../lib/fetcher';

export default props => (
  <div>
    <Head>
      {/* <link rel="stylesheet" href="/static/graphiql.css" /> */}
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700|Source+Code+Pro:400,700"
        rel="stylesheet"
      />
    </Head>

    {/* <GraphiQL fetcher={fetcher} {...props} /> */}
    <Playground endpoint={`${window.location.origin}/graphql`} />
  </div>
);
