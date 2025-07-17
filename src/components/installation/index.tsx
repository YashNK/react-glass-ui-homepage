import React, { useState } from "react";
import { PatchNotesData } from "../../constants";
import "./installation.scss";

export const Installation: React.FunctionComponent = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const command = "npm install react-glass-ui";

  const handleCopy = () => {
    navigator.clipboard.writeText(command).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div id="installation-section" className="installation_section">
      <div className="installation_content">
        <div className="installation_intro">
          <h2 className="installation_title">React Glass UI</h2>
          <p className="installation_description max_width_600 pt-2">
            React Glass UI is a customizable React library for building elegant,
            glassmorphism-inspired interfaces. Perfect for landing pages and
            dashboards, its components are responsive, highly configurable, and
            easy to integrate—helping you create modern, visually rich UIs with
            minimal effort.
            <a
              target="_blank"
              className="pl-1"
              href="https://github.com/YashNK/react-glass-ui"
            >
              Github
            </a>
          </p>
        </div>

        <div className="installation_steps">
          <p className="installation_subtext">
            To install <code>react-glass-ui</code>, run the command below in
            your project:
          </p>

          <div className="code_block">
            <code>{command}</code>
            <button onClick={handleCopy} className="copy_btn">
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          <div className="installation_meta">
            {PatchNotesData.releaseVersion}
            <span className="npm_info">
              Latest version on
              <a
                target="_blank"
                className="pl-1"
                href="https://www.npmjs.com/package/react-glass-ui"
              >
                <strong>NPM</strong>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
