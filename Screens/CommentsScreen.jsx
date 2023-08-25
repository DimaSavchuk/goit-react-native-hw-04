import { View } from "react-native";
import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";
import { globalStyles } from "../components/styles/globalStyles";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import CommentComponent from "../components/CommentComponent";

import USER_PHOTO from "../assets/images/userPhoto.jpg";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";

import { SendIcon } from "../components/icons/icons";

const CommentsScreen = () => {
  const route = useRoute();
  const path = route.params?.path;

  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View
          style={[
            globalStyles.container,
            styles.container,
            { paddingBottom: isKeyboardShown ? 100 : 16 },
          ]}
        >
          <View>
            <Image source={path} resizeMode="cover" style={styles.image} />
            <CommentComponent
              img={USER_PHOTO}
              text={
                "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!"
              }
              direction={"row-reverse"}
              textAlign={"left"}
              date={"09 червня, 2020 | 09:14"}
            />
            <CommentComponent
              img={USER_PHOTO}
              text={"Thank you! That was very helpful!"}
              date={"09 червня, 2020 | 09:20"}
            />
            <CommentComponent
              img={USER_PHOTO}
              text={
                "I'm glad I could be helpful. If you have any more questions or need any further assistance in photography, feel free to reach out. I'll be happy to share my knowledge! I wish you to continue improving your skills and capturing captivating photographs! Don't hesitate to ask for help anytime. Happy shooting!"
              }
              direction={"row-reverse"}
              textAlign={"left"}
              date={"09 червня, 2020 | 09:25"}
            />
          </View>
          <View>
            <TextInput
              onFocus={() => setIsKeyboardShown(true)}
              onBlur={() => setIsKeyboardShown(false)}
              style={styles.input}
              placeholder="Коментувати..."
            />
            <TouchableOpacity style={styles.sendMessageButton}>
              <SendIcon />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-end",

    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },

  image: {
    width: "100%",
    height: 240,
    borderRadius: 8,
    marginBottom: 32,
  },

  input: {
    width: "100%",
    height: 50,

    paddingLeft: 16,
    paddingRight: 16,

    fontSize: 16,
    lineHeight: 19.36,

    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 25,
  },

  sendMessageButton: {
    position: "absolute",
    top: 8,
    right: 8,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: 34,
    height: 34,

    backgroundColor: "#FF6C00",
    borderRadius: 17,
  },
});
