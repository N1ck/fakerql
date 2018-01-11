import fetch from 'isomorphic-fetch';

const fetcher = async params => {
  const response = await fetch(`${window.location.origin}/graphql`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  });

  const res = await response.text();

  try {
    return await JSON.parse(res);
  } catch (err) {
    console.error(err);
    return res;
  }
};

export default fetcher;
