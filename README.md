# nodejs-typescript-starter-project
A starter project to build a nodejs rest api with typescript


TODO List:


- Create the structure of the project (folders)
- ~~Init the app.ts file~~
- ~~Create a config file => move to dotenv ~~
- use mongoose => how to set the type MongoosePromise<T> = Promise<T> in the global definition file ???
- Open database connection and close db connection when app stop
- Add passport for authentication
- Look at cluster => Add link to pm2 or strongloop
- Build => do we need gulp or npm is enough for pure nodejs rest app ?
- ~~Use cors~~
- ~~Use body parser~~
- ~~Use conpression~~
- Security
 - ~~Use Helmet~~
 - Use ratelimiter
 - Use cookie-session
 - Use csurf (Anti forgery token)
- Use socket.io ??? => maybe a different template
- ~~Use Tslint~~
- Use bluebird
- ~~Use debug~~
- Use express-validation
- use mocha ... ??? 
- ~~Use nodemon~~
- ~~Use cookieParser~~
- ~~Use methodOverride~~
- ~~Use flash~~
- ~~Use morgan~~
- Use winston
- Use express.static => See how to deploy static content to CDN rather than serving it from the node app (more angular stuff)
- See how to use babel with typescript
- Use swagger to generate documetation
- Handle http statuses
- Others ideas ???


#Installation

Install nodejs https://nodejs.org/en/download/
Install mongodb https://www.mongodb.com/download-center#community

gulp:remove old gulp version: npm rm --global gulp
install new client: npm install --global gulp-cli
add new gulp : npm install --save-dev gulp


npm install -g typescript gulp-cli


Run npm Install && typings install
