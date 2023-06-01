const client = ({path = ''} = {}) => {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  };
  return fetch(`https://api.reddit.com/${path}`, options).then(response =>
    response.json(),
  );
};

export default client;
