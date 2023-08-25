import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native";

const CommentComponent = ({
  img,
  direction = "row",
  text,
  textAlign = "right",
  date,
}) => {
  return (
    <View style={[{ flexDirection: direction }, styles.containerComment]}>
      <Image source={img} style={styles.userIcon} />
      <View style={styles.containerData}>
        <Text style={styles.text}>{text}</Text>
        <Text style={[{ textAlign: textAlign }, styles.date]}>{date}</Text>
      </View>
    </View>
  );
};

export default CommentComponent;

const styles = StyleSheet.create({
  containerComment: {
    gap: 16,
    marginBottom: 24,
  },
  containerData: {
    flexShrink: 1,

    width: "100%",

    padding: 16,

    backgroundColor: "#00000008",

    borderTopLeftRadius: 0,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },

  userIcon: {
    width: 28,
    height: 28,
    borderRadius: 28,
  },
  text: {
    marginBottom: 8,

    color: "#212121",
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    lineHeight: 18,
  },

  date: {
    color: "#BDBDBD",
    fontFamily: "Roboto-Regular",
    fontSize: 10,
    lineHeight: 11.72,
  },
});
