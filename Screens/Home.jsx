import { View, Text } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { AddIcon, GridIcon, UserIcon } from "../components/icons/icons";
import PostsScreen from "./PostsScreen";
import { LogoutComponent } from "../components/LogoutComponent";
import CreatePostsScreen from "./CreatePostsScreen";
import { ToBackComponent } from "../components/ToBackComponent";
import ProfileScreen from "./ProfileScreen";

const Home = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "Posts") {
            return (
              <View style={focused ? styles.focusedIcon : styles.icon}>
                <GridIcon stroke={focused ? "white" : "black"} />
              </View>
            );
          } else if (route.name === "CreatePosts") {
            return (
              <View style={focused ? styles.focusedIcon : styles.icon}>
                <AddIcon fill={focused ? "white" : "black"} />
              </View>
            );
          } else if (route.name === "Profile") {
            return (
              <View style={focused ? styles.focusedIcon : styles.icon}>
                <UserIcon stroke={focused ? "white" : "black"} />
              </View>
            );
          }
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 83,
          paddingTop: 9,
          paddingBottom: 22,
          paddingLeft: 82,
          paddingRight: 82,
          justifyContent: "center",
          alignItems: "flex-start",
        },
        headerShown: true,
        headerStyle: {
          borderBottomWidth: 1,
        },
      })}
    >
      <Tabs.Screen
        name={"Posts"}
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerTitleAlign: "center",
          headerRight: () => <LogoutComponent />,
          headerStyle: {
            borderBottomWidth: 1,
          },
        }}
      />

      <Tabs.Screen
        name={"CreatePosts"}
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          headerTitleAlign: "center",
          headerRight: () => <ToBackComponent />,
          headerStyle: {
            borderBottomWidth: 1,
          },
          tabBarStyle: { display: "none" },
        }}
      />

      <Tabs.Screen
        name={"Profile"}
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({
  icon: {
    justifyContent: "center",
    alignItems: "center",

    width: 40,
    height: 40,
  },

  focusedIcon: {
    justifyContent: "center",
    alignItems: "center",

    width: 70,
    height: 40,

    backgroundColor: "#FF6C00",

    borderRadius: 20,
  },
});
