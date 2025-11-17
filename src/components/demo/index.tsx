import React, { useState } from "react";
import { defaultFilters, tabLabels } from "../../constants";
import { resetFilters, updateFilter } from "../../slice/demo";
import {
  GlassFilterSettings,
  ProfileDetails,
} from "../../models/demo-card.model";
import { BackgroundFilters } from "../background-filters";
import { OuterLightFilters } from "../outer-light-filters";
import { InnerLightFilters } from "../inner-light-filters";
import { CodeBlockSection } from "../code-block-section";
import { useAppDispatch } from "../../hooks";
import { BorderFilters } from "../border-settings";
import { ExtraFilters } from "../extra-features";
import { CoreFeatures } from "../core-features";
import { GlassCard, GlassInput } from "react-glass-ui";
import { DemoCard } from "../demo-card";
import DemoImage from "/images/input-demo-bg.webp";
import "./demo.scss";

export const Demo: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const [filters, setFilters] = useState<GlassFilterSettings>(defaultFilters);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [backgroundOpacity, setBackgroundOpacity] = useState<number>(0.9);
  const [profileDetails, setProfileDetails] = useState<ProfileDetails>({
    username: "Emma Finn",
    role: "Software Engineer",
  });

  const handleResetFilters = () => {
    setFilters(defaultFilters);
    dispatch(resetFilters());
  };

  const updateFilterState = (
    key: keyof GlassFilterSettings,
    value: number | string
  ) => {
    setFilters({ ...filters, [key]: value });
    dispatch(updateFilter({ key, value }));
  };

  const updateProfileDetails = (key: string, value: string) => {
    setProfileDetails((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div id="demo-section" className="demo_section">
      <div className="image_container demo_section_image_container">
        <img
          style={{ opacity: backgroundOpacity }}
          src={DemoImage}
          className="background_image"
        />
      </div>
      <div className="demo_card_label">Glass Card</div>
      <div className="demo_content">
        <div className="demo_card_container flex_1_1_10 w-100">
          <GlassCard
            distortion={50}
            avoidSvgCreation
            className="demo_card_desc"
            backgroundOpacity={0.2}
            borderRadius={20}
            backgroundColor="#d642cc"
          >
            A highly customizable glass-effect container that uses advanced SVG
            filters and distortion maps to create realistic frosted glass
            visuals
          </GlassCard>
          <DemoCard
            filters={filters}
            profileDetails={profileDetails}
            updateProfileDetails={updateProfileDetails}
          />
          <div className="demo_input_section">
            <div className="d-flex">
              <GlassInput
                value={profileDetails.username}
                borderRadius={20}
                maxLength={50}
                onChange={(e) =>
                  updateProfileDetails("username", e.target.value)
                }
                label="Username"
                className="mr-2 flex_1_1_10"
              />
              <GlassInput
                value={profileDetails.role}
                borderRadius={20}
                maxLength={50}
                onChange={(e) => updateProfileDetails("role", e.target.value)}
                label="Role"
                className="ml-2 flex_1_1_10"
              />
            </div>
          </div>
          <GlassInput
            distortion={0}
            avoidSvgCreation
            step={0.01}
            onChange={(e) => setBackgroundOpacity(+e.target.value)}
            value={backgroundOpacity}
            min={0.1}
            max={1}
            className="demo_background_input_container"
            label="Background image opacity"
            type="range"
          />
          <GlassCard
            blur={5}
            distortion={0}
            avoidSvgCreation
            className="demo_card_desc warning font_12"
            contentClassName="d-flex"
            backgroundOpacity={0.1}
            borderRadius={20}
            backgroundColor="#d642cc"
          >
            <div className="pr-2">⚠️</div>
            <div>
              You may experience slight lag depending on your device’s
              performance. This occurs when over 20 Glass UI elements are being
              rendered simultaneously. For a smoother browsing experience, it’s
              recommended to keep around 8 elements visible at a time.
            </div>
          </GlassCard>
          <GlassCard
            blur={5}
            distortion={0}
            avoidSvgCreation
            className="demo_card_desc warning w-100"
            contentClassName="d-flex font_12"
            backgroundOpacity={0.1}
            borderRadius={20}
            backgroundColor="#d642cc"
          >
            <div className="pr-2">⚠️</div>
            <div>
              This library offers limited support across all modern browsers,
              but is optimized for Chrome for the best visual quality and
              performance.
            </div>
          </GlassCard>
        </div>
        <div className="demo_options_container w-100 flex_1_1_10 h-100 d-flex flex-column">
          <GlassCard
            blur={4}
            distortion={50}
            borderRadius={30}
            contentClassName="p-4"
            className="demo_options w-100 flex_1_1_10"
          >
            {activeTab === 0 && (
              <CoreFeatures
                filters={filters}
                updateFilterState={updateFilterState}
              />
            )}
            {activeTab === 1 && (
              <BorderFilters
                filters={filters}
                updateFilterState={updateFilterState}
              />
            )}
            {activeTab === 2 && (
              <BackgroundFilters
                filters={filters}
                updateFilterState={updateFilterState}
              />
            )}
            {activeTab === 3 && (
              <InnerLightFilters
                filters={filters}
                updateFilterState={updateFilterState}
              />
            )}
            {activeTab === 4 && (
              <OuterLightFilters
                filters={filters}
                updateFilterState={updateFilterState}
              />
            )}
            {activeTab === 5 && (
              <ExtraFilters
                filters={filters}
                updateFilterState={updateFilterState}
              />
            )}
          </GlassCard>
          <div className="main_tab_container m-0">
            {tabLabels.map((label, index) => (
              <button
                key={label}
                className={`tab ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {label}
              </button>
            ))}
            <button className="tab reset-btn" onClick={handleResetFilters}>
              Reset All
            </button>
          </div>
          <CodeBlockSection
            filters={filters}
            profileDetails={profileDetails}
            updateProfileDetails={updateProfileDetails}
          />
        </div>
      </div>
    </div>
  );
};
