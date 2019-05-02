const Koa = require('koa');
const mount = require('koa-mount');
const graphHttp = require('koa-graphql');
const schema = require('./graphql/schema');
const initDB = require('./database');
const CatSchema = require('./models/cat');
const app = new Koa();
initDB();
const Cat = new CatSchema();
Cat.save().then(() => {
  console.log('model created..');
});
app.use(
  mount(
    '/graphql',
    graphHttp({
      schema: schema,
      graphiql: true,
    })
  )
);

app.listen(8888);

app.on('error', err => {
  console.error('server error', err);
});
