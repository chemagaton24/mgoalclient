import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

interface GraphqlProps {
    children: React.ReactNode
}

const client = new ApolloClient({
    // uri: 'http://localhost:4000/',
    uri: 'https://pure-dawn-15287.herokuapp.com/',
    cache: new InMemoryCache()
});

const Index = (props: GraphqlProps) => {
    const { children } = props

    return (
        <ApolloProvider client={client}>{children}</ApolloProvider>
    )
}

export default Index