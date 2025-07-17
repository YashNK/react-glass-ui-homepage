import React from "react";
import { PatchNotesData } from "../../constants";
import "./patch-notes.scss";

export const PatchNotes: React.FunctionComponent = () => {
  return (
    <div id="patch-notes-section" className="patch_notes_section">
      <div className="patch_notes_header">
        <div className="patch_notes_title">
          Patch Notes {PatchNotesData.releaseVersion}
        </div>
        <div className="patch_notes_date">
          Release Date: {PatchNotesData.releaseDate}
        </div>
      </div>

      <div className="patch_notes_scroll_container">
        {PatchNotesData.releaseNotes.map((release, index) => (
          <div key={index} className="patch_card">
            <div className="release_title">{release.patchTitle}</div>
            <ul className="patch_note_list">
              {release.patchPoints.map((point, pointIndex) => (
                <li key={pointIndex} className="patch_note_point">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
