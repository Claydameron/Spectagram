import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, FlatList } from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import PostCardScreen from './PostCard';

let posts = require("../tempStories.json"),

export default class FeedScreen extends React.Component{

    renderItem = ({item: post}) => {
        return <PostCardScreen post={post} />
    }

    keyExtractor = (item,index) = index.toString();
    
    render() {
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.appTitle}>
                    <View style={styles.appIcon}>
                        <Image source={require("../assets/logo.png")} style={styles.iconImage}></Image>
                    </View>
                    <View style={styles.appTitleTextContainer}>
                        <Text style={styles.appTitleText}></Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <FlatList keyExtractor={this.keyExtractor} data={posts} renderItem={this.renderItem} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android"?StatusBar.currentHeight:RFValue(35)
    },
    appIcon: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    appTitleTextContainer: {
        flex: 0.8,
        justifyContent: 'center'
    },
    appTitleText: {
        color: 'white',
        fontSize: RFValue(28),
    },
    cardContainer: {
        flex: 0.85
    }
})