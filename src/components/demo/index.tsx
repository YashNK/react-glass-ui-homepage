import React, { useState } from "react";
import { defaultFilters, tabLabels } from "../../constants";
import { GlassFilterSettings } from "../../models/demo-card.model";
import { GlassInput } from "react-glass-ui";
import { DemoCard } from "../demo-card";
import DemoImage from "/images/demo.webp";
import "./demo.scss";

export const Demo: React.FunctionComponent = () => {
  const [filters, setFilters] = useState<GlassFilterSettings>(defaultFilters);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div id="demo-section" className="demo_section">
      <div className="image_container demo_section_image_container">
        <img src={DemoImage} className="background_image" />
      </div>
      <div className="demo_content">
        <div className="demo_card_container w-100">
          <DemoCard filters={filters} />
          <div className="main_tab_container mt-3">
            {tabLabels.map((label, index) => (
              <button
                key={label}
                className={`tab ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {label}
              </button>
            ))}
            <button
              className="tab reset-btn"
              onClick={() => setFilters(defaultFilters)}
            >
              Reset All
            </button>
          </div>
        </div>
        <div className="demo_options_container w-100 h-100">
          <div className="demo_options p-4">
            {activeTab === 0 && (
              <>
                <GlassInput
                  id="input-slider"
                  label="Blur"
                  type="range"
                  min={0}
                  max={50}
                  distortion={0}
                  backgroundColor="white"
                  value={filters.blur}
                  onChange={(e) =>
                    setFilters({ ...filters, blur: +e.target.value })
                  }
                />
                <GlassInput
                  id="input-slider"
                  label="Distortion"
                  type="range"
                  min={0}
                  distortion={0}
                  max={500}
                  value={filters.distortion}
                  avoidSvgCreation
                  onChange={(e) =>
                    setFilters({ ...filters, distortion: +e.target.value })
                  }
                />
                <GlassInput
                  id="input-slider"
                  label="Flexibility"
                  distortion={0}
                  type="range"
                  min={0}
                  max={20}
                  value={filters.flexibility}
                  avoidSvgCreation
                  onChange={(e) =>
                    setFilters({ ...filters, flexibility: +e.target.value })
                  }
                />
                <GlassInput
                  id="input-slider"
                  label="Saturation"
                  type="range"
                  min={0}
                  distortion={0}
                  max={300}
                  step={1}
                  value={filters.saturation}
                  avoidSvgCreation
                  onChange={(e) =>
                    setFilters({ ...filters, saturation: +e.target.value })
                  }
                />
                <GlassInput
                  id="input-slider"
                  label="Brightness"
                  type="range"
                  distortion={0}
                  min={0}
                  max={300}
                  step={1}
                  value={filters.brightness}
                  avoidSvgCreation
                  onChange={(e) =>
                    setFilters({ ...filters, brightness: +e.target.value })
                  }
                />
                <GlassInput
                  id="input-slider"
                  avoidSvgCreation
                  label="Chromatic Aberration"
                  distortion={0}
                  type="range"
                  min={0}
                  max={20}
                  step={0.1}
                  value={filters.chromaticAberration}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      chromaticAberration: +e.target.value,
                    })
                  }
                />
              </>
            )}

            {activeTab === 1 && (
              <>
                <GlassInput
                  label="Border Radius"
                  distortion={0}
                  type="range"
                  min={0}
                  max={50}
                  value={filters.borderRadius}
                  onChange={(e) =>
                    setFilters({ ...filters, borderRadius: +e.target.value })
                  }
                />
                <GlassInput
                  label="Border Size"
                  type="range"
                  distortion={0}
                  min={0}
                  max={10}
                  value={filters.borderSize}
                  onChange={(e) =>
                    setFilters({ ...filters, borderSize: +e.target.value })
                  }
                />
                <GlassInput
                  label="Border Opacity"
                  type="range"
                  min={0}
                  distortion={0}
                  max={1}
                  step={0.05}
                  value={filters.borderOpacity}
                  onChange={(e) =>
                    setFilters({ ...filters, borderOpacity: +e.target.value })
                  }
                />
                <label className="color_label">
                  Border Color:
                  <input
                    className="ml-2"
                    type="color"
                    value={filters.borderColor}
                    onChange={(e) =>
                      setFilters({ ...filters, borderColor: e.target.value })
                    }
                  />
                </label>
              </>
            )}

            {activeTab === 2 && (
              <>
                <GlassInput
                  label="Background Opacity"
                  type="range"
                  distortion={0}
                  min={0}
                  max={1}
                  step={0.1}
                  value={filters.backgroundOpacity}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      backgroundOpacity: +e.target.value,
                    })
                  }
                />
                <label className="color_label">
                  Background Color:
                  <input
                    className="ml-2"
                    type="color"
                    value={filters.backgroundColor}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        backgroundColor: e.target.value,
                      })
                    }
                  />
                </label>
              </>
            )}

            {activeTab === 3 && (
              <>
                <GlassInput
                  label="Inner Light Spread"
                  distortion={0}
                  type="range"
                  min={0}
                  max={5}
                  value={filters.innerLightSpread}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      innerLightSpread: +e.target.value,
                    })
                  }
                />
                <GlassInput
                  label="Inner Light Blur"
                  type="range"
                  min={0}
                  max={30}
                  value={filters.innerLightBlur}
                  distortion={0}
                  onChange={(e) =>
                    setFilters({ ...filters, innerLightBlur: +e.target.value })
                  }
                />
                <GlassInput
                  label="Inner Light Opacity"
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={filters.innerLightOpacity}
                  distortion={0}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      innerLightOpacity: +e.target.value,
                    })
                  }
                />
                <label className="color_label">
                  Inner Light Color:
                  <input
                    className="ml-2"
                    type="color"
                    value={filters.innerLightColor}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        innerLightColor: e.target.value,
                      })
                    }
                  />
                </label>
              </>
            )}

            {activeTab === 4 && (
              <>
                <GlassInput
                  label="Outer Light Spread"
                  distortion={0}
                  type="range"
                  min={0}
                  max={5}
                  value={filters.outerLightSpread}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      outerLightSpread: +e.target.value,
                    })
                  }
                />
                <GlassInput
                  label="Outer Light Blur"
                  distortion={0}
                  type="range"
                  min={0}
                  max={30}
                  value={filters.outerLightBlur}
                  onChange={(e) =>
                    setFilters({ ...filters, outerLightBlur: +e.target.value })
                  }
                />
                <GlassInput
                  label="Outer Light Opacity"
                  type="range"
                  min={0}
                  max={1}
                  distortion={0}
                  step={0.05}
                  value={filters.outerLightOpacity}
                  onChange={(e) =>
                    setFilters({
                      ...filters,
                      outerLightOpacity: +e.target.value,
                    })
                  }
                />
                <label className="color_label">
                  Outer Light Color:
                  <input
                    className="ml-2"
                    type="color"
                    value={filters.outerLightColor}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        outerLightColor: e.target.value,
                      })
                    }
                  />
                </label>
              </>
            )}

            {activeTab === 5 && (
              <>
                <GlassInput
                  label="Hover Scale"
                  type="range"
                  min={0.9}
                  distortion={0}
                  max={1.2}
                  step={0.01}
                  value={filters.onHoverScale}
                  onChange={(e) =>
                    setFilters({ ...filters, onHoverScale: +e.target.value })
                  }
                />
                <label className="color_label">
                  Text Color:
                  <input
                    className="ml-2"
                    type="color"
                    value={filters.color}
                    onChange={(e) =>
                      setFilters({ ...filters, color: e.target.value })
                    }
                  />
                </label>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
