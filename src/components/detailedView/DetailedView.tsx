import React from "react";
import Modal from "react-modal";

const DetailedView = ({ content, setContent }) => {
  if (!content) {
    return <></>;
  }
  const { title, wikiLink, description } = content;
  const renderHeader = () => {
    return (
      <>
        <div
          className="header"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <h1>{title}</h1>
          <button
            onClick={() => setContent(null)}
            autoFocus
            style={{
              width: "2em",
              height: "2em",
              backgroundColor: "var(--DarkRed)",
              border: "0.25em solid black",
              margin: "0.25em",
              color: "var(--BackgroundColor)",
              fontSize: "0.8em",
            }}
          >
            X
          </button>
        </div>
      </>
    );
  };

  const renderDescription = () => {
    return description ? (
      <>
        <p className="description">{description}</p>
        <br />
      </>
    ) : (
      <></>
    );
  };
  const renderWikiFrame = () => {
    return wikiLink ? (
      <>
        <div className="frame-wrapper" style={{ flexGrow: 1 }}>
          <iframe
            title={title}
            src={`${wikiLink}#mw-content-text`}
            style={{ width: "100%", height: "100%", border: "none" }}
            autoFocus
          />
        </div>
        <br />
      </>
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
        {renderHeader()}
        {renderDescription()}
        {renderWikiFrame()}
      </div>
    </Modal>
  );
};

export default DetailedView;
