import React from "react";
import { GlassInput } from "react-glass-ui";
import { GlassFilterSettings } from "../../models/demo-card.model";

type InnerLightFiltersProps = {
  filters: GlassFilterSettings;
  updateFilterState: (key: keyof GlassFilterSettings, value: number | string) => void;
};

export const InnerLightFilters: React.FunctionComponent<
  InnerLightFiltersProps
> = ({ filters, updateFilterState }) => {
  return (
    <>
      <GlassInput
        label="Inner Light Spread"
        distortion={0}
        type="range"
        min={0}
        max={50}
        value={filters.innerLightSpread}
        onChange={(e) => updateFilterState("innerLightSpread", +e.target.value)}
      />
      <GlassInput
        label="Inner Light Blur"
        type="range"
        min={0}
        max={300}
        value={filters.innerLightBlur}
        distortion={0}
        onChange={(e) => updateFilterState("innerLightBlur", +e.target.value)}
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
          updateFilterState("innerLightOpacity", +e.target.value)
        }
      />
      <label className="color_label">
        Inner Light Color:
        <input
          className="ml-2"
          type="color"
          value={filters.innerLightColor}
          onChange={(e) =>
            updateFilterState("innerLightColor", e.target.value)
          }
        />
      </label>
    </>
  );
};
