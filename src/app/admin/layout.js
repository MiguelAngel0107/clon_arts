"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

import { Splitter, SplitterPanel } from "primereact/splitter";
import { SlideMenu } from "primereact/slidemenu";
import { items } from "@/utils/admin/home/itemsBar";

import { useState } from "react";
import { useEffect } from "react";

export default function Layout({ children }) {
  const [splitterPanelSize, setSplitterPanelSize] = useState(window.innerWidth/8);
  const [sizePanel, setSizePanel] = useState(5);

  useEffect(() => {
    const pageWidth = window.innerWidth;
    setSizePanel((splitterPanelSize * 100) / pageWidth);
    console.log(sizePanel);
  }, [splitterPanelSize]);

  const handleResize = (event) => {
    const pageWidth = window.innerWidth;
    const newSplitterPanelSize = event.sizes;

    console.log(newSplitterPanelSize);
    setSplitterPanelSize((newSplitterPanelSize[0] * pageWidth) / 100);
    console.log(splitterPanelSize);
  };

  return (
    <Splitter
      className="w-screen h-screen bg-neutral-900"
      onResizeEnd={handleResize}
    >
      <SplitterPanel
        className="flex align-items-center justify-content-center w-full card"
        size={sizePanel}
      >
        <SlideMenu
          model={items}
          viewportHeight={window.innerHeight - 20}
          menuWidth={splitterPanelSize}
          style={{
            width: `${splitterPanelSize}px`,
            height: "100%",
            background: "#bdbdbd",
          }}
        />
      </SplitterPanel>

      <SplitterPanel size={90}>
        <Splitter layout="vertical">
          <SplitterPanel
            className="flex align-items-center justify-content-center"
            size={-10}
          >
            NavBar
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
