import React from "react";
import { GlassInput } from "react-glass-ui";
import { GlassFilterSettings } from "../../models/demo-card.model";

type BorderFiltersProps = {
  filters: GlassFilterSettings;
  updateFilterState: (
    key: keyof GlassFilterSettings,
    value: number | string
  ) => void;
};

export const BorderFilters: React.FunctionComponent<BorderFiltersProps> = ({
  filters,
  updateFilterState,
}) => {
  return (
    <>
      <GlassInput
        label="Border Radius"
        distortion={0}
        avoidSvgCreation
        type="range"
        min={0}
        max={180}
        value={filters.borderRadius}
        onChange={(e) => updateFilterState("borderRadius", +e.target.value)}
      />
      <GlassInput
        label="Border Size"
        type="range"
        distortion={0}
        avoidSvgCreation
        min={0}
        max={10}
        value={filters.borderSize}
        onChange={(e) => updateFilterState("borderSize", +e.target.value)}
      />
      <GlassInput
        label="Border Opacity"
        type="range"
        min={0}
        distortion={0}
        avoidSvgCreation
        max={1}
        step={0.05}
        value={filters.borderOpacity}
        onChange={(e) => updateFilterState("borderOpacity", +e.target.value)}
      />
      <label className="color_label">
        Border Color:
        <input
          className="ml-2"
          type="color"
          value={filters.borderColor}
          onChange={(e) => updateFilterState("borderColor", e.target.value)}
        />
      </label>
    </>
  );
};
