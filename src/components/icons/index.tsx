import Close from "./components/close";
import Arrow from "./components/arrow";
import Search from "./components/search";
import Profile from "./components/profile";
import Highlights from "./components/highlights";
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

    case "highlights":
      return <Highlights height={height} width={width} />;

    case "arrow":
      return <Arrow height={height} width={width} />;

    case "close":
      return <Close height={height} width={width} />;
    default:
      return null;
  }
};

export default Icon;
