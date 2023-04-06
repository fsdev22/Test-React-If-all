import "./styles/ccs/App.css";
import RouteConfig from "./routing/RouteConfig";
import { Box } from "@mui/material";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.addEventListener("contextmenu", (e) => e.preventDefault());
    function ctrlShiftKey(e, keyCode) {
      return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
    }
    document.onkeydown = (e) => {
      if (
        e.keyCode === 123 ||
        ctrlShiftKey(e, "I") ||
        ctrlShiftKey(e, "J") ||
        ctrlShiftKey(e, "C") ||
        (e.ctrlKey && e.keyCode === "U".charCodeAt(0))
      )
        return false;
    };
  }, []);
  return (
    <Box>
      <RouteConfig />
    </Box>
  );
}

export default App;
