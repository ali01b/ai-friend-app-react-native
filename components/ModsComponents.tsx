import React from "react";
import { View, Text } from "react-native";

export function ModsComponent() {
  return (
    <View className="flex flex-col space-y-2" style={{ maxWidth: "50%" }}>
      <View className="flex-row space-x-2" style={{ maxWidth: "100%" }}>
        <Text
          className="bg-[#fd046cad] text-white px-2 py-2 rounded-xl"
          style={{ fontFamily: "Ambit" }}
        >
          Nazik Ve Romantik
        </Text>
        <Text
          className="bg-[#C8D0E226] text-[#60648B] px-2 py-2 rounded-xl border border-[#60648b48]"
          style={{ fontFamily: "Ambit" }}
        >
          Sert ve Tutkulu
        </Text>
        <Text
          className="bg-[#C8D0E226] text-[#60648B] px-2 py-2 rounded-xl border border-[#60648b48]"
          style={{ fontFamily: "Ambit" }}
        >
          Sinirli
        </Text>
      </View>
      <View className="flex-row space-x-2" style={{ maxWidth: "100%" }}>
        <Text
          className="bg-[#C8D0E226] text-[#60648B] px-2 py-2 rounded-xl border border-[#60648b48]"
          style={{ fontFamily: "Ambit" }}
        >
          Cinsel Keşif
        </Text>
        <Text
          className="bg-[#fd046cad] text-white px-2 py-2 rounded-xl"
          style={{ fontFamily: "Ambit" }}
        >
          Oyunbaz ve Şakacı
        </Text>
        <Text
          className="bg-[#C8D0E226] text-[#60648B] px-2 py-2 rounded-xl border border-[#60648b48]"
          style={{ fontFamily: "Ambit" }}
        >
          Flörtöz
        </Text>
      </View>
      <View className="flex-row space-x-2" style={{ maxWidth: "100%" }}>
        <Text
          className="bg-[#C8D0E226] text-[#60648B] px-2 py-2 rounded-xl border border-[#60648b48]"
          style={{ fontFamily: "Ambit" }}
        >
          Heyecanlı ve Meraklı
        </Text>
        <Text
          className="bg-[#C8D0E226] text-[#60648B] px-2 py-2 rounded-xl border border-[#60648b48]"
          style={{ fontFamily: "Ambit" }}
        >
          Tutkulu
        </Text>
        <Text
          className="bg-[#C8D0E226] text-[#60648B] px-2 py-2 rounded-xl border border-[#60648b48]"
          style={{ fontFamily: "Ambit" }}
        >
          İhtiraslı
        </Text>
      </View>
    </View>
  );
}
