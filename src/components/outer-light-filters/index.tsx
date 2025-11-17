import React from "react";
import { GlassInput } from "react-glass-ui";
import { GlassFilterSettings } from "../../models/demo-card.model";

type OuterLightFiltersProps = {
  filters: GlassFilterSettings;
  updateFilterState: (
    key: keyof GlassFilterSettings,
    value: number | string
  ) => void;
};

export const OuterLightFilters: React.FunctionComponent<
  OuterLightFiltersProps
> = ({ filters, updateFilterState }) => {
  return (
    <>
      <GlassInput
        label="Outer Light Spread"
        distortion={0}
        avoidSvgCreation
        type="range"
        min={0}
        max={50}
        value={filters.outerLightSpread}
        onChange={(e) => updateFilterState("outerLightSpread", +e.target.value)}
      />
      <GlassInput
        label="Outer Light Blur"
        distortion={0}
        avoidSvgCreation
        type="range"
        min={0}
        max={300}
        value={filters.outerLightBlur}
        onChange={(e) => updateFilterState("outerLightBlur", +e.target.value)}
      />
      <GlassInput
        label="Outer Light Opacity"
        type="range"
        min={0}
        max={1}
        distortion={0}
        avoidSvgCreation
        step={0.05}
        value={filters.outerLightOpacity}
        onChange={(e) =>
          updateFilterState("outerLightOpacity", +e.target.value)
        }
      />
      <label className="color_label">
        Outer Light Color:
        <input
          className="ml-2"
          type="color"
          value={filters.outerLightColor}
          onChange={(e) =>
            updateFilterState("outerLightColor", e.target.value)
          }
        />
      </label>
    </>
  );
};
