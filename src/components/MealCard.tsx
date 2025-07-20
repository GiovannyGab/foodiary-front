import { Text, TouchableOpacity, View } from "react-native";

export function MealCard() {
  return (
    <TouchableOpacity>
      <Text>Hoje, 12:25</Text>

      <View className="mt-2 px-5 py-5 flex-row border-gray-400 rounded-lg border">
        <View className="size-12 bg-gray-200 rounded-full items-center justify-center">
          <Text>a</Text>
        </View>
        <View>
          <Text>Cafe</Text>
          <Text>Pão</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
