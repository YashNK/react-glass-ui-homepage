import React, { useEffect, useState } from "react";
import { GlassCard } from "react-glass-ui";
import { PatchNotesData } from "../../constants";
import Logo from "/react-glass-ui-logo.webp";
import "./header.scss";

export const Header: React.FunctionComponent = () => {
  const [bgColor, setBgColor] = useState<string>("var(--themeColor)");

  useEffect(() => {
    const scrollContainer = document.getElementById("landing-page-container");
    const landingPage = document.getElementById("landing-page");
    if (!scrollContainer || !landingPage) return;
    const handleScroll = () => {
      const shouldBeBlack =
        scrollContainer.scrollTop > landingPage.clientHeight - 65;
      setBgColor(shouldBeBlack ? "var(--black)" : "var(--themeColor)");
    };
    scrollContainer.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (id: string) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="header_container">
      <GlassCard
        className="header_glass_content_container"
        contentClassName="header_glass_content"
        blur={5}
        itemsCenter
        borderSize={1}
        borderOpacity={1}
        distortion={50}
        borderRadius={100}
        backgroundOpacity={0.1}
        color="var(--white)"
        borderColor="var(--borderColor)"
        backgroundColor={bgColor}
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
