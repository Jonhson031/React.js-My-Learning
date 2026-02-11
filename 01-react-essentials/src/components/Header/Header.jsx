import image from "../../assets/react-core-concepts.png";
import './Header.css';

const descriptions = ["Fundemential", "Core", "Crucial"];

const getRandomInt = function (max) {
  return Math.floor(Math.random() * (max + 1));
};


// ? React components - should always be Capitalized and return JSX
function Header() {
  // Header is nested (child) component
  return (
    <header>
      {/* dynamically loading image */}
      <img src={image} alt="Stylized atom" />
      <h1>Essentials</h1>
      <p>
        {/* dynamic component 
          Important: if-statements, for-loops, function definitions and other
          block statements are not allowed here!  Only expressions that directly produce a value.*/}
        {descriptions[getRandomInt(descriptions.length - 1)]} React concepts you
        will need for almost any app you are going to build!
      </p>
    </header>
  );
}
export default Header;
