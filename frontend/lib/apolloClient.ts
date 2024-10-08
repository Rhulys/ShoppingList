import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

let apolloClient : ApolloClient<any>

const createApolloClient = () => {
    return new ApolloClient({
        link: new HttpLink({
            uri: 'http://localhost:4000/graphql',
            credentials: 'same-origin'
        }),
        cache:  new InMemoryCache
    })
}

export const initializeApollo = () => {
    if (!apolloClient) {
        apolloClient = createApolloClient();
    }
    return apolloClient;
}