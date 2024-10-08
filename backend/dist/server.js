"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const mongoose_1 = __importDefault(require("mongoose"));
const schema_1 = require("./graphql/schema");
const app = (0, express_1.default)();
async function startServer() {
    await mongoose_1.default.connect("mongodb://localhost:27017/listasupermercado");
    const server = new apollo_server_express_1.ApolloServer({
        typeDefs: schema_1.typeDefs,
        resolvers: schema_1.resolvers,
    });
    server.start().then(() => {
        server.applyMiddleware({ app: app });
        app.listen({ port: 4000 }, () => console.log(`🚀 Servidor rodando em htttp://localhost:4000${server.graphqlPath}`));
    });
}
startServer();
