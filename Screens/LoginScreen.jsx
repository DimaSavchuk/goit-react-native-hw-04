import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import StyledBtn from "../components/StyledBtn";
import { globalStyles } from "../components/styles/globalStyles";
import BackgroundComponent from "../components/BackgroundComponent";
import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";
import { useNavigation } from "@react-navigation/native";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Введіть правильний email")
    .required("Email є обов'язковим полем"),
  password: yup
    .string()
    .min(6, "Password повинен містити принаймні 6 символів")
    .required("Password є обов'язковим полем"),
});

const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isKeyboardShown, setIsKeyboardShown] = useState(false);

  const togglePasswordVisible = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const navigation = useNavigation();

  const handleSubmit = (values) => {
    console.log(`
    Email: ${values.email}
    Password: ${values.password}
    `);

    navigation.navigate("Home");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.container}>
        <BackgroundComponent>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
          >
            <View style={{ flex: 1, justifyContent: "flex-end" }}>
              <View
                style={{
                  ...styles.formWrapper,
                  paddingBottom: isKeyboardShown ? 10 : 78,
                  height: isKeyboardShown ? 360 : "auto",
                }}
              >
                <Text style={styles.title}>Увійти</Text>

                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({
                    handleChange,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                  }) => (
                    <SafeAreaView>
                      <TextInput
                        style={styles.input}
                        placeholder="Адреса електронної пошти"
                        value={values.email}
                        onChangeText={handleChange("email")}
                        onFocus={() => {
                          setIsKeyboardShown(true);
                        }}
                        onBlur={() => {
                          setIsKeyboardShown(false);
                        }}
                      />
                      {touched.email && errors.email && (
                        <Text style={styles.errorText}>{errors.email}</Text>
                      )}

                      <View>
                        <TextInput
                          style={styles.input}
                          placeholder="Пароль"
                          secureTextEntry={!showPassword}
                          value={values.password}
                          onChangeText={handleChange("password")}
                          onFocus={() => {
                            setIsKeyboardShown(true);
                          }}
                          onBlur={() => {
                            setIsKeyboardShown(false);
                          }}
                        />
                        <TouchableOpacity
                          style={styles.showPassword}
                          onPress={togglePasswordVisible}
                        >
                          <Text style={[styles.text, styles.showBtn]}>
                            {showPassword ? "Приховати" : "Показати"}
                          </Text>
                        </TouchableOpacity>
                        {touched.password && errors.password && (
                          <Text style={styles.errorText}>
                            {errors.password}
                          </Text>
                        )}
                      </View>

                      <StyledBtn title="Увійти" onPress={handleSubmit} />

                      <View style={styles.signInContainer}>
                        <Text style={[styles.text, styles.signInText]}>
                          Немає акаунту?{" "}
                        </Text>
                        <TouchableOpacity
                          onPress={() => navigation.navigate("Registration")}
                        >
                          <Text
                            style={[
                              styles.text,
                              styles.signInText,
                              styles.signInLink,
                            ]}
                          >
                            Зареєструватися
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </SafeAreaView>
                  )}
                </Formik>
              </View>
            </View>
          </KeyboardAvoidingView>
        </BackgroundComponent>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  formWrapper: {
    paddingTop: 32,
    paddingBottom: 110,
    paddingRight: 16,
    paddingLeft: 16,

    backgroundColor: "#ffffff",

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontSize: 30,
    fontFamily: "Roboto-Bold",
    lineHeight: 35.16,
    color: "#212121",

    textAlign: "center",

    marginBottom: 33,
  },

  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 18.75,
  },
  input: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    fontSize: 16,

    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    marginBottom: 16,
  },
  showPassword: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  showBtn: {
    color: "#1B4371",
  },
  button: {
    marginTop: 27,
    marginBottom: 16,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,

    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },

  signInContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },

  signInText: {
    color: "#1B4371",
    textAlign: "center",
  },

  signInLink: {
    textDecorationLine: "underline",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 8,
  },
});
