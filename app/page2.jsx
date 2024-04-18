import { Link, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Page1() {
  const params = useLocalSearchParams();

  return (
    <View>
      <Text style={{ fontSize: 20, margin: 20 }}>Page 2</Text>
      <Text style={{ fontSize: 18, margin: 20 }}>
        Title:
        <Text
          style={{
            backgroundColor: "#FF0",
            paddingHorizontal: 10,
          }}
        >
          "{params.title}"
        </Text>
      </Text>
    </View>
  );
}
