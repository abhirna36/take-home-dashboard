import react from "react";
import {
  HeaderContainer,
  LeftContainer,
  LeftItems,
  LogoContainer,
  LogoImage,
  RightContainer,
} from "./Header.style";
import { Images } from "../../../constants/Images";
import IconText from "../../atoms/iconText/IconText";

type HeaderPropsType = {
  leftItems?: [];
  rightItems?: [];
};

const Header = ({ leftItems, rightItems }: HeaderPropsType) => {
  return (
    <HeaderContainer>
      <LeftContainer>
        <LogoContainer>
          <LogoImage src={Images.harbourLogo} alt="Harborlogo" />
        </LogoContainer>
        <LeftItems>
          <IconText
            imageSrc={Images.allProjects}
            text={"Projects"}
            textStyle={{ color: "#AAAAAA" }}
          />
          <IconText
            imageSrc={Images.docs}
            text={"Docs"}
            textStyle={{ color: "#AAAAAA" }}
          />
          <IconText
            imageSrc={Images.commandSheet}
            text={"Command cheatsheet"}
            textStyle={{ color: "#AAAAAA" }}
          />
        </LeftItems>
      </LeftContainer>
      <RightContainer>
        <IconText
          imageSrc={Images.userKeys}
          text={"Your user key"}
          textStyle={{ color: "#AAAAAA" }}
        />
        <div style={{ display: "flex", alignItems: "center", marginLeft: 36 }}>
          <img src={Images.userPlaceholder} alt="placeHolder image" />
          <img style={{ marginLeft: 4 }} src={Images.down} alt="Down Image" />
        </div>
      </RightContainer>
    </HeaderContainer>
  );
};

export default Header;
