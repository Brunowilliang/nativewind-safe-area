import "../global.css";
import { View } from "react-native";
import { Stack } from "expo-router";
import {
	initialWindowMetrics,
	SafeAreaProvider,
} from "react-native-safe-area-context";

// import { useSafeAreaEnv } from "nativewind";
import { useSafeAreaEnv } from "react-native-css-interop/dist/runtime/api";

export default function Layout() {
	return (
		<SafeAreaProvider initialMetrics={initialWindowMetrics}>
			<MyComp />
		</SafeAreaProvider>
	);
}

function MyComp() {
	return (
		<View style={[{ flex: 1 }, useSafeAreaEnv()]}>
			<Stack screenOptions={{ headerShown: false }} />
		</View>
	);
}
