import { View, Text } from "react-native";
import React from "react";
import BackgroundComponent from "../components/BackgroundComponent";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import { LogoutComponent } from "../components/LogoutComponent";
import { Image } from "react-native";

import USER_PHOTO from "../assets/images/userPhoto.jpg";
import { DeleteIcon } from "../components/icons/icons";
import { ScrollView } from "react-native-gesture-handler";
import { UserPostsComponent } from "../components/UserPostsComponent";

const ProfileScreen = () => {
  return (
    <BackgroundComponent>
      <View style={styles.wrapper}>
        <TouchableOpacity style={{ position: "absolute", right: 16, top: 22 }}>
          <LogoutComponent />
        </TouchableOpacity>
        <View style={styles.photoContainer}>
          <Image source={USER_PHOTO} style={styles.userPhoto} />
          <TouchableOpacity style={styles.deletePhotoButton}>
            <DeleteIcon />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>Natali Romanova</Text>
        <ScrollView>
          <UserPostsComponent
            path={require("../assets/images/forest.jpg")}
            name={"Ліс"}
            commentsNumber={10}
            country={"Ukraine"}
            likes={153}
          />
          <UserPostsComponent
            path={require("../assets/images/forest.jpg")}
            name={"Захід на Чорному морі"}
            commentsNumber={3}
            country={"Ukraine"}
            likes={321}
          />
          <UserPostsComponent
            path={require("../assets/images/forest.jpg")}
            name={"Старий будиночок у Венеції"}
            commentsNumber={5}
            country={"Ukraine"}
            likes={123}
          />
        </ScrollView>
      </View>
    </BackgroundComponent>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  wrapper: {
    alignContent: "flex-end",

    height: "80%",
    width: "100%",

    paddingLeft: 16,
    paddingRight: 16,

    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  photoContainer: {
    position: "absolute",
    top: -50,
    left: "50%",
    transform: [{ translateX: -50 }],

    width: 120,
    height: 120,

    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },

  userPhoto: {
    borderRadius: 16,
  },

  deletePhotoButton: {
    position: "absolute",
    top: 81,
    right: -12.5,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: 25,
    height: 25,

    borderColor: "#E8E8E8",
    backgroundColor: "white",
    borderRadius: 12.5,
    borderWidth: 1,
  },

  text: {
    marginTop: 92,
    marginBottom: 32,

    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35.16,
    color: "#212121",
  },
});
