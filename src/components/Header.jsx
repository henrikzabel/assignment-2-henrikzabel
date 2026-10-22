import menuIcon from "../assets/menu_icon.png";
import searchIcon from "../assets/search_icon.png";
import { TaskCounter } from "./TaskCounter";

export function Header({ total, completed }) {
  return (
    <header className="site-header">
      <div className="search-section">
        <img className="menu-icon" src={menuIcon} alt="menu" />
        <search className="search-box">
          <input type="text" placeholder="Quick find" aria-label="Quick find" />
          <img className="search-icon" src={searchIcon} alt="" />
        </search>
      </div>

      <TaskCounter total={total} completed={completed} />
    </header>
  );
}
