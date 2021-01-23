import { initAuth0 } from "@auth0/nextjs-auth0";

export default initAuth0({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: "openid profile",
  redirectUri:
    "https://condescending-jennings-84e1f7.netlify.app/.netlify/functions/next_api_callback",
  postLogoutRedirectUri:
    "https://600c9c5adbb5fd0007174808--condescending-jennings-84e1f7.netlify.app/",
  session: {
    cookieSecret: process.env.COOKIE_SECRET,
  },
});
