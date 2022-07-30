### JWT simple backend

Here we simply want to return a new JWT w/o checking if our user exists or any other form of validation, just return the token.
GENERATING RANDOM HASH FOR TOKEN SECRETS.

1. RUN NODE -> `require('crypto').randomBytes(64).toString('hex')`
2. TERMINAL -> touch .env
3. MAKE SURE YOU HAVE .ENV 2 VARIABLES DEFINED FOR "ACCESS_TOKEN_SECRET" AND "REFRESH_TOKEN_SECRET"
