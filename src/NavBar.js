import { AppBar, Toolbar, Box } from "@mui/material";
import Logo from "./logo.svg"; // Make sure to import your logo file

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#9EA3B0" }}>
      <Toolbar>
        <Box display="flex" alignItems="center">
          <img
            src={Logo}
            alt="Issuestack Logo"
            style={{ height: "40px", marginRight: "16px" }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
