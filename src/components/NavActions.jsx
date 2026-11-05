import NotificationBadge from "./NotificationBadge";
import ThemeToggle from "./ThemeToggle";
import UserMenu from "./UserMenu";

function NavActions() {
  return (
    <div className="flex items-center gap-5">
      <NotificationBadge />
      <ThemeToggle />
      <UserMenu />
    </div>
  );
}
export default NavActions;
