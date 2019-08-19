import React, {Fragment} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Button,
    StatusBar,
} from 'react-native';
import ApolloClient from 'apollo-boost';
import {gql} from 'apollo-boost';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
});
const App = () => {
    return (
        <Fragment>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView>
                <Button title={'test'} onPress={testClick}/>

            </SafeAreaView>
        </Fragment>
    );
};
const getHello = gql`
    {
        hello
    }
`;
const testClick = async () => {
   // console.log('yeah');
    let {data,loading,errors} = await client.query({query: getHello});
    console.log(data,loading,errors);

};
export default App;
