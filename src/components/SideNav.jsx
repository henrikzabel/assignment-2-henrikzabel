import inboxIcon from "../assets/inbox_icon.png";
import calendarIcon from "../assets/calendar_icon.png";
import upcomingIcon from "../assets/upcoming_icon.png";

export function SideNav({ inboxCount }) {
  const navItems = [
    { id: "inbox", label: "Inbox", icon: inboxIcon, count: inboxCount },
    { id: "today", label: "Today", icon: calendarIcon, count: 5 },
    { id: "upcoming", label: "Upcoming", icon: upcomingIcon },
  ];
  const activeId = "inbox";

  return (
    <nav className="side-nav">
      <div className="nav-panel">
        <ul className="nav-list">
          {navItems.map((item) => {
            const isActive = item.id === activeId;
            return (
              <li
                key={item.id}
                className={isActive ? "nav-item active" : "nav-item"}
              >
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <img src={item.icon} alt="" />
                  <span>{item.label}</span>
                  {item.count !== undefined && (
                    <span className="task-count">{item.count}</span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
