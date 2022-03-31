import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CreateScreen extends React.Component{
    render() {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Create your story!</Text>
            </View>
        )
    }
}