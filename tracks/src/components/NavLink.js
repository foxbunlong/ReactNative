import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";

import Spacer from "./Spacer";

// To access navigation prop, we can use:
// import { withNavigation } from "react-navigation";

const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});

const NavLink = ({ title, callback }) => {
  return (
    <TouchableOpacity onPress={callback}>
      <Spacer>
        <Text style={styles.link}>{title}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

export default NavLink;
// export default withNavigation(NavLink);
