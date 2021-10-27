import jwt from 'express-jwt'; // validate JWT and set req.user
import jwksRsa from 'jwks-rsa'; // Retrieve RSA keys from Json Web Key and set JWKS endpoint

// validating a jwt takes two steps:
// 1 - verify signature
// 2- validate the claims

// json web key (JWK): A JSON object that represents a cryptographic key.
// The members of the object represent properties of the key, including its value.

// validate cliams
// exp => confirm it hasn't expired
// iss => confirm it matches your auth0 domain
// aud => confirm it matches your clientId

export const checkJwt = jwt({
  // dynamically provide a signing key based on
  // the kid in the header
  // and the signing keys provided by the JWKS endpoint
  secret: jwksRsa.expressJwtSecret({
    cache: true, // cache the signing key
    rateLimit: true,
    jwksRequestsPerMinute: 5, // prevent attackers from requesting more than 5 per minute
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),

  // validate the audience and the issuer
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,

  // This must matches the algorithm selected in the auth0
  algorithms: ['RS256'],
});
