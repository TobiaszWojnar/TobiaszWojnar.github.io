import React from "react";
import Modal from "react-modal";
import s from "./style.module.css";

const DetailedView = ({ content, setContent }) => {
  if (!content) {
    return <></>;
  }
  const { title, wikiLink, description } = content;
  const renderHeader = () => {
    return (
      <>
        <div
          className={s.header}
        >
          <h1>{title}</h1>
          <button
            onClick={() => setContent(null)}
            autoFocus
            className={s.button}
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
          <iframe
            className={s.iframe}
            title={title}
            src={`${wikiLink}#mw-content-text`}
          />
        <br />
      </>
    ) : (
      <></>
    );
  };
  const handleClick = (e: KeyboardEvent) => {
    switch(e.key){
      case "Escape":
        setContent(null);
        break;
      default:
        break;
    }
  }
  return (
    <Modal isOpen={content ?? false}>
      <div
        className={s["modal-wrapper"]} onKeyDown={handleClick}
      >
        {renderHeader()}
        {renderDescription()}
        {renderWikiFrame()}
      </div>
    </Modal>
  );
};

export default DetailedView;
