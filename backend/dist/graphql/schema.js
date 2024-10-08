"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const Item_1 = __importDefault(require("../models/Item"));
exports.typeDefs = (0, apollo_server_express_1.gql) `
    type Item {
        id: ID!
        name: String!
    }

    type Query {
        items: [Item!]
    }

    type Mutation {
        addItem(name: String!): Item!
        removeItem(id: ID!): Boolean
    }
`;
exports.resolvers = {
    Query: {
        items: async () => await Item_1.default.find(),
    },
    Mutation: {
        addItem: async (_, { name }) => {
            const newItem = new Item_1.default({ name });
            return await newItem.save();
        },
        removeItem: async (_, { id }) => {
            const result = await Item_1.default.findByIdAndDelete(id);
            return result ? true : false;
        },
    },
};
