import '../../styles/layout/header.css';
import Logo from '../../components/Logo';
import Search from '../../components/Search';

function Header() {
  return (
    <header className="header">
      <Logo />
      <Search />
    </header>
  );
}
export default Header;
