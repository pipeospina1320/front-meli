const HEAD_CONTENT = { 'Content-Type': 'application/json' };

const PATH = process.env.REACT_APP_URL_API;

const createPath = (url) => {
  if (!url) {
    throw new Error('La URL es requerida para este metodo');
  }
  return PATH + url;
};

const configRequest = (method, body) => ({
  method,
  headers: HEAD_CONTENT,
  body: JSON.stringify(body),
});

const get = async (path, params = {}) => {
  const urlPath = createPath(path);
  const searchParams = new URLSearchParams(params);
  const url = `${urlPath}?${searchParams.toString()}`;
  const response = await fetch(url, configRequest('GET'));
  return response;
};

export {
  get,
};
