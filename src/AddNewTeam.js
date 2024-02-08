import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  ThemeProvider,
} from "@mui/material";
import styled from "@emotion/styled";
import { createTheme } from "@mui/material/styles";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const StyledForm = styled("form")`
  width: 80%;
  max-width: 400px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: #e5eceb;
  text-align: center;
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 16px;
  width: 100%;
`;

const theme = createTheme({
  palette: {
    primary: {
      main: "#9EA3B0",
    },
  },
});

const AddNewTeam = () => {
  const [teamName, setTeamName] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);
  const [alertText, setAlerttext] = useState(
    "Please provide a valid team name and description."
  );
  const [alertType, setAlertType] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (teamName === "" || description === "") {
      setAlertType(1);
      setAlerttext("Please provide a valid team name and description.");
      setOpen(true);
    } else {
      setAlertType(0);
      setOpen(true);
      setAlerttext("Team Added Successfully");
      setTeamName("");
      setDescription("");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledContainer>
        <StyledForm onSubmit={handleSubmit}>
          <Typography variant="h4" gutterBottom>
            Add a New Team
          </Typography>
          <StyledTextField
            label="Team Name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Description"
            multiline
            rows={4}
            rowsMax={8}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            InputProps={{ disableUnderline: true }}
            sx={{ borderRadius: 1 }}
          />
          <Button type="submit" variant="contained" color="primary">
            Add
          </Button>

          <Collapse in={open}>
            <Alert
              severity={alertType === 0 ? "success" : "error"}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              {alertText}
            </Alert>
          </Collapse>
        </StyledForm>
      </StyledContainer>
    </ThemeProvider>
  );
};

export default AddNewTeam;
