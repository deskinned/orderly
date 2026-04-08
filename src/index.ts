//! Request router — dispatches to auth and submit handlers
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    const headers = {
      'Access-Control-Allow-Origin': env.SITE_URL ?? 'https://gitsk.in',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Credentials': 'true',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers });
    }

    switch (url.pathname) {
      case '/login':
        return new Response('Not implemented', { status: 501, headers });
      case '/callback':
        return new Response('Not implemented', { status: 501, headers });
      case '/submit':
        return new Response('Not implemented', { status: 501, headers });
      case '/logout':
        return new Response('Not implemented', { status: 501, headers });
      default:
        return new Response('Not found', { status: 404, headers });
    }
  },
} satisfies ExportedHandler<Env>;

interface Env {
  GITHUB_CLIENT_ID: string;
  GITHUB_CLIENT_SECRET: string;
  SITE_URL: string;
  SKINBANK_API_URL: string;
  RATE_LIMIT: KVNamespace;
}
