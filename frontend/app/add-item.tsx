"use client";

import { useState } from "react";

export default function AddItem({ onAdd }: { onAdd: (item: string) => void }) {
    const [itemName, setItemName] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (itemName.trim()) {
            onAdd(itemName);
            setItemName("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="Add Item"
            />
            <button type="submit">Add</button>
        </form>
    );
}
