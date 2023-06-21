import React from "react";
import styles from "./Sidebar.module.scss";
import IconText from "../../atoms/iconText/IconText";
import { Images } from "../../../constants/Images";
import { SidebarItemList } from "../../../constants/General";

const Sidebar = (props: any) => {
  const { selecteditem, updatedSelectedItem } = props;
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.header}>
        <IconText
          imageSrc={Images.iconLeft}
          text={"Back to all Projects"}
          textClasses={styles.headerText}
        />
      </div>
      <div className={styles.itemContainer}>
        <IconText
          textClasses={styles.subHeading}
          text={"Acme frontend"}
          imageSrc={Images.favourite}
        />
        <div className={styles.listContainer}>
          {SidebarItemList.map((item, idx) => {
            return (
              <div
                key={idx}
                className={
                  selecteditem.id === item.id
                    ? styles.selectedItem
                    : styles.sidebarItemContainer
                }
                onClick={() => updatedSelectedItem(item)}
              >
                <IconText
                  imageSrc={item.leftIcon}
                  text={item.title}
                  textClasses={styles.headerText}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
