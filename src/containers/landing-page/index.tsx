import React from "react";
import { GlassButton, GlassCard } from "react-glass-ui";
import { Installation } from "../../components/installation";
import { PatchNotes } from "../../components/patch-notes";
import { Header } from "../../components/header";
import { Demo } from "../../components/demo";
import LandingPageBackground from "/images/aesthetic-background.webp";
import "./landing-page.scss";

export const LandingPage: React.FunctionComponent = () => {
  const handleNavigation = (id: string) => {
    const scrollContainer = document.getElementById(id);
    if (scrollContainer) scrollContainer.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Header />
      <div id="landing-page-container" className="landing_page_container">
        <div className="image_container landing_section_image_container ">
          <img src={LandingPageBackground} className="background_image" />
        </div>
        <div className="landing_section w-100">
          <div className="landing_page_title">Welcome to</div>
          <div className="landing_page_subtitle">React Glass UI</div>
          <GlassButton
            blur={4}
            color="var(--white)"
            contentClassName="glass_btn"
            distortion={50}
            borderSize={1}
            borderOpacity={1}
            borderRadius={60}
            borderColor="var(--borderColor)"
            flexibility={10}
            className="btn_glass_content_container white_space_no_wrap px-5 mt-4"
            onClick={() => handleNavigation("installation-section")}
          >
            <div>Get Started</div>
          </GlassButton>
        </div>
        <div id="landing-page" className="scroll_spacer" />
        <Installation />
        <Demo />
        <PatchNotes />
        <div id="page-footer" className="page_footer">
          <GlassCard
            className="footer_glass"
            backgroundColor="var(--themeColor)"
            blur={10}
            distortion={0}
            borderRadius={0}
            outerLightOpacity={0}
            innerLightOpacity={0}
            borderSize={0}
          >
            <div className="footer_content">
              <div className="footer_section">
                <h4>Contact</h4>
                {/* <a href="mailto:yashk.marian@gmail.com">
                  Yashk.marian@gmail.com
                </a> */}
                <a
                  href="https://instagram.com/yash_kamnani"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  instagram.com/yash_kamnani
                </a>
              </div>

              <div className="footer_section">
                <h4>Other Links</h4>
                <a
                  href="https://medium.com/@yashkamnani"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  medium.com/@yashkamnani
                </a>
                <a
                  href="https://www.npmjs.com/~yash-kamnani"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  npmjs.com/~yash-kamnani
                </a>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </>
  );
};
