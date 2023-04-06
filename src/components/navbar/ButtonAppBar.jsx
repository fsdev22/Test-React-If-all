/*
Topbar in dashboard page
*/

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import {
  COMPONENT_TYPES,
  EDGES,
  LABELS,
  SIGNOUT,
  SIZES,
} from "../../services/utils/constantValues";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/slices/auth/authSlice";

export default function ButtonAppBar() {
  const { t } = useTranslation();
  const naviagte = useNavigate();
  const dispatch = useDispatch();
  const handlelogout = async () => {
    dispatch(authActions.logout());
    naviagte("/");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position={COMPONENT_TYPES.staticPosition}>
        <Toolbar>
          <IconButton
            size={SIZES.large}
            edge={EDGES.start}
            color={COMPONENT_TYPES.inherit}
            aria-label={LABELS.menuLabel}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component={COMPONENT_TYPES.div}
            sx={{ flexGrow: 1 }}
          >
            {t(LABELS.ckdotcom)}
          </Typography>
          <Button onClick={handlelogout} color={COMPONENT_TYPES.inherit}>
            {t(SIGNOUT.signoutBtn)}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
