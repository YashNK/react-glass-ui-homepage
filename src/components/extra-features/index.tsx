import React from "react";
import { GlassInput } from "react-glass-ui";
import { GlassFilterSettings } from "../../models/demo-card.model";

type ExtraFiltersProps = {
  filters: GlassFilterSettings;
  updateFilterState: (
    key: keyof GlassFilterSettings,
    value: number | string
  ) => void;
};

export const ExtraFilters: React.FunctionComponent<ExtraFiltersProps> = ({
  filters,
  updateFilterState,
}) => {
  return (
    <>
      <GlassInput
        label="Hover Scale"
        type="range"
        min={0.8}
        distortion={0}
        max={1.2}
        step={0.01}
        value={filters.onHoverScale}
        onChange={(e) => updateFilterState("onHoverScale", +e.target.value)}
      />
      <label className="color_label">
        Text Color:
        <input
          className="ml-2"
          type="color"
          value={filters.color}
          onChange={(e) => updateFilterState("color", e.target.value)}
        />
      </label>
    </>
  );
};
