import React, { useState } from 'react';
import { Tabs, TabList, TabItem, TabPanel } from './components/Tab';
import { tabsData } from './components/data';
import './App.css';

const ReactTab = () => {
  const [selected, setSelected] = useState(tabsData[0].tabName);

  return (
    <Tabs
      value={selected}
      onChange={(value) => setSelected(value)}
      defaultValue={tabsData[0].tabName}
    >
      <TabList>
        {tabsData.map((tab) => (
          <TabItem
            key={tab.tabName}
            value={tab.tabName}
            disabled={tab.disabled}
          >
            {tab.label}
          </TabItem>
        ))}
      </TabList>

      {tabsData.map((tab) => (
        <TabPanel key={tab.tabName} value={tab.tabName}>
          <div>{tab.content}</div>
        </TabPanel>
      ))}
    </Tabs>
  );
};
export default ReactTab;
