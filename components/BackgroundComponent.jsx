import React from "react";

import BACK_GROUND from "../assets/images/photoBG.png";
import { ImageBackground } from "react-native";
import { globalStyles } from "./styles/globalStyles";

const BackgroundComponent = ({ children }) => {
  return (
    <ImageBackground
      source={BACK_GROUND}
      resizeMode="cover"
      style={globalStyles.image}
    >
      {children}
    </ImageBackground>
  );
};

export default BackgroundComponent;
