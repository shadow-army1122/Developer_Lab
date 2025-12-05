import useIsMobile from "./hooks/useIsMobile";
import DesktopApp from "./DesktopApp";
import MobileApp from "./MobileApp";

export default function App() {
  const isMobile = useIsMobile();
  return isMobile ? <MobileApp /> : <DesktopApp />;
}
