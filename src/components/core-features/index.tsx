import React from "react";
import { GlassInput } from "react-glass-ui";
import { GlassFilterSettings } from "../../models/demo-card.model";

type CoreFeaturesProps = {
  filters: GlassFilterSettings;
  updateFilterState: (key: keyof GlassFilterSettings, value: number) => void;
};

export const CoreFeatures: React.FunctionComponent<CoreFeaturesProps> = ({
  filters,
  updateFilterState,
}) => {
  return (
    <>
      <GlassInput
        id="input-slider"
        label="Blur"
        type="range"
        min={0}
        max={100}
        distortion={0}
        avoidSvgCreation
        backgroundColor="white"
        value={filters.blur}
        onChange={(e) => updateFilterState("blur", +e.target.value)}
      />
      <GlassInput
        id="input-slider"
        label="Distortion"
        type="range"
        min={0}
        distortion={0}
        max={400}
        value={filters.distortion}
        avoidSvgCreation
        onChange={(e) => updateFilterState("distortion", +e.target.value)}
      />
      <GlassInput
        id="input-slider"
        label="Flexibility"
        distortion={0}
        type="range"
        min={0}
        max={30}
        value={filters.flexibility}
        avoidSvgCreation
        onChange={(e) => updateFilterState("flexibility", +e.target.value)}
      />
      <GlassInput
        id="input-slider"
        label="Saturation"
        type="range"
        min={0}
        distortion={0}
        max={500}
        step={1}
        value={filters.saturation}
        avoidSvgCreation
        onChange={(e) => updateFilterState("saturation", +e.target.value)}
      />
      <GlassInput
        id="input-slider"
        label="Brightness"
        type="range"
        distortion={0}
        min={0}
        max={200}
        step={1}
        value={filters.brightness}
        avoidSvgCreation
        onChange={(e) => updateFilterState("brightness", +e.target.value)}
      />
      <GlassInput
        id="input-slider"
        avoidSvgCreation
        label="Chromatic Aberration"
        distortion={0}
        type="range"
        min={0}
        max={100}
        step={0.1}
        value={filters.chromaticAberration}
        onChange={(e) =>
          updateFilterState("chromaticAberration", +e.target.value)
        }
      />
    </>
  );
};
