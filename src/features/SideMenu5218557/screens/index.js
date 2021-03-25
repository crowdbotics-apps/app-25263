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
      <View style={styles.View_106_20} />
      <View style={styles.View_114_0}>
        <Text style={styles.Text_114_0}>BlueCoLab</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3790/00c0/1c2300263e926d9c1938a99c9c46fa48"
        }}
        style={styles.ImageBackground_114_8}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e1a5/31b5/86b9eea1573f4ba9020e1ab51769068c"
        }}
        style={styles.ImageBackground_114_9}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0fd8/9d38/6d4f19b9593949522082486c525c8e67"
        }}
        style={styles.ImageBackground_114_12}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a837/336d/3278d5757fb33d906ad7174317ca4771"
        }}
        style={styles.ImageBackground_114_13}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b1ed/45f9/695e22b149653691e7f68a73e9f67e7c"
        }}
        style={styles.ImageBackground_114_16}
      />
      <View style={styles.View_122_34} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa43/cb31/08334afb84e0395ab0e6e19e3e3207b2"
        }}
        style={styles.ImageBackground_118_0}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/04ca/098e/c63186fe17a093fe8b4f506b6f9fca89"
        }}
        style={styles.ImageBackground_114_4}
      />
      <View style={styles.View_122_27}>
        <Text style={styles.Text_122_27}>Home</Text>
      </View>
      <View style={styles.View_122_30}>
        <Text style={styles.Text_122_30}>Account</Text>
      </View>
      <View style={styles.View_122_31}>
        <Text style={styles.Text_122_31}>Settings</Text>
      </View>
      <View style={styles.View_122_32}>
        <Text style={styles.Text_122_32}>About Us</Text>
      </View>
      <View style={styles.View_122_33}>
        <Text style={styles.Text_122_33}>Contact Us</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_106_20: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 640,
    minHeight: 640,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 0
  },
  View_114_0: {
    width: wp("65.4275092936803%"),
    minWidth: wp("65.4275092936803%"),
    minHeight: 42,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.691449814126393%"),
    top: 19
  },
  Text_114_0: {
    color: "rgba(13, 168, 255, 1)",
    fontSize: 29,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_114_8: {
    width: wp("13.011152416356877%"),
    height: 36,
    top: 226,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.895910780669144%")
  },
  ImageBackground_114_9: {
    width: wp("13.011152416356877%"),
    height: 35,
    top: 163,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.895910780669144%")
  },
  ImageBackground_114_12: {
    width: wp("79.73977695167285%"),
    minWidth: wp("79.73977695167285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.806691449814126%"),
    top: 292
  },
  ImageBackground_114_13: {
    width: wp("13.011152416356877%"),
    height: 35,
    top: 399,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.895910780669144%")
  },
  ImageBackground_114_16: {
    width: wp("13.011152416356877%"),
    height: 35,
    top: 336,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.895910780669144%")
  },
  View_122_34: {
    width: wp("90.70631970260223%"),
    minWidth: wp("90.70631970260223%"),
    height: 61,
    minHeight: 61,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.717472118959108%"),
    top: 89,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  ImageBackground_118_0: {
    width: wp("6.691449814126393%"),
    height: 12,
    top: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.04089219330855%")
  },
  ImageBackground_114_4: {
    width: wp("13.011152416356877%"),
    height: 30,
    top: 105,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.895910780669144%")
  },
  View_122_27: {
    width: wp("24.1635687732342%"),
    minWidth: wp("24.1635687732342%"),
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.71375464684015%"),
    top: 115
  },
  Text_122_27: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_122_30: {
    width: wp("33.08550185873606%"),
    minWidth: wp("33.08550185873606%"),
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.71375464684015%"),
    top: 175
  },
  Text_122_30: {
    color: "rgba(97, 97, 97, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_122_31: {
    width: wp("32.71375464684015%"),
    minWidth: wp("32.71375464684015%"),
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.71375464684015%"),
    top: 239
  },
  Text_122_31: {
    color: "rgba(97, 97, 97, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_122_32: {
    width: wp("36.43122676579926%"),
    minWidth: wp("36.43122676579926%"),
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.71375464684015%"),
    top: 349
  },
  Text_122_32: {
    color: "rgba(97, 97, 97, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_122_33: {
    width: wp("43.866171003717476%"),
    minWidth: wp("43.866171003717476%"),
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.71375464684015%"),
    top: 412
  },
  Text_122_33: {
    color: "rgba(97, 97, 97, 1)",
    fontSize: 19,
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
