"use client";

import { ApolloProvider } from "@apollo/client";
import { initializeApollo } from "../lib/apolloClient";
import "./globals.css";

const client = initializeApollo();

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body>
                <ApolloProvider client={client}>{children}</ApolloProvider>
            </body>
        </html>
    );
}