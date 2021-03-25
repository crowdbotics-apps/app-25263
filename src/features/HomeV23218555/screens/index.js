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
      <View style={styles.View_146_3}>
        <View style={styles.View_146_29}>
          <View style={styles.View_146_30} />
          <View style={styles.View_146_31}>
            <View style={styles.View_146_32}>
              <Text style={styles.Text_146_32}>Choate Pond</Text>
            </View>
            <View style={styles.View_146_33}>
              <Text style={styles.Text_146_33}>Location:</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5db0/3f37/2456acdccab5d0465df305b906ef025f"
              }}
              style={styles.ImageBackground_146_34}
            />
            <View style={styles.View_146_35}>
              <Text style={styles.Text_146_35}>Mt Pleasant, NY</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_146_89}>
        <View style={styles.View_146_90} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3a2/8bfa/8a77d22ce5216c65514c2d821f579c06"
          }}
          style={styles.ImageBackground_146_91}
        />
        <View style={styles.View_146_92}>
          <Text style={styles.Text_146_92}>Home</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37c3/e204/93195081dd0c2beae6b5265d00802bf9"
          }}
          style={styles.ImageBackground_146_93}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb9b/b284/bff263fad079e38450ba43929d243b4d"
          }}
          style={styles.ImageBackground_146_94}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c95/63ee/b8d13f50ad99acfdea8793c6ab164469"
          }}
          style={styles.ImageBackground_146_95}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_146_3: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 584,
    minHeight: 584,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 55,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_146_29: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 82,
    minHeight: 82,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_146_30: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 82,
    minHeight: 82,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_146_31: {
    width: wp("94.16666666666667%"),
    minWidth: wp("94.16666666666667%"),
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6111111111111107%"),
    top: 15
  },
  View_146_32: {
    width: wp("38.611111111111114%"),
    minWidth: wp("38.611111111111114%"),
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.666666666666668%"),
    top: 7
  },
  Text_146_32: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_33: {
    width: wp("28.055555555555557%"),
    minWidth: wp("28.055555555555557%"),
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 7
  },
  Text_146_33: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_146_34: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: 53,
    minHeight: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.16666666666667%"),
    top: 0,
    resizeMode: "cover",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_146_35: {
    width: wp("35.55555555555556%"),
    minWidth: wp("35.55555555555556%"),
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2777777777777781%"),
    top: 39
  },
  Text_146_35: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_146_89: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 55,
    minHeight: 55,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_146_90: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 55,
    minHeight: 55,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_146_91: {
    width: wp("5%"),
    height: 12,
    top: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.833333333333333%")
  },
  View_146_92: {
    width: wp("13.61111111111111%"),
    minWidth: wp("13.61111111111111%"),
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%"),
    top: 22
  },
  Text_146_92: {
    color: "rgba(97, 97, 97, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_146_93: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.22222222222222%"),
    top: 11
  },
  ImageBackground_146_94: {
    width: wp("5%"),
    height: 18,
    top: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.16666666666667%")
  },
  ImageBackground_146_95: {
    width: wp("4.444444444444445%"),
    height: 19.5,
    top: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77.77777777777779%")
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
