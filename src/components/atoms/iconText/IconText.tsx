import react from "react";
import { Container, Image, Text } from "./IconText.style";

type HeaderPropsType = {
  imageSrc?: any;
  text?: string;
  textStyle?: any;
  textClasses?: any;
  containerClass?: any;
};

const IconText = ({
  imageSrc,
  text,
  textStyle,
  containerClass,
}: HeaderPropsType) => {
  return (
    <Container
      onClick={() => {
        console.log("clicked");
      }}
      style={containerClass}
    >
      <Image src={imageSrc} alt="image" />
      <Text style={textStyle}>{text}</Text>
    </Container>
  );
};

export default IconText;
