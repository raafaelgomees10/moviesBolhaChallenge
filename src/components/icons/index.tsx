import Search from "./components/search";
import Profile from "./components/profile";
import Notification from "./components/notification";

interface IconProps {
  icon: string;
  height?: number;
  width?: number;
}

const Icon = ({ icon, height, width }: IconProps) => {
  switch (icon) {
    case "search":
      return <Search height={height} width={width} />;
    case "profile":
      return <Profile height={height} width={width} />;
    case "notification":
      return <Notification height={height} width={width} />;
    default:
      return null;
  }
};

export default Icon;
