import React from "react";
import { GlassInput } from "react-glass-ui";
import { GlassFilterSettings } from "../../models/demo-card.model";

type BackgroundFiltersProps = {
  filters: GlassFilterSettings;
  updateFilterState: (
    key: keyof GlassFilterSettings,
    value: number | string
  ) => void;
};

export const BackgroundFilters: React.FunctionComponent<
  BackgroundFiltersProps
> = ({ filters, updateFilterState }) => {
  return (
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
          updateFilterState("backgroundOpacity", +e.target.value)
        }
      />
      <label className="color_label">
        Background Color:
        <input
          className="ml-2"
          type="color"
          value={filters.backgroundColor}
          onChange={(e) => updateFilterState("backgroundColor", e.target.value)}
        />
      </label>
    </>
  );
};
