import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <WebView
        source={{ uri: "https://chomibinine.github.io/sajaquiz/" }} // <- 보여줄 웹앱 주소
        javaScriptEnabled
        domStorageEnabled
        setSupportMultipleWindows={false}
        allowsBackForwardNavigationGestures
        mixedContentMode="always"
        originWhitelist={["*"]}
        onHttpError={e => console.log("HTTP error", e.nativeEvent.statusCode)}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
