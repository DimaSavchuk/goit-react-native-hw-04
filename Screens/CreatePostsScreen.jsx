import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  CameraIcon,
  LocationIcon,
  ToTrashIcon,
} from "../components/icons/icons";
import { TextInput } from "react-native";
import { globalStyles } from "../components/styles/globalStyles";

const CreatePostsScreen = () => {
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
            {
              paddingBottom: isKeyboardShown ? 50 : 34,
            },
          ]}
        >
          <View>
            <View style={styles.photoContainer}>
              <View style={styles.photo}>
                <TouchableOpacity>
                  <CameraIcon />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.text}>Завантажте фото</Text>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Назва..."
                onFocus={() => setIsKeyboardShown(true)}
                onBlur={() => setIsKeyboardShown(false)}
              />
              <View style={[styles.input, styles.locationInputContainer]}>
                <LocationIcon />
                <TextInput
                  style={[styles.input, styles.locationInput]}
                  placeholder="Місцевість..."
                  onFocus={() => setIsKeyboardShown(true)}
                  onBlur={() => setIsKeyboardShown(false)}
                />
              </View>
            </View>
            <TouchableOpacity style={globalStyles.disabledButton}>
              <Text style={globalStyles.disabledButtonText}>Опубліковати</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }} />
          <TouchableOpacity>
            <View style={styles.bottomContainer}>
              <ToTrashIcon />
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-end",

    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },

  photoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: 240,

    backgroundColor: "#F6F6F6",

    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginBottom: 8,
  },

  photo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: 60,
    height: 60,

    backgroundColor: "white",

    borderRadius: 30,
  },

  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#BDBDBD",
    marginBottom: 32,
  },

  input: {
    height: 50,

    marginBottom: 16,

    fontFamily: "Roboto-Regular",
    fontSize: 16,

    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
  },

  locationInputContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,

    marginBottom: 32,
  },

  locationInput: {
    flex: 1,

    marginBottom: 0,

    borderBottomWidth: 0,

    fontFamily: "Roboto-Regular",
  },

  bottomContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",

    width: 70,
    height: 40,

    backgroundColor: "#F6F6F6",

    borderRadius: 20,
  },
});
