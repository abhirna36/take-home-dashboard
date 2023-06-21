import React, { useMemo, useState } from "react";
import Header from "../../components/molecules/header";
import { TestNets } from "../../constants/General";
import Sidebar from "../../components/molecules/sideBar";
import styles from "./Dashboard.module.scss";

function Dashboard() {
  const [selectedItem, setSelecteditem] = useState(TestNets);

  const renderContent = useMemo(() => {
    const { Component } = selectedItem;
    return (
      <div className={styles.contentContainer}>
        <Component />
      </div>
    );
  }, [selectedItem?.id]);

  return (
    <div>
      <Header />
      <div style={{ backgroundColor: "red", display: "flex" }}>
        <Sidebar
          selecteditem={selectedItem}
          updatedSelectedItem={setSelecteditem}
        />
        {renderContent}
      </div>
    </div>
  );
}

export default Dashboard;
