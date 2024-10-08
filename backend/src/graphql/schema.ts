import { gql } from "apollo-server-express";
import Item from "../models/Item";

export const typeDefs = gql`
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

export const resolvers = {
    Query: {
        items: async () => await Item.find(),
    },
    Mutation: {
        addItem: async (_: any, { name }: { name: string }) => {
            const newItem = new Item({ name });
            return await newItem.save();
        },
        removeItem: async (_: any, { id }: { id: string }) => {
            const result = await Item.findByIdAndDelete(id);
            return result ? true : false;
        },
    },
};
