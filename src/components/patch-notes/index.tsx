import React, { useState } from "react";
import { PatchNotesData } from "../../constants";
import Logo from "/react-glass-ui-logo.webp";

import "./patch-notes.scss";

export const PatchNotes: React.FunctionComponent = () => {
  const [currentNote, setCurrentNote] = useState<number>(0);
  return (
    <div id="patch-notes-section" className="patch_notes_section">
      <div className="patch_notes_header">
        <div className="patch_notes_title">
          <img className="logo mr-2" src={Logo}></img>
          Patch Notes {PatchNotesData.releaseVersion}
        </div>
        <div className="patch_notes_date">
          Release Date: {PatchNotesData.releaseDate}
        </div>
      </div>
      <div className="main_tab_container">
        {PatchNotesData.releaseNotes.map((release, index) => (
          <div
            key={index}
            className={`tab visible ${index === currentNote ? "active" : ""}`}
            onClick={() => setCurrentNote(index)}
          >
            {release.patchTitle}
          </div>
        ))}
      </div>
      <div className="patch_notes_scroll_container">
        <div className="patch_card">
          <div className="release_title">
            {PatchNotesData.releaseNotes[currentNote].patchTitle}
          </div>
          <ul className="patch_note_list">
            {PatchNotesData.releaseNotes[currentNote].patchPoints.map(
              (point, pointIndex) => (
                <li key={pointIndex} className="patch_note_point">
                  {point}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
