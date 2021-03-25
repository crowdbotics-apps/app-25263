import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
import { widthPercentageToDP as wp } from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3e9/266b/8248901cf974d59b8bafe80ba7e5f21e"
        }}
        style={styles.ImageBackground_103_5}
      />
      <View style={styles.View_103_1}>
        <Text style={styles.Text_103_1}>BlueCoLab</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_103_5: {
    width: wp("18.333333333333332%"),
    height: 91.07707214355469,
    top: 216,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.833333333333336%")
  },
  View_103_1: {
    width: wp("66.11111111111111%"),
    minWidth: wp("66.11111111111111%"),
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.944444444444446%"),
    top: 136
  },
  Text_103_1: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 38,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 640 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
