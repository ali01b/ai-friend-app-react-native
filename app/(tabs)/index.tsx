import { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image as ReactImage,
  Button as ReactButton,
  Alert,
  Pressable,
  ImageBackground,
  FlatList,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import React from "react";
import Svg, { Use, Image, Path, G } from "react-native-svg";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ResponsiveGrid } from "react-native-flexible-grid";
import ToggleSwitch from "toggle-switch-react-native";
import { ModsComponent } from "@/components/ModsComponents";

export function ProfileButton(props: {
  onPress: any;
  title?: string | undefined;
}) {
  const { onPress, title = "Save" } = props;
  return (
    <Pressable
      className="border-2 border-[#1D1D1D4D] rounded-full p-1 mt-3"
      onPress={onPress}
    >
      <View className=" text-black  rounded-full flex  items-center text-center  px-2 py-2 ">
        <Text className="text-black px-2" style={{ fontFamily: "Ambit" }}>
          <Text>{title}</Text>
        </Text>
      </View>
    </Pressable>
  );
}

export function PreButton(props: { onPress: any; title?: string | undefined }) {
  const { onPress, title = "Save" } = props;
  return (
    <Pressable
      className="border-2 border-[#E71C714D] rounded-full p-1"
      onPress={onPress}
    >
      <View className="bg-[#e71c71b3] text-white  rounded-full flex flex-row items-center text-center  px-2 py-3 ">
        <Svg width="11" height="13" viewBox="0 0 11 13" fill="none">
          <Path
            d="M0.903836 6.70012L3.45817 0.467433C3.5155 0.31115 3.66427 0.20726 3.83073 0.20726H7.25505C7.52888 0.20726 7.72042 0.478131 7.62917 0.736359L6.11483 4.29044C6.02357 4.54867 6.21512 4.81954 6.48902 4.81954H9.72242C10.0635 4.81954 10.2457 5.22137 10.0209 5.47789L3.8816 12.4854C3.60496 12.8011 3.09149 12.5273 3.19965 12.1216L4.36997 7.73274C4.43715 7.48078 4.24727 7.23364 3.98653 7.23364H1.27641C1.00053 7.23364 0.80883 6.95912 0.903836 6.70012Z"
            fill="white"
          />
        </Svg>
        <Text className="text-white px-2" style={{ fontFamily: "Ambit" }}>
          <Text>{title}</Text>
        </Text>
      </View>
    </Pressable>
  );
}

export default function TabOneScreen() {
  const [loaded, error] = useFonts({
    Ambit: require("../../assets/fonts/Ambit-SemiBold.otf"),
    NeuePlakSemiBold: require("@/assets/fonts/Neue/NeuePlak-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const data = [
    { key: "Nazik ve Romantik" },
    { key: "Sert ve Tutkulu" },
    { key: "Sinirli" },
    { key: "Cinsel Keşif" },
    { key: "Oyunbaz ve Şakacı" },
    { key: "Flörtöz" },
    { key: "Heyecanlı ve Meraklı" },
    { key: "Tutkulu" },
    { key: "İhtiraslı" },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <View className=" bg-white">
            <View className=" py-7 flex flex-row justify-between mx-5 items-center">
              <Text className="bg-[#c8d0e26f] px-2 py-2 rounded-full">
                <Svg width="12" height="12" viewBox="0 0 6 10" fill="none">
                  <G opacity="0.6">
                    <Path
                      d="M4.99805 9L1.32351 5.70707C0.889558 5.31819 0.889558 4.68182 1.32351 4.29294L4.99805 1"
                      stroke="black"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </G>
                </Svg>
              </Text>

              <Text
                className=" text-base  justify-center pr-6"
                style={{ fontFamily: "Ambit" }}
              >
                Ayarlar
              </Text>
              <Text
                className=" text-base  justify-center"
                style={{ fontFamily: "Ambit" }}
              ></Text>
            </View>
            <View className="flex text-center items-center ">
              <ReactImage
                style={{ width: 120, height: 120 }}
                source={{
                  uri: "https://i.imgur.com/WQQ0pSE.png",
                }}
              />
              <Text style={{ fontFamily: "Ambit" }} className=" text-xl pt-4">
                Ferdi Akkaya
              </Text>
              <Text style={{ fontFamily: "Ambit" }}>ferdiakkaya@mama.com</Text>
              <View
                style={{ backgroundColor: "#f1f1f3" }}
                className="my-4 px-4 py-1 flex flex-row rounded-xl text-black bg-opacity-5"
              >
                <View className=" flex flex-row space-x-1 text-center items-center">
                  <Text>
                    <Svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                      <Path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.21948 14.5853L8.04637 15.4122C8.38225 15.7481 8.92669 15.7481 9.2626 15.4122L10.0894 14.5853C10.3251 14.3497 10.6441 14.218 10.9771 14.218H11.5991C12.8643 14.218 13.8903 13.192 13.8903 11.9261V7.90286C13.8903 6.63763 12.8643 5.61169 11.5991 5.61169H5.71059C4.44464 5.61169 3.4187 6.63763 3.4187 7.90286V11.9261C3.4187 13.192 4.44464 14.218 5.71059 14.218H6.33185C6.66481 14.218 6.98385 14.3497 7.21948 14.5853Z"
                        stroke="#161E2A"
                        stroke-width="1.2894"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <Path
                        d="M6.48605 5.61179V5.02638C6.48605 3.76189 7.51052 2.73816 8.7801 2.73816H14.6687C15.9331 2.73816 16.9576 3.76189 16.9576 5.02638V9.05032C16.9576 10.3199 15.9331 11.3437 14.6687 11.3437H14.0474C13.9947 11.3437 13.9427 11.3496 13.89 11.3547"
                        stroke="#161E2A"
                        stroke-width="1.2894"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <Path
                        d="M10.3033 10.013V10.0655M10.5161 10.0243C10.5161 10.1425 10.4202 10.2383 10.302 10.2383C10.1839 10.2383 10.0881 10.1425 10.0881 10.0243C10.0881 9.90605 10.1839 9.8103 10.302 9.8103C10.4202 9.8103 10.5161 9.90605 10.5161 10.0243Z"
                        stroke="#161E2A"
                        stroke-width="1.2894"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <Path
                        d="M6.77917 10.013V10.0655M6.99192 10.0243C6.99192 10.1425 6.89605 10.2383 6.77787 10.2383C6.65968 10.2383 6.56393 10.1425 6.56393 10.0243C6.56393 9.90605 6.65968 9.8103 6.77787 9.8103C6.89605 9.8103 6.99192 9.90605 6.99192 10.0243Z"
                        stroke="#161E2A"
                        stroke-width="1.2894"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </Svg>
                  </Text>
                  <Text
                    style={{ fontFamily: "Ambit" }}
                    className=" flex flex-row items-center "
                  >
                    10
                  </Text>

                  <Text
                    style={{
                      backgroundColor: "#ADADAEFF",
                      fontFamily: "Ambit",
                      width: 1,
                    }}
                    className="w-1 h-4/5 rounded-full flex flex-row justify-center items-center content-center"
                  />

                  <Svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                    <Path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.8569 6.1826V12.1605C15.8569 14.3752 14.4709 15.9374 12.2562 15.9374H5.91191C3.6972 15.9374 2.31848 14.3752 2.31848 12.1605V6.1826C2.31848 3.96787 3.70451 2.40631 5.91191 2.40631H12.2562C14.4709 2.40631 15.8569 3.96787 15.8569 6.1826Z"
                      stroke="#161E2A"
                      stroke-width="1.2894"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <Path
                      d="M6.64492 15.9359C6.15414 11.9204 11.748 9.92075 15.8563 9.67209"
                      stroke="#161E2A"
                      stroke-width="1.2894"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <Path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.20684 7.49934C8.20684 8.204 7.63573 8.77579 6.9304 8.77579C6.22577 8.77579 5.65466 8.204 5.65466 7.49934C5.65466 6.79398 6.22577 6.22287 6.9304 6.22287C7.63573 6.22287 8.20684 6.79398 8.20684 7.49934Z"
                      stroke="#161E2A"
                      stroke-width="1.2894"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </Svg>

                  <Text style={{ fontFamily: "Ambit" }} className="">
                    05
                  </Text>
                </View>
              </View>

              <View className=" py-6">
                <ImageBackground
                  resizeMode="contain"
                  source={{ uri: "https://i.imgur.com/5oI9Ze9.png" }}
                >
                  <PreButton
                    title="Premiuma Yükselt"
                    onPress={() => Alert.alert("Simple Button pressed")}
                  />
                </ImageBackground>

                <ProfileButton
                  title="Profili Düzenle"
                  onPress={() => Alert.alert("Simple Button pressed")}
                />
              </View>
            </View>
            <View className=" space-y-8">
              <View className=" pt-8 space-y-10 ">
                <Text
                  className=" text-2xl text-center"
                  style={{ fontFamily: "Ambit" }}
                >
                  Arkadaşını Ayarla
                </Text>

                <View className=" mx-5">
                  <View className="bg-[#C8D0E226] flex flex-row justify-between items-center text-center space-x-3  border-2 border-[#c8d0e269] border-opacity-5 rounded-3xl px-4 py-4">
                    <View className="flex flex-row items-center text-center space-x-3">
                      <ReactImage
                        source={{
                          uri: "https://i.imgur.com/iwjXYx5.png",
                        }}
                        style={{ width: 35, height: 35 }}
                      />
                      <Text style={{ fontFamily: "Ambit" }}>Shaedra</Text>
                    </View>
                    <Svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                      <Path
                        d="M11.2205 1.38266L6.22052 6.38266L1.22052 1.38266"
                        stroke="#3E3F4C"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </Svg>
                  </View>
                </View>
              </View>

              <View className="mx-5">
                <Text style={{ fontFamily: "Ambit" }} className=" pb-4 mx-5">
                  Cinsiyet Tercihi
                </Text>
                <View className="bg-[#C8D0E226] flex flex-row items-center text-center  border-2 border-[#c8d0e269] border-opacity-5 rounded-3xl py-4">
                  <View className=" border-r-2 border-[#c8d0e26f]  px-5 flex flex-col text-center items-center space-y-1">
                    <Svg width="13" height="21" viewBox="0 0 13 21" fill="none">
                      <Path
                        d="M7.28469 12.7591C8.87645 12.5585 10.332 11.7589 11.3549 10.523C12.3779 9.28709 12.8914 7.70779 12.7909 6.1066C12.6904 4.5054 11.9836 3.00268 10.8141 1.90433C9.6447 0.805985 8.10066 0.19458 6.49632 0.19458C4.89197 0.19458 3.34793 0.805985 2.17851 1.90433C1.00908 3.00268 0.302188 4.5054 0.201719 6.1066C0.10125 7.70779 0.614762 9.28709 1.63772 10.523C2.66068 11.7589 4.11618 12.5585 5.70794 12.7591V14.391H1.76608V15.9677H5.70794V20.1946H7.28469V15.9677H11.2266V14.391H7.28469V12.7591ZM1.76608 6.50728C1.76608 5.57172 2.04351 4.65718 2.56327 3.8793C3.08304 3.10142 3.8218 2.49513 4.68614 2.13711C5.55047 1.77909 6.50156 1.68542 7.41914 1.86793C8.33672 2.05045 9.17956 2.50096 9.8411 3.1625C10.5026 3.82403 10.9531 4.66688 11.1357 5.58445C11.3182 6.50203 11.2245 7.45312 10.8665 8.31746C10.5085 9.1818 9.90218 9.92056 9.1243 10.4403C8.34641 10.9601 7.43187 11.2375 6.49632 11.2375C5.24223 11.236 4.03992 10.7372 3.15315 9.85044C2.26638 8.96367 1.76754 7.76136 1.76608 6.50728Z"
                        fill="#FD046C"
                      />
                    </Svg>
                    <Text
                      className="text-[#FD046C]"
                      style={{ fontFamily: "Ambit" }}
                    >
                      Kadın
                    </Text>
                  </View>
                  <View className=" border-r-2 border-[#c8d0e26f] px-5 flex flex-col text-center items-center space-y-1">
                    <Svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                      <Path
                        opacity="0.4"
                        d="M12.1821 0.19458V1.85734H17.6575L11.2659 8.2498C9.92503 7.20799 8.23746 6.71643 6.54686 6.87523C4.85625 7.03402 3.28974 7.83122 2.16629 9.1045C1.04285 10.3778 0.446959 12.0314 0.499959 13.7286C0.552959 15.4258 1.25086 17.039 2.45156 18.2397C3.65226 19.4404 5.26547 20.1383 6.96269 20.1913C8.6599 20.2443 10.3135 19.6484 11.5868 18.525C12.8601 17.4015 13.6573 15.835 13.8161 14.1444C13.9749 12.4538 13.4833 10.7663 12.4415 9.42536L18.8331 3.0329V8.50836H20.4959V0.19458H12.1821ZM7.19383 18.4849C6.20725 18.4849 5.24282 18.1923 4.4225 17.6442C3.60218 17.0961 2.96282 16.317 2.58527 15.4055C2.20772 14.4941 2.10894 13.4911 2.30141 12.5235C2.49389 11.5558 2.96897 10.667 3.66659 9.96939C4.36422 9.27176 5.25304 8.79668 6.22067 8.6042C7.1883 8.41173 8.19127 8.51052 9.10276 8.88807C10.0142 9.26562 10.7933 9.90497 11.3414 10.7253C11.8895 11.5456 12.1821 12.51 12.1821 13.4966C12.1806 14.8191 11.6545 16.087 10.7194 17.0222C9.78422 17.9573 8.51633 18.4833 7.19383 18.4849Z"
                        fill="#60648B"
                      />
                    </Svg>

                    <Text
                      className="text-[#60648B]"
                      style={{ fontFamily: "Ambit" }}
                    >
                      Erkek
                    </Text>
                  </View>
                  <View className=" border-r-2 border-[#c8d0e26f] px-5 flex flex-col text-center items-center space-y-1">
                    <Svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                      <Path
                        opacity="0.4"
                        d="M14.7821 0.19458V1.62315H18.0578L13.4849 6.19529C12.624 5.54575 11.5748 5.19438 10.4963 5.19438C9.41785 5.19438 8.36871 5.54575 7.50777 6.19529L6.50634 5.19458L8.35348 3.34744L7.34348 2.33744L5.49634 4.18458L2.93491 1.62315H6.21062V0.19458H0.496338V5.90887H1.92491V2.63315L4.48634 5.19458L2.63919 7.04101L3.6492 8.05172L5.49634 6.20458L6.49705 7.20529C5.97601 7.89807 5.64462 8.71473 5.53559 9.57469C5.42657 10.4347 5.54367 11.3082 5.87534 12.1091C6.20702 12.9099 6.7418 13.6105 7.42691 14.1416C8.11202 14.6726 8.92377 15.0159 9.78205 15.1374V16.6232H6.92491V18.0517H9.78205V20.1946H11.2106V18.0517H14.0678V16.6232H11.2106V15.1374C12.0687 15.0157 12.8803 14.6724 13.5652 14.1413C14.2501 13.6102 14.7847 12.9098 15.1163 12.109C15.4479 11.3083 15.5649 10.4349 15.456 9.57508C15.347 8.71527 15.0158 7.89873 14.4949 7.20601L19.0678 2.63315V5.90887H20.4963V0.19458H14.7821ZM10.4963 13.766C9.78998 13.766 9.09948 13.5565 8.51216 13.1641C7.92484 12.7717 7.46708 12.2139 7.19677 11.5613C6.92646 10.9087 6.85573 10.1906 6.99353 9.49783C7.13134 8.80504 7.47148 8.16867 7.97096 7.6692C8.47043 7.16973 9.1068 6.82958 9.79959 6.69178C10.4924 6.55397 11.2105 6.6247 11.8631 6.89501C12.5157 7.16532 13.0734 7.62308 13.4659 8.2104C13.8583 8.79772 14.0678 9.48822 14.0678 10.1946C14.0666 11.1414 13.69 12.0492 13.0205 12.7187C12.3509 13.3882 11.4432 13.7649 10.4963 13.766Z"
                        fill="#60648B"
                      />
                    </Svg>

                    <Text
                      className="text-[#60648B]"
                      style={{ fontFamily: "Ambit" }}
                    >
                      Trans
                    </Text>
                  </View>
                  <View className=" px-6 flex flex-col text-center items-center space-y-1">
                    <Svg width="23" height="21" viewBox="0 0 23 21" fill="none">
                      <Path
                        opacity="0.4"
                        d="M10.7172 1.02475V1.85492H12.2798C13.1393 1.85492 13.8425 1.86078 13.8425 1.8686C13.8425 1.87836 12.8268 2.89996 11.5844 4.14229L9.32442 6.40231L9.06853 6.23041C8.30477 5.71668 7.50781 5.41391 6.57606 5.28109C6.2772 5.24007 5.61892 5.22444 5.31811 5.25179C3.4429 5.42759 1.76888 6.47849 0.82151 8.07046C0.30192 8.94556 0.0304056 9.86949 -0.000847947 10.8696C-0.0711683 13.1921 1.18093 15.29 3.24561 16.3097C3.81013 16.589 4.36097 16.7628 4.97627 16.8605C5.21849 16.8976 5.33569 16.9035 5.82402 16.9054C6.33385 16.9054 6.56629 16.8918 6.79288 16.8449C6.84172 16.8351 6.85148 16.8488 6.96673 17.0637C7.43553 17.9485 8.07037 18.6576 8.89077 19.2123C9.61156 19.6987 10.4046 20.0073 11.3032 20.148C11.5747 20.191 12.4341 20.2105 12.731 20.1792C14.0925 20.0366 15.2958 19.4663 16.2568 18.5091C16.7881 17.9798 17.1163 17.5188 17.4269 16.8703C18.2356 15.1767 18.1731 13.196 17.2569 11.5357C17.1437 11.3325 17.1007 11.2622 16.9444 11.0278L16.8272 10.854L19.0696 8.61154C20.3042 7.37703 21.3199 6.36715 21.3277 6.36715C21.3375 6.36715 21.3433 7.06644 21.3433 7.92005V9.47296H22.1735H23.0037V6.47458V3.4762H20.0151H17.0264V4.31614V5.15607H18.593H20.1616L17.8976 7.42L15.6357 9.68197L15.3681 9.50422C15.0692 9.30302 14.5887 9.05104 14.2527 8.92017C13.3092 8.55098 12.2427 8.42988 11.2817 8.58224L11.1254 8.60763L11.0199 8.39667C10.9066 8.17008 10.7425 7.89662 10.6039 7.69933L10.516 7.57431L12.7643 5.32601L15.0145 3.07576V4.62476V6.17181H15.8544H16.6944V3.1832V0.19458H13.7058H10.7172V1.02475ZM6.41003 6.94534C7.58985 7.10746 8.6427 7.76379 9.30488 8.75023C9.4045 8.90063 9.52561 9.10573 9.52561 9.12722C9.52561 9.13308 9.45334 9.17605 9.36544 9.22293C9.16229 9.32842 8.69153 9.64095 8.47081 9.81675C8.18757 10.0414 7.6797 10.5688 7.45897 10.8618C6.82804 11.7056 6.44519 12.6354 6.31431 13.6355C6.27329 13.9403 6.25181 14.3759 6.2772 14.3915C6.28697 14.3993 6.3065 14.5497 6.31822 14.7275C6.33189 14.9052 6.34752 15.0849 6.35338 15.1298C6.36315 15.1924 6.35924 15.2119 6.33385 15.2217C6.31627 15.2295 6.17172 15.2412 6.0135 15.247C5.14621 15.2861 4.25158 15.038 3.53666 14.5595C2.56194 13.909 1.93296 12.9441 1.722 11.7779C1.67707 11.5298 1.66145 10.9243 1.6927 10.6411C1.85288 9.18582 2.73188 7.93959 4.03671 7.31647C4.76922 6.96682 5.60916 6.834 6.41003 6.94534ZM12.6314 10.2152C14.0535 10.391 15.245 11.229 15.8857 12.5026C16.2939 13.3171 16.4209 14.2645 16.2432 15.1728C15.8642 17.1203 14.1414 18.5365 12.149 18.5365C11.225 18.5365 10.3441 18.2337 9.57444 17.6516C9.36348 17.4914 9.00016 17.1223 8.82827 16.8937C8.65833 16.6671 8.44736 16.3253 8.4669 16.3077C8.47471 16.2999 8.56457 16.2491 8.66614 16.1925C9.43771 15.7666 10.1565 15.1123 10.6625 14.3759C11.1527 13.6629 11.4829 12.8249 11.6176 11.9615C11.6704 11.6099 11.6899 10.8051 11.6508 10.477L11.6255 10.2582L11.7231 10.2465C11.7759 10.2406 11.8853 10.2348 11.9634 10.2348C12.0435 10.2348 12.104 10.227 12.104 10.2152C12.104 10.1898 12.4185 10.1898 12.6314 10.2152ZM10.0139 11.0435C10.0139 12.3268 9.44552 13.532 8.47081 14.3153C8.295 14.4579 8.01958 14.6493 7.99419 14.6493C7.97466 14.6493 7.98052 14.0653 8.002 13.8875C8.13483 12.7897 8.67395 11.8072 9.51584 11.1314C9.6975 10.9849 9.97683 10.7993 9.99832 10.813C10.0061 10.8188 10.0139 10.9223 10.0139 11.0435Z"
                        fill="#60648B"
                      />
                    </Svg>

                    <Text
                      className="text-[#60648B]"
                      style={{ fontFamily: "Ambit" }}
                    >
                      Gay
                    </Text>
                  </View>
                </View>
              </View>

              <View className="mx-5">
                <Text style={{ fontFamily: "Ambit" }} className=" pb-4 mx-5">
                  BDSM Modu
                </Text>
                <View className="bg-[#C8D0E226] flex flex-row justify-between  items-center text-center  border-2 border-[#c8d0e269] border-opacity-5 rounded-3xl px-4 py-4">
                  <View className="flex flex-row items-center text-center space-x-3">
                    <Text className=" text-xl">👄</Text>
                    <Text style={{ fontFamily: "Ambit" }}>
                      Aşağılayıcı Konuşma
                    </Text>
                  </View>
                  <Svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                    <Path
                      d="M11.2205 1.38266L6.22052 6.38266L1.22052 1.38266"
                      stroke="#3E3F4C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </Svg>
                </View>
              </View>

              <View className="mx-5">
                <Text style={{ fontFamily: "Ambit" }} className=" pb-4 mx-5">
                  Rol Yapma
                </Text>
                <View className="bg-[#C8D0E226] flex flex-row justify-between  items-center text-center  border-2 border-[#c8d0e269] border-opacity-5 rounded-3xl px-4 py-4">
                  <View className="flex flex-row items-center text-center space-x-3">
                    <Text className=" text-xl">👩🏻‍🏫</Text>
                    <Text style={{ fontFamily: "Ambit" }}>Öğretmen</Text>
                  </View>
                  <Svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                    <Path
                      d="M11.2205 1.38266L6.22052 6.38266L1.22052 1.38266"
                      stroke="#3E3F4C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </Svg>
                </View>
              </View>

              <View className="mx-5">
                <Text style={{ fontFamily: "Ambit" }} className=" pb-4 mx-5">
                  Pet Play
                </Text>
                <View className="bg-[#C8D0E226] flex flex-row justify-between  items-center text-center  border-2 border-[#c8d0e269] border-opacity-5 rounded-3xl px-4 py-4">
                  <View className="flex flex-row items-center text-center space-x-3">
                    <Text className=" text-xl">🐱</Text>
                    <Text style={{ fontFamily: "Ambit" }}>Kedi Rolü</Text>
                  </View>
                  <Svg width="12" height="7" viewBox="0 0 12 7" fill="none">
                    <Path
                      d="M11.2205 1.38266L6.22052 6.38266L1.22052 1.38266"
                      stroke="#3E3F4C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </Svg>
                </View>
              </View>
              <View className="mx-5">
                <Text style={{ fontFamily: "Ambit" }} className=" pb-4 ">
                  Cinsel Kişilik Modları
                </Text>
                <ModsComponent />
              </View>
              <View>
                <Text
                  className=" text-2xl text-center"
                  style={{ fontFamily: "Ambit" }}
                >
                  Bildirim Ayarları
                </Text>

                <View className="mx-5 my-5 space-y-3">
                  <View className="bg-[#C8D0E226] flex flex-row justify-between  items-center text-center  border-2 border-[#c8d0e269] border-opacity-5 rounded-3xl px-4 py-4">
                    <View className="flex flex-row items-center text-center space-x-2">
                      <Svg
                        width="22"
                        height="22"
                        viewBox="0 0 19 19"
                        fill="none"
                      >
                        <Path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.21948 14.5853L8.04637 15.4122C8.38225 15.7481 8.92669 15.7481 9.2626 15.4122L10.0894 14.5853C10.3251 14.3497 10.6441 14.218 10.9771 14.218H11.5991C12.8643 14.218 13.8903 13.192 13.8903 11.9261V7.90286C13.8903 6.63763 12.8643 5.61169 11.5991 5.61169H5.71059C4.44464 5.61169 3.4187 6.63763 3.4187 7.90286V11.9261C3.4187 13.192 4.44464 14.218 5.71059 14.218H6.33185C6.66481 14.218 6.98385 14.3497 7.21948 14.5853Z"
                          stroke="#161E2A"
                          stroke-width="1.2894"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M6.48605 5.61179V5.02638C6.48605 3.76189 7.51052 2.73816 8.7801 2.73816H14.6687C15.9331 2.73816 16.9576 3.76189 16.9576 5.02638V9.05032C16.9576 10.3199 15.9331 11.3437 14.6687 11.3437H14.0474C13.9947 11.3437 13.9427 11.3496 13.89 11.3547"
                          stroke="#161E2A"
                          stroke-width="1.2894"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M10.3033 10.013V10.0655M10.5161 10.0243C10.5161 10.1425 10.4202 10.2383 10.302 10.2383C10.1839 10.2383 10.0881 10.1425 10.0881 10.0243C10.0881 9.90605 10.1839 9.8103 10.302 9.8103C10.4202 9.8103 10.5161 9.90605 10.5161 10.0243Z"
                          stroke="#161E2A"
                          stroke-width="1.2894"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M6.77917 10.013V10.0655M6.99192 10.0243C6.99192 10.1425 6.89605 10.2383 6.77787 10.2383C6.65968 10.2383 6.56393 10.1425 6.56393 10.0243C6.56393 9.90605 6.65968 9.8103 6.77787 9.8103C6.89605 9.8103 6.99192 9.90605 6.99192 10.0243Z"
                          stroke="#161E2A"
                          stroke-width="1.2894"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </Svg>
                      <Text style={{ fontFamily: "Ambit" }}>Mesajlar</Text>
                    </View>
                    <ToggleSwitch
                      isOn={true}
                      onColor="#C8D0E244"
                      thumbOnStyle={{
                        backgroundColor: "#FD046C",
                      }}
                      labelStyle={{ color: "black", fontWeight: "900" }}
                      size="medium"
                    />
                  </View>
                  <View className="bg-[#C8D0E226] flex flex-row justify-between  items-center text-center  border-2 border-[#c8d0e269] border-opacity-5 rounded-3xl px-4 py-4">
                    <View className="flex flex-row items-center text-center space-x-3">
                      <Svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                      >
                        <Path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.8032 6.19938V12.1772C15.8032 14.3919 14.4172 15.9542 12.2025 15.9542H5.8582C3.64349 15.9542 2.26477 14.3919 2.26477 12.1772V6.19938C2.26477 3.98466 3.6508 2.4231 5.8582 2.4231H12.2025C14.4172 2.4231 15.8032 3.98466 15.8032 6.19938Z"
                          stroke="#161E2A"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M6.59121 15.9527C6.10043 11.9372 11.6943 9.93756 15.8026 9.6889"
                          stroke="#161E2A"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.15312 7.51609C8.15312 8.22076 7.58202 8.79254 6.87669 8.79254C6.17206 8.79254 5.60095 8.22076 5.60095 7.51609C5.60095 6.81073 6.17206 6.23962 6.87669 6.23962C7.58202 6.23962 8.15312 6.81073 8.15312 7.51609Z"
                          stroke="#161E2A"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </Svg>

                      <Text style={{ fontFamily: "Ambit" }}>Fotoğraflar</Text>
                    </View>
                    <ToggleSwitch
                      isOn={true}
                      onColor="#C8D0E244"
                      thumbOnStyle={{
                        backgroundColor: "#FD046C",
                      }}
                      labelStyle={{ color: "black", fontWeight: "900" }}
                      size="medium"
                    />
                  </View>
                  <View className="bg-[#C8D0E226] flex flex-row justify-between  items-center text-center  border-2 border-[#c8d0e269] border-opacity-5 rounded-3xl px-4 py-4">
                    <View className="flex flex-row items-center text-center space-x-2">
                      <Svg
                        width="22"
                        height="22"
                        viewBox="0 0 19 19"
                        fill="none"
                      >
                        <Path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.8569 6.1826V12.1605C15.8569 14.3752 14.4709 15.9374 12.2562 15.9374H5.91191C3.6972 15.9374 2.31848 14.3752 2.31848 12.1605V6.1826C2.31848 3.96787 3.70451 2.40631 5.91191 2.40631H12.2562C14.4709 2.40631 15.8569 3.96787 15.8569 6.1826Z"
                          stroke="#161E2A"
                          stroke-width="1.2894"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          d="M6.64492 15.9359C6.15414 11.9204 11.748 9.92075 15.8563 9.67209"
                          stroke="#161E2A"
                          stroke-width="1.2894"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <Path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.20684 7.49934C8.20684 8.204 7.63573 8.77579 6.9304 8.77579C6.22577 8.77579 5.65466 8.204 5.65466 7.49934C5.65466 6.79398 6.22577 6.22287 6.9304 6.22287C7.63573 6.22287 8.20684 6.79398 8.20684 7.49934Z"
                          stroke="#161E2A"
                          stroke-width="1.2894"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </Svg>
                      <Text style={{ fontFamily: "Ambit" }}>
                        Kıyafet Hediyeleri
                      </Text>
                    </View>
                    <ToggleSwitch
                      isOn={true}
                      onColor="#C8D0E244"
                      thumbOnStyle={{
                        backgroundColor: "#FD046C",
                      }}
                      labelStyle={{ color: "black", fontWeight: "900" }}
                      size="medium"
                    />
                  </View>
                </View>

                <View className="mx-5 my-4">
                  <View className=" flex flex-row justify-between  items-center text-center  border-2 border-[#c8d0e269] border-opacity-5 rounded-3xl px-4 py-4">
                    <View className="flex flex-row items-center text-center space-x-3">
                      <Text
                        style={{ fontFamily: "Ambit" }}
                        className=" text-xl text-[#3e3f4cac]"
                      >
                        Çıkış Yap
                      </Text>
                    </View>
                    <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
                      <Path
                        d="M10.1163 11.9384V13.6912"
                        stroke="#3E3F4C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <Path
                        d="M13.1763 19.3992V6.23061C13.1763 4.541 11.6228 3.27798 9.96727 3.62159L4.74447 4.7056C3.50717 4.96242 2.62007 6.05182 2.62007 7.31462V18.3152C2.62007 19.578 3.50717 20.6674 4.74447 20.9242L9.96727 22.0082C11.6228 22.3519 13.1763 21.0888 13.1763 19.3992Z"
                        stroke="#3E3F4C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <Path
                        d="M13.3146 19.9395H16.1668C17.5217 19.9395 18.6201 18.8419 18.6201 17.488"
                        stroke="#3E3F4C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <Path
                        d="M21.3757 12.8146H15.5073M21.3757 12.8146L19.3672 10.8149M21.3757 12.8146L19.3672 14.8149"
                        stroke="#3E3F4C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <Path
                        d="M13.3146 5.69019H16.1668C17.5217 5.69019 18.6201 6.78778 18.6201 8.14172"
                        stroke="#3E3F4C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </Svg>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
