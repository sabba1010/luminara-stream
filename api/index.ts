export const config = {
  runtime: 'edge',
};

export default async function (request: Request) {
  try {
    // @ts-ignore
    const handler = await import('../dist/server/server.js');
    return handler.default.fetch(request);
  } catch (error) {
    console.error('Error in Vercel Edge Function:', error);
    return new Response('Internal Server Error', { status: 500 });
  }
}
