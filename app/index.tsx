import { Pressable, Text, View } from "react-native";

export default function Home() {
	return (
		<>
			<View className="bg-red-500 pt-safe justify-center items-center">
				<Text className="text-white">Header</Text>
			</View>
			<View className="flex-1 bg-blue-500 justify-center items-center px-4">
				<Text>Home</Text>
				<Pressable className={styles.btnPrimary}>
					<Text className={styles.btnPrimaryText}>Pressable</Text>
				</Pressable>
				<Pressable className={styles.btnSecondary}>
					<Text className={styles.btnSecondaryText}>Pressable</Text>
				</Pressable>
			</View>
		</>
	);
}

const styles = {
	btnPrimary:
		"group bg-slate-400 w-full h-14 justify-center items-center transition-all duration-[200ms] active:opacity-80  active:bg-slate-500 active:scale-95",
	btnPrimaryText: "group-active:text-red-500 transition-all duration-[200ms]",
	btnSecondary:
		"group bg-blue-700 w-full h-14 justify-center items-center transition-all duration-[200ms] active:opacity-80  active:bg-blue-800 active:scale-95",
	btnSecondaryText:
		"text-white group-active:text-black transition-all duration-[200ms]",
};
