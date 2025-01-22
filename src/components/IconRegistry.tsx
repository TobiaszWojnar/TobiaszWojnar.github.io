import React from "react";

// import atomIcon from "./../assets/icons/atom.svg";
// import bookIcon from "./../assets/icons/book.svg";
// import booksIcon from "./../assets/icons/books.svg";
// import coinIcon from "./../assets/icons/coin.svg";
import crownIcon from "./../assets/icons/crown.svg";
import cultureIcon from "./../assets/icons/culture.svg";
// import ideaIcon from "./../assets/icons/idea.svg";
import mapIcon from "./../assets/icons/map.svg";
// import microscopeIcon from "./../assets/icons/microscope.svg";
import musicIcon from "./../assets/icons/music.svg";
// import moleculeIcon from "./../assets/icons/molecule.svg";
// import paintIcon from "./../assets/icons/paint.svg";
import personIcon from "./../assets/icons/person.svg";
import presidentIcon from "./../assets/icons/president2.svg";
import quillIcon from "./../assets/icons/quill.svg";
import scholarIcon from "./../assets/icons/scholar.svg";
// import shieldIcon from "./../assets/icons/shield.svg";
// import starIcon from "./../assets/icons/star.svg";
// import swordsIcon from "./../assets/icons/swords.svg";
// import telescopeIcon from "./../assets/icons/telescope.svg";
// import testTubeIcon from "./../assets/icons/test-tube.svg";
// import trendDownIcon from "./../assets/icons/trend-down.svg";
// import trophyIcon from "./../assets/icons/trophy.svg";
// import universityIcon from "./../assets/icons/university.svg";
// import virusIcon from "./../assets/icons/virus.svg";

export const IconRegistry = ({ iconName }) => {
  switch (iconName.trim()) {
    // case 'atom': return <Atom/>;
    // case 'book': return <Book/>;
    // case 'books': return <Books/>;
    // case 'coin': return <Coin/>;
    case "crown":
      return <img src={crownIcon} alt="crown" style={{height:'1em'}} />;
    case "culture":
      return (
        <img
          src={cultureIcon}
          alt="culture"
          style={{ transform: "rotate(-45deg)", height:'.9em'}}
        />
      );
    // case 'idea': return <Idea/>;
    case "map":
      return <img src={mapIcon} alt="map" style={{height:'.9em'}} />;
    // case 'microscope': return <Microscope/>;
    // case 'molecule': return <Molecule/>;
    case "music":
      return (
        <img
          src={musicIcon}
          alt="music"
          style={{ transform: "rotate(-45deg)" , height:'.9em'}}
        />
      );
    // case 'paint': return <Paint/>;
    case "person":
      return <img src={personIcon} alt="person" style={{height:'.9em'}} />;
    case "president":
      return <img src={presidentIcon} alt="president" style={{height:'.9em'}} />;
    case "quill":
      return (
        <img
          src={quillIcon}
          alt="quill"
          style={{ transform: "rotate(-30deg)", height:'.8em'}}
        />
      );
    case "scholar":
      return (
        <img
          src={scholarIcon}
          alt="scholar"
          style={{ transform: "rotate(-45deg)", height:'1.1em'}}
        />
      );
    // case 'shield': return <Shield/>;
    // case 'star': return <Star/>;
    // case 'swords': return <Swords/>;
    // case 'telescope': return <Telescope/>;
    // case 'testTube': return <Test-tube/>;
    // case 'trendDown': return <Trend-down/>;
    // case 'trophy': return <Trophy/>;
    // case 'university': return <University/>;
    // case 'virus': return <Virus/>;
    default:
      return "*";
  }
};
