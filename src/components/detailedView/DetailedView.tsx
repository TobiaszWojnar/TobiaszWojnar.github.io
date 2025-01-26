import React from "react";
import Modal from "react-modal";

const DetailedView = ({ content, setContent }) => {
  if (!content) {
    return <></>;
  }
  const { title, wikiLink, longDescription } = content;
  const renderDescription = () => {
    return longDescription ? (
      <p className="description">{longDescription}</p>
    ) : (
      <></>
    );
  };
  const renderWikiFrame = () => {
    return wikiLink ? (
      <div className="frame-wrapper" style={{ flexGrow: 1 }}>
        <iframe
          title={title}
          src={`${wikiLink}#mw-content-text`}
          style={{ width: "100%", height: "100%", border: "none" }}
          autoFocus
        />
      </div>
    ) : (
      <></>
    );
  };
  return (
    <Modal isOpen={content ?? false}>
      <div
        className="modal-wrapper"
        style={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <div
          className="header"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h2>{title}</h2>
          <button
            onClick={() => setContent(null)}
            autoFocus
            style={{ width: "1em", height: "1em" }}
          >
            X
          </button>
        </div>
        {renderDescription()}
        <br />
        {renderWikiFrame()}
        <br />
      </div>
    </Modal>
  );
};

export default DetailedView;
