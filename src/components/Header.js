import iconSun from '../assets/icon-sun.svg';
import iconMoon from '../assets/icon-moon.svg';

const Header = (props) => {
  const isDark = props.theme === 'dark';

  const clickHandler = () => {
    props.onToggleTheme(isDark ? 'light' : 'dark');
  };

  return (
    <header className="header row">
      <h1>Todo</h1>
      <button className="btn" onClick={clickHandler}>
        <img
          src={isDark ? iconSun : iconMoon}
          alt={isDark ? 'Light' : 'Dark'}
          className="btn__img"
        />
      </button>
    </header>
  );
};

export default Header;
