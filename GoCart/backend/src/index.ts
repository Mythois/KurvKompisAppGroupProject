import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { resolvers } from './resolvers'
import { typeDefs } from './models/typeDef'
import mongoose from 'mongoose'

// Connecting to mongoDB database
const MONGO_URI = 'mongodb://localhost:27017/GoCart'

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to Database')
  })
  .catch((error) => {
    console.log(error.message)
  })

const server = new ApolloServer({ typeDefs, resolvers })

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log('Server is ready at ${url}')
})
