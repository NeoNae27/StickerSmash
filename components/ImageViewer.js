import styled from "styled-components/native";

export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  const imageSource = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;

  return <Image source={imageSource} />;
}

const Image = styled.Image`
  width: 320px;
  height: 440px;
  border-radius: 30px;
`;
