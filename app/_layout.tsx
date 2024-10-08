import "../global.css";
import { View } from "react-native";
import { Stack } from "expo-router";
import {
	initialWindowMetrics,
	SafeAreaProvider,
} from "react-native-safe-area-context";
import { useSafeAreaEnv } from "nativewind";

export default function Layout() {
	return (
		<SafeAreaProvider initialMetrics={initialWindowMetrics}>
			<View style={[{ flex: 1 }, useSafeAreaEnv()]}>
				<Stack screenOptions={{ headerShown: false }} />
			</View>
		</SafeAreaProvider>
	);
}
