import { GlassFilterSettings } from "../../models/demo-card.model";
import { GlassCard } from "react-glass-ui";
import ProfileImage from "/images/profile-pic.webp";
import "./demo-card.scss";

type DemoCardProps = {
  filters: GlassFilterSettings;
};

export const DemoCard: React.FunctionComponent<DemoCardProps> = ({
  filters,
}) => {
  return (
    <div className="demo_card w-100">
      <GlassCard
        className="w-100"
        blur={filters.blur}
        distortion={filters.distortion}
        flexibility={filters.flexibility}
        borderColor={filters.borderColor}
        borderSize={filters.borderSize}
        borderRadius={filters.borderRadius}
        borderOpacity={filters.borderOpacity}
        color={filters.color}
        backgroundColor={filters.backgroundColor}
        backgroundOpacity={filters.backgroundOpacity}
        innerLightColor={filters.innerLightColor}
        innerLightSpread={filters.innerLightSpread}
        innerLightBlur={filters.innerLightBlur}
        innerLightOpacity={filters.innerLightOpacity}
        outerLightColor={filters.outerLightColor}
        outerLightSpread={filters.outerLightSpread}
        outerLightBlur={filters.outerLightBlur}
        outerLightOpacity={filters.outerLightOpacity}
        chromaticAberration={filters.chromaticAberration}
        onHoverScale={filters.onHoverScale}
        saturation={filters.saturation}
        brightness={filters.brightness}
      >
        <div className="profile_card">
          <div className="profile_image_container">
            <img className="profile_image" src={ProfileImage} />
          </div>
          <div className="profile_info">
            <h2 className="profile_name">Emma Finn</h2>
            <p className="profile_role">Software Engineer</p>
            <div className="profile_actions">
              <button className="btn primary mr-2">Follow</button>
              <button className="btn">Message</button>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};
