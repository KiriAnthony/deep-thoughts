# deep-thoughts

## Client Side Installs: 
* npx create-react-app <name>
* npm i @apollo/client graphql

* npm install react-router-dom

## install concurrently library as a dependency for development environment only
* npm install -D concurrently
* Add to Scripts: 
    "start": "node server/server.js",
    "develop": "concurrently \"cd server && npm run watch\" \"cd client && npm start\"",
    "install": "cd server && npm i && cd ../client && npm i",
    "seed": "cd server && npm run seed"

## Total install:
