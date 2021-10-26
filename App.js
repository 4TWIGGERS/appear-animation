import React, { useState, useEffect } from "react";
import {
   SafeAreaView,
   View,
   Image,
   Text,
   Animated,
   Dimensions
} from "react-native";

import { TopSvg, DNA } from "./svgs";

const { height } = Dimensions.get("screen");

function App() {
   const [opacity] = useState(new Animated.Value(1));
   const [translates] = useState([
      new Animated.Value(0),
      new Animated.Value(0),
      new Animated.Value(0),
      new Animated.Value(0),
   ]);

   useEffect(() => {
      Animated.timing(opacity, {
         toValue: 0,
         duration: 3000
      }).start();

      translates.forEach((translate, index) => {
         Animated.timing(translate, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
            delay: (index + 1) * 400 + 1000
         }).start();
      });
   }, []);

   return (
      <View
         style={{
            flex: 1,
            backgroundColor: "green"
         }}
      >
         <Image
            style={{
               position: "absolute",
               height: "100%",
               width: "100%"
            }}
            source={require("./assets/background.png")}
         />
         <SafeAreaView>
            <View
               style={{
                  marginTop: 20,
                  alignItems: "center"
               }}
            >
               <Text
                  style={{
                     fontSize: 30,
                     color: "white"
                  }}
               >
                  You're Glowing
               </Text>
               <Text
                  style={{
                     fontSize: 18,
                     marginTop: 8,
                     color: "white"
                  }}
               >
                  with confidence and presence!
               </Text>
            </View>
            <View style={{ marginTop: 60, alignItems: "flex-end" }}>
               <Image
                  style={{ marginRight: 7, height: 80, width: 80 }}
                  source={require("./assets/img-upgrade.png")}
               />
               <TopSvg style={{ position: "absolute", right: 44, top: 60 }} />
            </View>

            <View style={{ alignItems: "center", marginTop: 70 }}>
               <Image
                  style={{ width: 120, height: 150 }}
                  source={require("./assets/shield.png")}
               />
               <Image
                  style={{ position: "absolute", width: 120, height: 150 }}
                  source={require("./assets/img-archetype-artist.png")}
               />
               {/* <Image
                  style={{
                     position: "absolute",
                     width: 200,
                     height: 590,
                     zIndex: -1,
                     top: -130
                  }}
                  source={require("./assets/img-helix-50opc.png")}
               /> */}
               <DNA style={{position: 'absolute', top: 60}} />
            </View>
            <Image
               style={{
                  position: "absolute",
                  left: 142,
                  top: 550,
                  width: 94,
                  height: 94
               }}
               source={require("./assets/img-focuseye-purple.png")}
            />
            <Image
               style={{ position: "absolute", left: 115, top: 410 }}
               source={require("./assets/line2.png")}
            />
            <Image
               style={{ position: "absolute", left: 105, top: 495 }}
               source={require("./assets/line2.png")}
            />
            <Image
               style={{
                  position: "absolute",
                  left: 120,
                  top: 660,
                  width: 130,
                  height: 18
               }}
               source={require("./assets/line3.png")}
            />

            <Animated.Image
               style={{
                  position: "absolute",
                  left: 25,
                  top: 405,
                  height: 31,
                  width: 90,
                  transform: [
                     {
                        translateY: translates[0].interpolate({
                           inputRange: [0, 1],
                           outputRange: [20, 0],
                           extrapolate: "clamp"
                        })
                     }
                  ],
                  opacity: translates[0]
               }}
               source={require("./assets/btn-personalmastery.png")}
            />
            <Animated.Text
               style={{
                  position: "absolute",
                  color: "#fff",
                  fontSize: 12,
                  left: 270,
                  top: 400,
                  transform: [
                     {
                        translateY: translates[0].interpolate({
                           inputRange: [0, 1],
                           outputRange: [20, 0],
                           extrapolate: "clamp"
                        })
                     }
                  ]
               }}
            >
               Your self-{"\n"}confidence is off{"\n"}the roof!
            </Animated.Text>
            <Animated.Image
               style={{
                  position: "absolute",
                  left: 20,
                  top: 490,
                  height: 31,
                  width: 90,
                  transform: [
                     {
                        translateY: translates[0].interpolate({
                           inputRange: [0, 1],
                           outputRange: [20, 0],
                           extrapolate: "clamp"
                        })
                     }
                  ],
                  opacity: translates[0]
               }}
               source={require("./assets/btn-relatedness.png")}
            />
            <Animated.Text
               style={{
                  position: "absolute",
                  textAlign: "left",
                  color: "#fff",
                  fontSize: 12,
                  left: 270,
                  top: 475,
                  transform: [
                     {
                        translateY: translates[1].interpolate({
                           inputRange: [0, 1],
                           outputRange: [20, 0],
                           extrapolate: "clamp"
                        })
                     }
                  ]
               }}
            >
               You're gaining{"\n"}presence and{"\n"}tolerance of{"\n"}
               difference.
            </Animated.Text>
            <Animated.Image
               style={{
                  position: "absolute",
                  left: 33,
                  top: 580,
                  height: 21,
                  width: 63,
                  transform: [
                     {
                        translateY: translates[2].interpolate({
                           inputRange: [0, 1],
                           outputRange: [20, 0],
                           extrapolate: "clamp"
                        })
                     }
                  ],
                  opacity: translates[2]
               }}
               source={require("./assets/btn-focus.png")}
            />
            <Animated.Text
               style={{
                  position: "absolute",
                  textAlign: "left",
                  color: "#fff",
                  fontSize: 12,
                  left: 270,
                  top: 565,
                  transform: [
                     {
                        translateY: translates[2].interpolate({
                           inputRange: [0, 1],
                           outputRange: [20, 0],
                           extrapolate: "clamp"
                        })
                     }
                  ]
               }}
            >
               Your power of{"\n"}attention is{"\n"}surging this week.
            </Animated.Text>
            <Animated.Image
               style={{
                  position: "absolute",
                  left: 33,
                  top: 660,
                  height: 21,
                  width: 81,
                  transform: [
                     {
                        translateY: translates[3].interpolate({
                           inputRange: [0, 1],
                           outputRange: [20, 0],
                           extrapolate: "clamp"
                        })
                     }
                  ],
                  opacity: translates[3]
               }}
               source={require("./assets/btn-reactivity.png")}
            />
            <Animated.Text
               style={{
                  position: "absolute",
                  textAlign: "left",
                  color: "#fff",
                  fontSize: 12,
                  left: 270,
                  top: 640,
                  transform: [
                     {
                        translateY: translates[3].interpolate({
                           inputRange: [0, 1],
                           outputRange: [20, 0],
                           extrapolate: "clamp"
                        })
                     }
                  ]
               }}
            >
               You're recovering{"\n"}much quicker{"\n"}from emotional{"\n"}
               encounters.
            </Animated.Text>
            <Animated.Image
               style={{
                  position: "absolute",
                  left: 230,
                  top: 720,
                  height: 31,
                  width: 31,
                  transform: [
                     {
                        translateY: translates[0].interpolate({
                           inputRange: [0, 1],
                           outputRange: [20, 0],
                           extrapolate: "clamp"
                        })
                     }
                  ],
                  opacity: translates[0]
               }}
               source={require("./assets/img-reddot.png")}
            />
            <Animated.Text
               style={{
                  position: "absolute",
                  textAlign: "left",
                  color: "#fff",
                  fontSize: 12,
                  left: 270,
                  top: 710,
                  transform: [
                     {
                        translateY: translates[0].interpolate({
                           inputRange: [0, 1],
                           outputRange: [20, 0],
                           extrapolate: "clamp"
                        })
                     }
                  ]
               }}
            >
               Things your{"\n"}emotional mind is{"\n"}processing
            </Animated.Text>
            <Animated.Image
               style={{
                  position: "absolute",
                  left: 210,
                  top: 750,
                  height: 31,
                  width: 31,
                  transform: [
                     {
                        translateY: translates[0].interpolate({
                           inputRange: [0, 1],
                           outputRange: [20, 0],
                           extrapolate: "clamp"
                        })
                     }
                  ],
                  opacity: translates[0]
               }}
               source={require("./assets/img-purpledot.png")}
            />

            <Animated.View
               style={{
                  width: "100%",
                  position: "absolute",
                  overflow: "hidden",
                  transform: [
                     {
                        translateY: opacity.interpolate({
                           inputRange: [0, 1],
                           outputRange: [height, 0]
                        })
                     }
                  ],
                  height: opacity.interpolate({
                     inputRange: [0, 1],
                     outputRange: ["0%", "100%"],
                     extrapolate: "clamp"
                  })
               }}
            >
               <Animated.Image
                  style={{
                     width: "100%",
                     height,
                     transform: [
                        {
                           translateY: opacity.interpolate({
                              inputRange: [0, 1],
                              outputRange: [-height, 0]
                           })
                        }
                     ]
                  }}
                  source={require("./assets/background.png")}
               />
            </Animated.View>
         </SafeAreaView>
      </View>
   );
}

export default App;
