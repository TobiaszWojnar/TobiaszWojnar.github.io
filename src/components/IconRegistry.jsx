import atomIcon from "./../assets/icons/atom.svg";
import bookIcon from "./../assets/icons/book.svg";
import booksIcon from "./../assets/icons/books.svg";
import coinIcon from "./../assets/icons/coin.svg";
import crownIcon from "./../assets/icons/crown.svg";
import ideaIcon from "./../assets/icons/idea.svg";
import mapIcon from "./../assets/icons/map.svg";
import microscopeIcon from "./../assets/icons/microscope.svg";
import moleculeIcon from "./../assets/icons/molecule.svg";
import paintIcon from "./../assets/icons/paint.svg";
import personIcon from "./../assets/icons/person.svg";
import presidentIcon from "./../assets/icons/president.svg";
import quillIcon from "./../assets/icons/quill.svg";
import scholarIcon from "./../assets/icons/scholar.svg";
import shieldIcon from "./../assets/icons/shield.svg";
import starIcon from "./../assets/icons/star.svg";
import swordsIcon from "./../assets/icons/swords.svg";
import telescopeIcon from "./../assets/icons/telescope.svg";
import testTubeIcon from "./../assets/icons/test-tube.svg";
import trendDownIcon from "./../assets/icons/trend-down.svg";
import trophyIcon from "./../assets/icons/trophy.svg";
import universityIcon from "./../assets/icons/university.svg";
import virusIcon from "./../assets/icons/virus.svg";

// export const Crown = () => {
//   return <img src={crownIcon} alt="crown" height="16px" />;
// };
export const President = () => (
  <img src={presidentIcon} alt="president" height="15px" />
);

export const IconRegistry = ({ iconName }) => {
  switch (iconName.trim()) {
    // case 'atom': return <Atom/>;
    // case 'book': return <Book/>;
    // case 'books': return <Books/>;
    // case 'coin': return <Coin/>;
    case "crown":
      return <img src={crownIcon} alt="crown" height="16px" />;
    // case 'idea': return <Idea/>;
    // case 'map': return <Map/>;
    // case 'microscope': return <Microscope/>;
    // case 'molecule': return <Molecule/>;
    // case 'paint': return <Paint/>;
    case "person":
      return <img src={personIcon} alt="scholar" height="15px" />;
    case "president":
      return <President />;
    // case 'quill': return <Quill/>;
    case "scholar":
      return (
        <img
          src={scholarIcon}
          alt="scholar"
          height="17px"
          style={{ transform: "rotate(-45deg)" }}
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
