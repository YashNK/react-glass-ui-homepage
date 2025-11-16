import {
  GlassFilterSettings,
  ProfileDetails,
} from "../../models/demo-card.model";
import { GlassCard } from "react-glass-ui";
import ProfileImage from "/images/profile-pic.webp";
import "./demo-card.scss";

type DemoCardProps = {
  filters: GlassFilterSettings;
  profileDetails: ProfileDetails;
  updateProfileDetails: (key: string, value: string) => void;
};

export const DemoCard: React.FunctionComponent<DemoCardProps> = ({
  filters,
  profileDetails,
}) => {
  return (
    <div className="demo_card w-100">
      <GlassCard
        className="w-100 demo-glass-card"
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
        <div className="profile-card">
          <div className="profile-image-container">
            <img className="profile-image" src={ProfileImage} />
          </div>
          <div className="profile-info">
            <div className="profile-name">{profileDetails.username}</div>
            <div className="profile-role">{profileDetails.role}</div>
            <div className="profile-actions">
              <button className="profile-button primary">Follow</button>
              <button className="profile-button">Message</button>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};
