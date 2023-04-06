/*
Protected component
Page for rendering dashboard component. Only visible if token is available
 */
import { Box } from "@mui/material";
import Cleave from "cleave.js/react";
import React, { useState } from "react";
import ButtonAppBar from "../components/navbar/ButtonAppBar";

function Dashboard() {
  const [date, setDate] = useState("");

  const onDateChange = (e) => {
    setDate(e.target.value);
  };
  return (
    <Box>
      <ButtonAppBar />
      <Cleave
        placeholder="MM/DD/YYYY"
        options={{ date: true, datePattern: ["m", "d", "Y"] }}
        onChange={onDateChange}
      />
    </Box>
  );
}

export default Dashboard;
