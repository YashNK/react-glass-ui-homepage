import React from "react";
import { GlassCard } from "react-glass-ui";
import { PatchNotesData } from "../../constants";
import Logo from "/react-glass-ui-logo.webp";
import "./header.scss";

export const Header: React.FunctionComponent = () => {
  const handleNavigation = (id: string) => {
    const scrollContainer = document.getElementById(id);
    if (scrollContainer) scrollContainer.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="header_container">
      <GlassCard
        className="header_glass_content_container"
        contentClassName="header_glass_content"
        blur={6}
        itemsCenter
        borderSize={1}
        distortion={20}
        borderRadius={100}
        backgroundOpacity={0.1}
        color="var(--white)"
        borderColor="var(--borderColor)"
        backgroundColor="var(--themeColor)"
      >
        <div className="w-100 header_items d-flex align-items-center justify-content-between">
          <div
            className="d-flex align-items-center cursor_pointer"
            onClick={() => handleNavigation("landing-page")}
          >
            <img className="logo_image mr-2" src={Logo} />
            React Glass UI - {PatchNotesData.releaseVersion}
          </div>
          <div className="menu_items">
            <span
              onClick={() => handleNavigation("installation-section")}
              className="mr-4 cursor_pointer"
            >
              Installation
            </span>
            <span
              onClick={() => handleNavigation("demo-section")}
              className="mr-4 cursor_pointer"
            >
              Demo
            </span>
            <span
              onClick={() => handleNavigation("patch-notes-section")}
              className="mr-4 cursor_pointer"
            >
              Patch Notes
            </span>
            <span
              onClick={() => handleNavigation("page-footer")}
              className="cursor_pointer"
            >
              Contact Info
            </span>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};
