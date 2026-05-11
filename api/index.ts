import handler from '../dist/server/server.js';

export const config = {
  runtime: 'edge',
};

export default async function (request: Request) {
  return handler.fetch(request);
}
