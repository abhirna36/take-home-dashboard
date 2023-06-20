import react from "react";
import { Container, Image, Text } from "./IconText.style";

type HeaderPropsType = {
  imageSrc?: any;
  text?: string;
  textStyle?: any;
};

const IconText = ({ imageSrc, text, textStyle }: HeaderPropsType) => {
  return (
    <Container
      onClick={() => {
        console.log("clicked");
      }}
    >
      <Image src={imageSrc} alt="image" />
      <Text style={textStyle}>{text}</Text>
    </Container>
  );
};

export default IconText;
