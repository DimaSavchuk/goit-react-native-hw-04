import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

import { ToBackIcon } from "./icons/icons";

export const ToBackComponent = () => {
  const navigation = useNavigation();

  const handleTurnBack = () => {
    navigation.goBack();
  };

  return (
    <TouchableOpacity onPress={handleTurnBack}>
      <ToBackIcon style={{ marginLeft: 16 }} />
    </TouchableOpacity>
  );
};
