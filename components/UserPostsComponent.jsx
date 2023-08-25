import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import {
  AddCommentIcon,
  LikeIcon,
  LocationIcon,
} from "../components/icons/icons";
import { useNavigation } from "@react-navigation/native";

export const UserPostsComponent = ({
  path,
  name,
  country,
  commentsNumber,
  likes,
}) => {
  const navigation = useNavigation();

  const handleCommentsRedirect = (path) => {
    navigation.navigate("Comments", { path: path });
  };

  return (
    <View style={{ marginBottom: 32 }}>
      <View style={{ marginBottom: 8 }}>
        <Image
          source={path}
          resizeMode={"cover"}
          style={{ width: "100%", height: 240, borderRadius: 8 }}
        />
      </View>
      <Text style={styles.name}>{name}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", gap: 24 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            <TouchableOpacity onPress={() => handleCommentsRedirect(path)}>
              <AddCommentIcon fill="#FF6C00" stroke="#FF6C00" />
            </TouchableOpacity>

            <Text
              style={[
                styles.text,
                {
                  color: "#212121",
                },
              ]}
            >
              {commentsNumber}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            <LikeIcon />
            <Text
              style={[
                styles.text,
                {
                  color: "#212121",
                },
              ]}
            >
              {likes}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
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

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 18.75,
  },

  name: {
    marginBottom: 8,

    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#212121",
  },
});
