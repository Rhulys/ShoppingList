"use client";

import { gql, useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { motion } from "framer-motion";

const GET_ITEMS = gql`
    query GetItems {
        items {
            id
            name
        }
    }
`;

const ADD_ITEM = gql`
    mutation AddItem($name: String!) {
        addItem(name: $name) {
            id
            name
        }
    }
`;

const REMOVE_ITEM = gql`
    mutation RemoveItem($id: ID!) {
        removeItem(id: $id)
    }
`;

export default function ShoppingList() {
    const { loading, error, data, refetch } = useQuery(GET_ITEMS);
    const [addItem] = useMutation(ADD_ITEM);
    const [removeItem] = useMutation(REMOVE_ITEM);
    const [newItemName, setNewItemName] = useState("");

    const handleAddItem = async () => {
        if (newItemName.trim() === "") return;

        await addItem({
            variables: { name: newItemName },
        });

        setNewItemName("");
        refetch();
    };

    const handleRemoveItem = async (id: string) => {
        await removeItem({
            variables: { id },
        });

        refetch();
    };

    if (loading) return <p>loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black">
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-amber-600 text-5xl mb-6 font-semibold"
            >
                SHOPPING LIST 💰
            </motion.h1>
            <motion.div
                className="flex flex-col items-center space-y-4 w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                <motion.input
                    type="text"
                    value={newItemName}
                    onChange={(e) => setNewItemName(e.target.value)}
                    placeholder="Add New Item"
                    className=" w-11/12 md:w-1/3 border-2 border-amber-500 p-4 text-black outline-none"
                    whileFocus={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
                <motion.button
                    onClick={handleAddItem}
                    className="p-4 bg-amber-700 text-white border-2 border-amber-800 font-semibold "
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                >
                    Add Item
                </motion.button>
            </motion.div>
            <ul className="flex flex-col items-center w-full mt-6 space-y-2">
                {data.items.map((item: { id: string; name: string }) => (
                    <motion.li
                        key={item.id}
                        className="flex items-center justify-between w-11/12 md:w-1/3 bg-white p-2 text-black font-bold"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        {item.name}
                        <motion.button
                            onClick={() => handleRemoveItem(item.id)}
                            className="p-2 bg-red-500 text-white"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Remove
                        </motion.button>
                    </motion.li>
                ))}
            </ul>
            <p className="text-white text-sm py-5">Created By: <a href="https://linkedin.com/in/rhulys" className="text-amber-400">Rhulyanderson Sander</a></p>
        </div>
    );
}
