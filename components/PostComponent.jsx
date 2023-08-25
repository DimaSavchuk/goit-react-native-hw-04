import { View, Text, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { AddCommentIcon, LocationIcon } from "./icons/icons";

const PostComponent = ({ path, name, country, commentsNumber }) => {
  return (
    <View style={{ marginBottom: 32 }}>
      <View style={{ marginBottom: 8 }}>
        <Image source={path} resizeMode="cover" style={styles.image} />
      </View>
      <Text style={styles.nameText}>{name}</Text>
      <View style={styles.aboutContainer}>
        <View style={styles.aboutLeftContainer}>
          <AddCommentIcon />
          <Text style={[styles.text, { color: "#BDBDBD" }]}>
            {commentsNumber}
          </Text>
        </View>
        <View style={styles.aboutRightContainer}>
          <LocationIcon />
          <Text
            style={[
              styles.text,
              {
                color: "#212121",
                textDecorationLine: "underline",
              },
            ]}
          >
            {country}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PostComponent;

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 18.75,
  },

  nameText: {
    marginBottom: 8,
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#212121",
  },

  image: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },

  aboutContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  aboutLeftContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  aboutRightContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
