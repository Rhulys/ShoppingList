import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import { typeDefs, resolvers } from "./graphql/schema";

const app = express();

async function startServer() {
    await mongoose.connect("mongodb://localhost:27017/listasupermercado");

    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    server.start().then(() => {
        server.applyMiddleware({ app: app as any });
        app.listen({ port: 4000 }, () =>
            console.log(
                `🚀 Servidor rodando em htttp://localhost:4000${server.graphqlPath}`
            )
        );
    });
}

startServer();