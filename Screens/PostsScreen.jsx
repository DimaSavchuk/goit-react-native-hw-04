import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { globalStyles } from "../components/styles/globalStyles";

import USER_PHOTO from "../assets/images/userPhoto.jpg";
import PostComponent from "../components/PostComponent";

import IMG from "../assets/images/forest.jpg";
import { Image } from "react-native";

const PostsScreen = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={[globalStyles.container, styles.post]}>
        <View style={styles.profile}>
          <View style={styles.userPhoto}>
            <Image source={USER_PHOTO} style={{ width: 60, height: 60 }} />
          </View>
          <View>
            <Text style={styles.name}>Natali Romanova</Text>
            <Text style={styles.email}>email@example.com</Text>
          </View>
        </View>
        <PostComponent
          path={IMG}
          name={"Ліс"}
          commentsNumber={0}
          country={"Ivano-Frankivs'k Region, Ukraine"}
        />
        <PostComponent
          path={IMG}
          name={"Ліс"}
          commentsNumber={0}
          country={"Ivano-Frankivs'k Region, Ukraine"}
        />
        <PostComponent
          path={IMG}
          name={"Ліс"}
          commentsNumber={0}
          country={"Ivano-Frankivs'k Region, Ukraine"}
        />
      </View>
    </ScrollView>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  post: {
    display: "flex",
    flexDirection: "column",

    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },

  profile: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    marginBottom: 32,
  },

  userPhoto: {
    borderRadius: 16,
    backgroundColor: "#ffffff",
  },

  name: {
    fontFamily: "Roboto-Bold",
    lineHeight: 15.23,
    fontSize: 13,
  },

  email: {
    fontFamily: "Roboto-Regular",
    lineHeight: 12.89,
    fontSize: 11,
    color: "#212121CC",
  },
});
