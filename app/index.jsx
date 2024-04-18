import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function Page1() {
  return (
    <View>
      <Text style={{ fontSize: 20, margin: 20 }}>Page 1</Text>
      <ul>
        <li>
          <Link
            style={{
              textDecorationLine: "underline",
              color: "#00F",
              marginBottom: 5,
            }}
            href={{ pathname: "page2", params: { title: "Test title 1" } }}
          >
            Go to "/page2?title=Test title 1"
          </Link>
        </li>
        <li>
          <Link
            style={{
              textDecorationLine: "underline",
              color: "#00F",
              marginBottom: 5,
            }}
            href={{
              pathname: "page2",
              params: { title: "Test title 2 (With brackets)" },
            }}
          >
            Go to "/page2?title=Test title 2 (With brackets)"
          </Link>
        </li>
        <li>
          <Link
            style={{
              textDecorationLine: "underline",
              color: "#00F",
              marginBottom: 5,
            }}
            href="/page2?title=Test title 3 (With brackets)"
          >
            Go to "/page2?title=Test title 3 (With brackets)"
          </Link>
        </li>
      </ul>
    </View>
  );
}
