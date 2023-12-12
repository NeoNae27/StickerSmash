import styled from "styled-components/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Button({ label, theme, onPress }) {
  if (theme === "primary") {
    return (
      <ButtonContainer
        style={{ borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }}
      >
        <ButtonComponent
          onPress={onPress}
          style={{ backgroundColor: "#fff" }}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={{ paddingRight: 8 }}
          ></FontAwesome>
          <ButtonLabel style={{ color: "#25292e" }}>{label}</ButtonLabel>
        </ButtonComponent>
      </ButtonContainer>
    );
  }

  return (
    <ButtonContainer>
      <ButtonComponent onPress={onPress}>
        <ButtonLabel>{label}</ButtonLabel>
      </ButtonComponent>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.View`
  width: 320px;
  height: 68px;
  margin-top: 20px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
  padding: 3px;
`;

const ButtonComponent = styled.Pressable`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const ButtonLabel = styled.Text`
  color: #fff;
  font-size: 16px;
`;
