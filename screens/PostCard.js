import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  FlatList,
} from 'react-native';

export default class PostCardScreen extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <View> style={styles.cardContainer}>
          <View style={authorContainer}>
            <View style={authorImageContainer}>
              <Image source={require('../assests/profile_img.png')} style={styles.profileImage}></Image>
            </View>
            <View style={styles.authorNameContainer}>
              <Text style={styles.authorNameText}>{this.props.post.author}</Text>
            </View>
          </View>
          <Image source={require("../assets/post.jpeg")} style={styles.postImage} />
          <View style={styles.captionContainer}>
            <Text style={styles.captionText}>{this.props.post.caption}</Text>
          </View>
          <View style={styles.actionContainer}>
            <View>
              <Ionicons name={"heart"} size={RFValue(30)} color={'white'} />
              <Text style={styles.likeText}>12k</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}