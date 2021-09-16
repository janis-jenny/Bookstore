import * as navStyles from '../style/Navbar.module.css';
import avatar from '../assets/avatar.png';

const {
  navWrapper,
  displayFlex,
  logo,
  navLinks,
  listItemOne,
  listItemTwo,
  userAvatar,
} = navStyles;

const Navbar = () => (
  <nav className={navWrapper}>
    <div className={displayFlex}>
      <h1 className={logo}>BookStore CMS</h1>
      <ul className={navLinks}>
        <li className={listItemOne}>BOOKS</li>
        <li className={listItemTwo}>CATEGORIES</li>
      </ul>
    </div>
    <div className={userAvatar}>
      <img alt="user avatar" src={avatar} />
    </div>
  </nav>
);

export default Navbar;
