import {
  HeaderContainer,
  LeftContainer,
  LeftItems,
  LogoContainer,
  LogoImage,
  RightContainer,
  UserImageContainer,
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
            containerClass={{ padding: 8 }}
          />
          <IconText
            imageSrc={Images.docs}
            text={"Docs"}
            textStyle={{ color: "#AAAAAA" }}
            containerClass={{ padding: 8 }}
          />
          <IconText
            imageSrc={Images.commandSheet}
            text={"Command cheatsheet"}
            textStyle={{ color: "#AAAAAA" }}
            containerClass={{ padding: 8 }}
          />
        </LeftItems>
      </LeftContainer>
      <RightContainer>
        <IconText
          imageSrc={Images.userKeys}
          text={"Your user key"}
          textStyle={{ color: "#AAAAAA" }}
        />
        <UserImageContainer>
          <img src={Images.userPlaceholder} alt="placeHolder image" />
          <img style={{ marginLeft: 4 }} src={Images.down} alt="Down Image" />
        </UserImageContainer>
      </RightContainer>
    </HeaderContainer>
  );
};

export default Header;
