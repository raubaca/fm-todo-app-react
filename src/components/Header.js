import iconSun from '../assets/icon-sun.svg';

const Header = () => {
  return (
    <header className="header row">
      <h1>Todo</h1>
      <button className="btn">
        <img src={iconSun} alt="Light" className="btn__img" />
      </button>
    </header>
  );
};

export default Header;
