import { StatusBar } from "expo-status-bar";
import { styled } from "nativewind";
import { Text, View } from "react-native";

// Create styled components
const StyledView = styled(View);
const StyledText = styled(Text);

export default function App() {
  return (
    <StyledView className="flex-1 items-center justify-center bg-white">
      <StyledText className="text-xl text-black">Hello</StyledText>

      <Text className="text-4xl font-bold text-black">
        Hello 4xl from Tailwind!
      </Text>
      <StatusBar style="auto" />
    </StyledView>
  );
}
