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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b03f/e66c/2a57f65e602f022617fa88f2d482caff"
        }}
        style={styles.ImageBackground_121_4}
      />
      <View style={styles.View_118_17}>
        <View style={styles.View_118_18} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3a2/8bfa/8a77d22ce5216c65514c2d821f579c06"
          }}
          style={styles.ImageBackground_118_19}
        />
        <View style={styles.View_118_20}>
          <Text style={styles.Text_118_20}>Search Google Maps</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/761e/95a5/db36222975357e97a73667b5004f67a2"
          }}
          style={styles.ImageBackground_118_21}
        />
        <View style={styles.View_121_10}>
          <View style={styles.View_121_5} />
          <View style={styles.View_121_7}>
            <Text style={styles.Text_121_7}>Lake</Text>
          </View>
          <View style={styles.View_121_6}>
            <Text style={styles.Text_121_6}>Choate Pond</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7385/7c95/3ea64dc1dc3a6a1063fff45c18e28f1e"
            }}
            style={styles.ImageBackground_121_8}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f60/06fb/227c2bc38e27da2293d541543a69b906"
            }}
            style={styles.ImageBackground_121_13}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/627d/8dc1/931576632e70e954086103f1028c49a3"
        }}
        style={styles.ImageBackground_118_24}
      />
      <View style={styles.View_118_28} />
      <View style={styles.View_122_18}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69de/1d41/9643c23d904487a99aebe435a6a2487f"
          }}
          style={styles.ImageBackground_122_17}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ccea/21d6/e91a52999915bff55be21f5094a33013"
          }}
          style={styles.ImageBackground_122_15}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d2e/1c67/b03c6ea7be944334f80e6ba54245b44c"
        }}
        style={styles.ImageBackground_122_21}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_121_4: {
    width: wp("226.94444444444443%"),
    minWidth: wp("226.94444444444443%"),
    height: 887,
    minHeight: 887,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-63.61111111111111%"),
    top: -52,
    resizeMode: "cover"
  },
  View_118_17: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 337,
    minHeight: 337,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_118_18: {
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
  ImageBackground_118_19: {
    width: wp("5%"),
    height: 12,
    top: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.833333333333333%")
  },
  View_118_20: {
    width: wp("46.111111111111114%"),
    minWidth: wp("46.111111111111114%"),
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.944444444444446%"),
    top: 23
  },
  Text_118_20: {
    color: "rgba(192, 192, 192, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_118_21: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.33333333333334%"),
    top: 17
  },
  View_121_10: {
    width: wp("37.5%"),
    minWidth: wp("37.5%"),
    height: 81,
    minHeight: 81,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.22222222222222%"),
    top: 256
  },
  View_121_5: {
    width: wp("37.5%"),
    minWidth: wp("37.5%"),
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(212, 242, 255, 1)",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_121_7: {
    width: wp("10.555555555555555%"),
    minWidth: wp("10.555555555555555%"),
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6111111111111143%"),
    top: 28
  },
  Text_121_7: {
    color: "rgba(69, 69, 69, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_121_6: {
    width: wp("24.166666666666668%"),
    minWidth: wp("24.166666666666668%"),
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.6111111111111143%"),
    top: 13
  },
  Text_121_6: {
    color: "rgba(69, 69, 69, 1)",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_121_8: {
    width: wp("6.495190726386177%"),
    minWidth: wp("6.495190726386177%"),
    height: 22.5,
    minHeight: 22.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.027776718139648%"),
    top: 58.5
  },
  ImageBackground_121_13: {
    width: wp("6.111111111111111%"),
    height: 15,
    top: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.777777777777786%")
  },
  ImageBackground_118_24: {
    width: wp("4.858333269755046%"),
    height: 17.489999771118164,
    top: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.05555555555556%")
  },
  View_118_28: {
    width: wp("97.22222222222221%"),
    minWidth: wp("97.22222222222221%"),
    height: 47,
    minHeight: 47,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3888888888888888%"),
    top: 4,
    backgroundColor: "rgba(196, 196, 196, 1)",
    borderColor: "rgba(203, 203, 203, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  View_122_18: {
    width: wp("8.61111111111111%"),
    minWidth: wp("8.61111111111111%"),
    height: 31,
    minHeight: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.83333333333333%"),
    top: 598
  },
  ImageBackground_122_17: {
    width: wp("8.61111111111111%"),
    minWidth: wp("8.61111111111111%"),
    height: 31,
    minHeight: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  ImageBackground_122_15: {
    width: wp("3.3333333333333335%"),
    height: 7.409999847412109,
    top: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.500000000000007%")
  },
  ImageBackground_122_21: {
    width: wp("5.555555555555555%"),
    height: 20,
    top: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.05555555555556%")
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
