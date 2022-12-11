import * as React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export default function BasicCard({ onClick, selected, movieTitle }) {
  const visibility = React.useContext(VisibilityContext);
  return (
    <Grid
      sx={{ marginRight: "2rem" }}
      onClick={() => {
        onClick(visibility);
      }}
      tabIndex={0}
    >
      <Card
        sx={{
          minWidth: "200px",
          minHeight: "200px",
          width: "100%",
          background: "#000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
              color: "#fff",
              width: "80%",
              textAlign: "center",
            }}
            gutterBottom
          >
            {movieTitle}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
