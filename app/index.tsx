import { Text, View } from "react-native";

export default function Home() {
	return (
		<>
			<View className="bg-black pt-safe justify-center items-center">
				<Text className="text-white">Header</Text>
			</View>
			<View className="flex-1 bg-red-500 justify-center items-center">
				<Text>Home</Text>
			</View>
		</>
	);
}
