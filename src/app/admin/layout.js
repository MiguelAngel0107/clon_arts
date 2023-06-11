"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

import { Splitter, SplitterPanel } from "primereact/splitter";
import { SlideMenu } from "primereact/slidemenu";
import { items } from "@/utils/admin/home/itemsBar";

import { useState } from "react";

export default function Layout({ children }) {
  const [splitterPanelSize, setSplitterPanelSize] = useState(200);

  const handleResize = (event) => {
    const newSplitterPanelSize = event.sizes;
    console.log(newSplitterPanelSize)
    setSplitterPanelSize(newSplitterPanelSize[1]);
    console.log(splitterPanelSize);
  };

  return (
    <Splitter
      className="w-screen h-screen bg-neutral-900"
      onResizeEnd={handleResize}
    >
      <SplitterPanel
        className="flex align-items-center justify-content-center w-full card"
        size={10}
      >
        <SlideMenu
          model={items}
          viewportHeight={window.innerHeight - 20}
          menuWidth={280}
          style={{ width: `${splitterPanelSize}px`, height: "100%" }}
        />
      </SplitterPanel>

      <SplitterPanel size={80}>
        <Splitter layout="vertical">
          <SplitterPanel
            className="flex align-items-center justify-content-center"
            size={15}
          >
            Panel 2
          </SplitterPanel>

          <SplitterPanel
            className="flex align-items-center justify-content-center"
            size={80}
          >
            <div className={`bg-neutral-950 w-full`}>{children}</div>;
          </SplitterPanel>
        </Splitter>
      </SplitterPanel>
    </Splitter>
  );
}
