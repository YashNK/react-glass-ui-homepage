import React, { useState } from "react";
import {
  GlassFilterSettings,
  ProfileDetails,
} from "../../models/demo-card.model";
import { GlassCard } from "react-glass-ui";
import "./code-block-section.scss";

type CodeBlockSectionProps = {
  filters: GlassFilterSettings;
  profileDetails: ProfileDetails;
  updateProfileDetails: (key: string, value: string) => void;
};

export const CodeBlockSection: React.FunctionComponent<
  CodeBlockSectionProps
> = ({ filters, profileDetails }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const [showHtml, setShowHtml] = useState<boolean>(true);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(showHtml ? htmlCommand : cssCommand)
      .then(() => {
        setCopied(true);
        const timeoutId = setTimeout(() => {
          setCopied(false);
          clearTimeout(timeoutId);
        }, 1000);
      });
  };

  const generateJSX = () => {
    return Object.entries(filters)
      .map(([key, value]) => {
        const formatted =
          typeof value === "string" ? `"${value}"` : `{${value}}`;
        return `  ${key}=${formatted}`;
      })
      .join("\n");
  };

  const htmlCommand = `<GlassCard\n${generateJSX()}\n>
  <div className="profile-card">
    <div className="profile-image-container">
      <img className="profile-image" src={ProfileImage} />
    </div>
  <div className="profile-info">
    <div className="profile-name">${profileDetails.username}</div>
    <div className="profile-role">${profileDetails.role}</div>
    <div className="profile-actions">
      <button className="profile-button primary">Follow</button>
      <button className="profile-button">Message</button>
    </div>
    </div>
  </div>
</GlassCard>`;

  const cssCommand = `.demo_card {
  z-index: 5;
}
.demo-glass-card {
  min-height: 366px;
}
.profile-card {
  z-index: 5;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.profile-image-container {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
  border: 3px solid white;
  background-color: white;
}
.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.profile-name {
  word-break: break-word;
  font-size: 24px;
  margin: 0;
}
.profile-role {
  word-break: break-word;
  font-size: 15px;
  opacity: 0.7;
  margin-bottom: 24px;
}
.profile-actions {
  display: flex;
  justify-content: center;
}
.profile-button {
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background: transparent;
  color: black;
  cursor: pointer;
  transition: all 0.25s ease;
  border: 1px solid white;
  margin-right: 10px;
}
.profile-button.primary {
  background: white;
  color: black;
}
.profile-button:hover {
  background: linear-gradient(90deg, #b388ff, #ff80bf);
  color: white;
}
`;

  return (
    <div className="code_block_section">
      <div className="code_block_container">
        <div className="main_tab_container p-0 m-0 d-flex justify-content-end">
          <div
            className={`tab mx-0 mr-2 ${showHtml ? "active" : ""}`}
            onClick={() => setShowHtml(true)}
          >
            HTML
          </div>
          <div
            className={`tab mx-0 mr-2 ${showHtml ? "" : "active"}`}
            onClick={() => setShowHtml(false)}
          >
            CSS
          </div>
          <div className="tab mx-0" onClick={handleCopy}>
            {copied ? "Copied!" : "Copy"}
          </div>
        </div>
        {showHtml ? (
          <GlassCard
            backgroundOpacity={0.1}
            borderRadius={20}
            blur={8}
            backgroundColor="var(--black)"
            className="w-100"
            contentClassName="m-2"
          >
            <div>{`import { GlassCard } from "react-glass-ui"`}</div>
            <div>{`import ProfileImage from "./path-to-your-image";`}</div>
          </GlassCard>
        ) : (
          ""
        )}
        <GlassCard
          backgroundOpacity={0.1}
          borderRadius={20}
          blur={8}
          backgroundColor="var(--black)"
          className="w-100 overflow-auto flex_1_1_10"
          contentClassName="overflow-auto p-4"
        >
          <pre className="code_block m-0">
            {showHtml ? htmlCommand : cssCommand}
          </pre>
        </GlassCard>
      </div>
    </div>
  );
};
