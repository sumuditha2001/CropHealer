import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid2";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    navigate("/home");
  };

  useEffect(() => {
    console.log(password, password.length);
  }, [password]);

  return (
    <Grid
      container
      sx={{
        paddingLeft: "0px",
        paddingRight: "0px",
        backgroundColor: "lightblue",
      }}
      style={{ height: "100vh" }}
      direction="column"
    >
      <Grid
        item
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        xs={12}
        sm={12}
        md={12}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // Stack items vertically
            alignItems: "center", // Center horizontally
          }}
        >
          <Typography
            sx={{
              alignItems: "center",
              fontSize: "5rem",
              color: "blue",
              fontWeight: 700,
            }}
          >
            CropHealer
          </Typography>
          <Typography
            sx={{
              fontSize: "2rem",
              color: "blue",
            }}
          >
            Cure Your Plants
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        xs={12}
        sm={12}
        md={12}
      >
        <Box
          style={{
            height: "100%",
            justifyContent: "center",
          }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={handleUsername}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={handlePassword}
          />
          <Button
            variant="contained"
            disabled={password.length === 8 ? false : true}
            onClick={handleSubmit}
            value="Login"
          >
            Login
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
