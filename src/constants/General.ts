import Testnets from "../components/molecules/testnets";
import ProjectKeysComp from "../components/molecules/projectKeys";
import MembersComp from "../components/molecules/members";
import { Images } from "./Images";

export const TestNets = {
  id: "TestNets",
  Component: Testnets,
  title: "Testnets",
  leftIcon: Images.testnetImages,
  count: 8,
  rightIcon: Images.add,
};

export const Members = {
  id: "Members",
  Component: MembersComp,
  title: "Members",
  leftIcon: Images.members,
  count: 1,
  rightIcon: Images.add,
};

export const ProjectKey = {
  id: "ProjectKeys",
  Component: ProjectKeysComp,
  title: "Project Keys",
  leftIcon: Images.projectKeys,
  rightIcon: Images.copy,
};

export const SidebarItemList = [TestNets, Members, ProjectKey];
