import "@fontsource/barlow";
import { startup } from "./src/utils";

if (false) {
  if (
    typeof window !== "undefined" &&
    window.location.pathname.indexOf("/maintenance") < 0 &&
    window.location.pathname.indexOf("/admin") < 0 &&
    window.location.pathname.indexOf("#recovery_token=") < 0
  ) {
    window.location = "/maintenance";
  }
}

export const onClientEntry = () => {
  window.onload = startup.bind(null, null);
};
