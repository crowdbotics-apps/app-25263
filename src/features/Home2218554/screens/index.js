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
      <View style={styles.View_130_55}>
        <View style={styles.View_106_0}>
          <View style={styles.View_104_31}>
            <View style={styles.View_104_32} />
            <View style={styles.View_104_9}>
              <Text style={styles.Text_104_9}>Text</Text>
            </View>
            <View style={styles.View_104_10}>
              <Text style={styles.Text_104_10}>Text</Text>
            </View>
            <View style={styles.View_104_11}>
              <Text style={styles.Text_104_11}>Text</Text>
            </View>
            <View style={styles.View_104_12}>
              <Text style={styles.Text_104_12}>Text</Text>
            </View>
            <View style={styles.View_104_13}>
              <Text style={styles.Text_104_13}>Text</Text>
            </View>
            <View style={styles.View_104_14}>
              <Text style={styles.Text_104_14}>0</Text>
            </View>
            <View style={styles.View_104_15}>
              <Text style={styles.Text_104_15}>50</Text>
            </View>
            <View style={styles.View_104_16}>
              <Text style={styles.Text_104_16}>100</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b27d/906d/45142ff407c931ea510e5681b20117b7"
              }}
              style={styles.ImageBackground_104_17}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b27d/906d/45142ff407c931ea510e5681b20117b7"
              }}
              style={styles.ImageBackground_104_18}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b27d/906d/45142ff407c931ea510e5681b20117b7"
              }}
              style={styles.ImageBackground_104_19}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b27d/906d/45142ff407c931ea510e5681b20117b7"
              }}
              style={styles.ImageBackground_104_20}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b27d/906d/45142ff407c931ea510e5681b20117b7"
              }}
              style={styles.ImageBackground_104_21}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad4d/21f5/795a58a8ac8aa717d151407dadbaa5ce"
              }}
              style={styles.ImageBackground_104_22}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad4d/21f5/795a58a8ac8aa717d151407dadbaa5ce"
              }}
              style={styles.ImageBackground_104_23}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad4d/21f5/795a58a8ac8aa717d151407dadbaa5ce"
              }}
              style={styles.ImageBackground_104_24}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eea5/b7ae/696f5e77469b5986da9fe8c3ddeefb5f"
              }}
              style={styles.ImageBackground_104_25}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e5c/7434/718648f795d9a062616e95c91584eb38"
              }}
              style={styles.ImageBackground_104_26}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e5c/7434/718648f795d9a062616e95c91584eb38"
              }}
              style={styles.ImageBackground_104_27}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e5c/7434/718648f795d9a062616e95c91584eb38"
              }}
              style={styles.ImageBackground_104_28}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e5c/7434/718648f795d9a062616e95c91584eb38"
              }}
              style={styles.ImageBackground_104_29}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e5c/7434/718648f795d9a062616e95c91584eb38"
              }}
              style={styles.ImageBackground_104_30}
            />
          </View>
        </View>
        <View style={styles.View_130_53}>
          <View style={styles.View_121_14} />
          <View style={styles.View_122_23}>
            <View style={styles.View_122_0}>
              <Text style={styles.Text_122_0}>Choate Pond</Text>
            </View>
            <View style={styles.View_122_22}>
              <Text style={styles.Text_122_22}>Location:</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5db0/3f37/2456acdccab5d0465df305b906ef025f"
              }}
              style={styles.ImageBackground_122_25}
            />
            <View style={styles.View_122_3}>
              <Text style={styles.Text_122_3}>Mt Pleasant, NY</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_130_54}>
          <View style={styles.View_103_26} />
          <View style={styles.View_130_52}>
            <View style={styles.View_130_27}>
              <View style={styles.View_130_28}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a08/07e2/bf04bef27a9290c2a12fff704d1ce5e6"
                  }}
                  style={styles.ImageBackground_130_29}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/742b/300b/09b04468bf3e453fe5682ff9f6ce569d"
                  }}
                  style={styles.ImageBackground_130_34}
                />
              </View>
              <View style={styles.View_130_38}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0081/4cd7/50eaa50e6b5831a38c3fac8c6068f421"
                  }}
                  style={styles.ImageBackground_130_39}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02cc/2869/d3316de2375b10572f1781a9f1a448a9"
                  }}
                  style={styles.ImageBackground_130_41}
                />
              </View>
              <View style={styles.View_130_45}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e185/5409/7bc0722e878cd9755c9ac9398f7d4adf"
                  }}
                  style={styles.ImageBackground_130_46}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfe7/d8b8/0b8723e678d5ee5a42c8920be5ffad3a"
                  }}
                  style={styles.ImageBackground_130_49}
                />
              </View>
            </View>
            <View style={styles.View_130_26}>
              <View style={styles.View_130_2}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a08/07e2/bf04bef27a9290c2a12fff704d1ce5e6"
                  }}
                  style={styles.ImageBackground_130_3}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/742b/300b/09b04468bf3e453fe5682ff9f6ce569d"
                  }}
                  style={styles.ImageBackground_130_8}
                />
              </View>
              <View style={styles.View_130_12}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0081/4cd7/50eaa50e6b5831a38c3fac8c6068f421"
                  }}
                  style={styles.ImageBackground_130_13}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/02cc/2869/d3316de2375b10572f1781a9f1a448a9"
                  }}
                  style={styles.ImageBackground_130_15}
                />
              </View>
              <View style={styles.View_130_19}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e185/5409/7bc0722e878cd9755c9ac9398f7d4adf"
                  }}
                  style={styles.ImageBackground_130_20}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dfe7/d8b8/0b8723e678d5ee5a42c8920be5ffad3a"
                  }}
                  style={styles.ImageBackground_130_23}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_118_3}>
        <View style={styles.View_103_28} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a3a2/8bfa/8a77d22ce5216c65514c2d821f579c06"
          }}
          style={styles.ImageBackground_106_6}
        />
        <View style={styles.View_106_7}>
          <Text style={styles.Text_106_7}>Home</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/37c3/e204/93195081dd0c2beae6b5265d00802bf9"
          }}
          style={styles.ImageBackground_106_9}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eb9b/b284/bff263fad079e38450ba43929d243b4d"
          }}
          style={styles.ImageBackground_122_12}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0c95/63ee/b8d13f50ad99acfdea8793c6ab164469"
          }}
          style={styles.ImageBackground_106_14}
        />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_130_55: {
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
  View_106_0: {
    width: wp("91.38888888888889%"),
    minWidth: wp("91.38888888888889%"),
    height: 209,
    minHeight: 209,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.888888888888889%"),
    top: 100
  },
  View_104_31: {
    width: wp("91.38888888888889%"),
    minWidth: wp("91.38888888888889%"),
    height: 209,
    minHeight: 209,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  View_104_32: {
    width: wp("91.38888888888889%"),
    minWidth: wp("91.38888888888889%"),
    height: 209,
    minHeight: 209,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_104_9: {
    width: wp("5.077160199483235%"),
    minWidth: wp("5.077160199483235%"),
    minHeight: 17.198814392089844,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.93133036295573%"),
    top: 184.27957153320312
  },
  Text_104_9: {
    color: "rgba(163, 163, 163, 1)",
    fontSize: 6,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_10: {
    width: wp("5.077160199483235%"),
    minWidth: wp("5.077160199483235%"),
    minHeight: 17.198814392089844,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.432100084092884%"),
    top: 184.27957153320312
  },
  Text_104_10: {
    color: "rgba(163, 163, 163, 1)",
    fontSize: 6,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_11: {
    width: wp("5.077160199483235%"),
    minWidth: wp("5.077160199483235%"),
    minHeight: 17.198814392089844,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.186733669704864%"),
    top: 184.27957153320312
  },
  Text_104_11: {
    color: "rgba(163, 163, 163, 1)",
    fontSize: 6,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_12: {
    width: wp("5.077160199483235%"),
    minWidth: wp("5.077160199483235%"),
    minHeight: 17.198814392089844,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.94134182400174%"),
    top: 184.27957153320312
  },
  Text_104_12: {
    color: "rgba(163, 163, 163, 1)",
    fontSize: 6,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_13: {
    width: wp("5.077160199483235%"),
    minWidth: wp("5.077160199483235%"),
    minHeight: 17.198814392089844,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.69598388671875%"),
    top: 184.27957153320312
  },
  Text_104_13: {
    color: "rgba(163, 163, 163, 1)",
    fontSize: 6,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_14: {
    width: wp("4.315586354997423%"),
    minWidth: wp("4.315586354997423%"),
    minHeight: 8.599407196044922,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.615746392144096%"),
    top: 173.28379821777344
  },
  Text_104_14: {
    color: "rgba(163, 163, 163, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_15: {
    width: wp("4.315586354997423%"),
    minWidth: wp("4.315586354997423%"),
    minHeight: 8.599407196044922,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.615746392144096%"),
    top: 103.62859344482422
  },
  Text_104_15: {
    color: "rgba(163, 163, 163, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_104_16: {
    width: wp("4.315586354997423%"),
    minWidth: wp("4.315586354997423%"),
    minHeight: 17.198814392089844,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.615746392144096%"),
    top: 34.83332824707031
  },
  Text_104_16: {
    color: "rgba(163, 163, 163, 1)",
    fontSize: 8,
    fontFamily: "Roboto-Regular",
    textAlign: "right",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_104_17: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: 138.45046997070312,
    minHeight: 138.45046997070312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.46990966796875%"),
    top: 39.133033752441406
  },
  ImageBackground_104_18: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: 138.45046997070312,
    minHeight: 138.45046997070312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.970670912000866%"),
    top: 39.133033752441406
  },
  ImageBackground_104_19: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: 138.45046997070312,
    minHeight: 138.45046997070312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.72531297471788%"),
    top: 39.133033752441406
  },
  ImageBackground_104_20: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: 138.45046997070312,
    minHeight: 138.45046997070312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.47994656032986%"),
    top: 39.133033752441406
  },
  ImageBackground_104_21: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: 138.45046997070312,
    minHeight: 138.45046997070312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.23457166883681%"),
    top: 39.133033752441406
  },
  ImageBackground_104_22: {
    width: wp("66.51079813639323%"),
    minWidth: wp("66.51079813639323%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.46990966796875%"),
    top: 177.58349609375
  },
  ImageBackground_104_23: {
    width: wp("66.51079813639323%"),
    minWidth: wp("66.51079813639323%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.46990966796875%"),
    top: 107.92829132080078
  },
  ImageBackground_104_24: {
    width: wp("66.51079813639323%"),
    minWidth: wp("66.51079813639323%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.46990966796875%"),
    top: 39.133033752441406
  },
  ImageBackground_104_25: {
    width: wp("66.51079813639323%"),
    minWidth: wp("66.51079813639323%"),
    height: 106.63265228271484,
    minHeight: 106.63265228271484,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.46990966796875%"),
    top: 64.93125915527344
  },
  ImageBackground_104_26: {
    width: wp("2.030864159266154%"),
    minWidth: wp("2.030864159266154%"),
    height: 6.879525661468506,
    minHeight: 6.879525661468506,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.454471164279514%"),
    top: 61.491493225097656
  },
  ImageBackground_104_27: {
    width: wp("2.030864159266154%"),
    minWidth: wp("2.030864159266154%"),
    height: 6.879525661468506,
    minHeight: 6.879525661468506,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.955249362521702%"),
    top: 165.54434204101562
  },
  ImageBackground_104_28: {
    width: wp("2.030864159266154%"),
    minWidth: wp("2.030864159266154%"),
    height: 6.879525661468506,
    minHeight: 6.879525661468506,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.709865993923614%"),
    top: 138.88616943359375
  },
  ImageBackground_104_29: {
    width: wp("2.030864159266154%"),
    minWidth: wp("2.030864159266154%"),
    height: 6.879525661468506,
    minHeight: 6.879525661468506,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.21065266927084%"),
    top: 76.97042846679688
  },
  ImageBackground_104_30: {
    width: wp("2.030864159266154%"),
    minWidth: wp("2.030864159266154%"),
    height: 6.879525661468506,
    minHeight: 6.879525661468506,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79.96527777777777%"),
    top: 168.12416076660156
  },
  View_130_53: {
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
  View_121_14: {
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
  View_122_23: {
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
  View_122_0: {
    width: wp("38.611111111111114%"),
    minWidth: wp("38.611111111111114%"),
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.666666666666668%"),
    top: 7
  },
  Text_122_0: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_122_22: {
    width: wp("28.055555555555557%"),
    minWidth: wp("28.055555555555557%"),
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 7
  },
  Text_122_22: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_122_25: {
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
  View_122_3: {
    width: wp("35.55555555555556%"),
    minWidth: wp("35.55555555555556%"),
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2777777777777781%"),
    top: 39
  },
  Text_122_3: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_130_54: {
    width: wp("91.38888888888889%"),
    minWidth: wp("91.38888888888889%"),
    height: 466,
    minHeight: 466,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.888888888888889%"),
    top: 326
  },
  View_103_26: {
    width: wp("91.38888888888889%"),
    minWidth: wp("91.38888888888889%"),
    height: 466,
    minHeight: 466,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_130_52: {
    width: wp("47.826851738823784%"),
    minWidth: wp("47.826851738823784%"),
    height: 334.9054870605469,
    minHeight: 334.9054870605469,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.794443766276043%"),
    top: 47.112091064453125
  },
  View_130_27: {
    width: wp("47.21758948432075%"),
    minWidth: wp("47.21758948432075%"),
    height: 149.5296630859375,
    minHeight: 149.5296630859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 185.37582397460938
  },
  View_130_28: {
    width: wp("47.21758948432075%"),
    minWidth: wp("47.21758948432075%"),
    height: 24.580219268798828,
    minHeight: 24.580219268798828,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_130_29: {
    width: wp("45.9990734524197%"),
    height: 8.19340705871582,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_130_34: {
    width: wp("20.410183800591362%"),
    height: 8.193405151367188,
    top: 12.29010009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_130_38: {
    width: wp("28.025925954182945%"),
    minWidth: wp("28.025925954182945%"),
    height: 24.580219268798828,
    minHeight: 24.580219268798828,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 62.4747314453125,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_130_39: {
    width: wp("16.14537027147081%"),
    height: 8.19340705871582,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_130_41: {
    width: wp("26.807407803005646%"),
    height: 8.193405151367188,
    top: 12.29010009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_130_45: {
    width: wp("36.86018625895182%"),
    minWidth: wp("36.86018625895182%"),
    height: 24.580219268798828,
    minHeight: 24.580219268798828,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 124.949462890625,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_130_46: {
    width: wp("33.20463180541992%"),
    height: 8.19340705871582,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_130_49: {
    width: wp("34.42314995659722%"),
    height: 8.193405151367188,
    top: 12.29010009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_130_26: {
    width: wp("47.21758948432075%"),
    minWidth: wp("47.21758948432075%"),
    height: 149.5296630859375,
    minHeight: 149.5296630859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6092664930555536%"),
    top: 0
  },
  View_130_2: {
    width: wp("47.21758948432075%"),
    minWidth: wp("47.21758948432075%"),
    height: 24.580219268798828,
    minHeight: 24.580219268798828,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_130_3: {
    width: wp("45.9990734524197%"),
    height: 8.19340705871582,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_130_8: {
    width: wp("20.410183800591362%"),
    height: 8.193405151367188,
    top: 12.290115356445312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_130_12: {
    width: wp("28.025925954182945%"),
    minWidth: wp("28.025925954182945%"),
    height: 24.580219268798828,
    minHeight: 24.580219268798828,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 62.4747314453125,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_130_13: {
    width: wp("16.14537027147081%"),
    height: 8.19340705871582,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_130_15: {
    width: wp("26.807407803005646%"),
    height: 8.193405151367188,
    top: 12.290115356445312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_130_19: {
    width: wp("36.86018625895182%"),
    minWidth: wp("36.86018625895182%"),
    height: 24.580219268798828,
    minHeight: 24.580219268798828,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 124.94943237304688,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_130_20: {
    width: wp("33.20463180541992%"),
    height: 8.19340705871582,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_130_23: {
    width: wp("34.42314995659722%"),
    height: 8.193405151367188,
    top: 12.29010009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_118_3: {
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
  View_103_28: {
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
  ImageBackground_106_6: {
    width: wp("5%"),
    height: 12,
    top: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.833333333333333%")
  },
  View_106_7: {
    width: wp("13.61111111111111%"),
    minWidth: wp("13.61111111111111%"),
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.055555555555557%"),
    top: 22
  },
  Text_106_7: {
    color: "rgba(97, 97, 97, 1)",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_106_9: {
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
  ImageBackground_122_12: {
    width: wp("5%"),
    height: 18,
    top: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.16666666666667%")
  },
  ImageBackground_106_14: {
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
