import React, { useState, useEffect } from "react";
import { Grid, Typography, TextField, InputLabel } from "@mui/material";
import background from "../assets/krists-luhaers-AtPWnYNDJnM-unsplash.jpg";
import BasicCard from "./cards";
import axios from "axios";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import LeftScroll from "./HorizontalScroll/LeftScroll";
import RightScroll from "./HorizontalScroll/RightScroll";
import Carousel from "react-material-ui-carousel";
import "./homepage.css";

function Homepage() {
  const [data, setData] = useState({});

  const [selected, setSelected] = useState([]);
  const [position, setPosition] = useState(0);
  const FetchMovies = async () => {
    try {
      const response = await axios.get(
        "http://www.omdbapi.com/?i=tt3896198&apikey=dc94d7df"
      );
      console.log(response);
      setData(response.data);
    } catch (err) {
      console.log(err);
    } finally {
    }
  };

  useEffect(() => {
    FetchMovies();
  }, []);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  console.log(data, "movie information");
  return (
    <Grid container spacing={2}>
      <Grid
        item
        container
        sx={{
          background: "#292929",
          width: "100%",
          //   padding: "2rem",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
        className="topNavLogo"
      >
        <Grid
          item
          xs={3}
          sm={3}
          md={3}
          lg={3}
          sx={{
            border: "1px solid #fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "4rem",
            marginTop: "2rem",
            marginBottom: "2rem",
            padding: ".5rem",
          }}
        >
          <Typography
            sx={{ color: "white", fontSize: "1.3em", fontWeight: "400" }}
          >
            MyTestApp
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        sx={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "90vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid sx={{ zIndex: "100", width: "20%", marginLeft: "4rem" }}>
          <Typography
            sx={{ color: "#fff", fontSize: "4em", fontWeight: "600" }}
          >
            Watch something incredible.
          </Typography>
        </Grid>
      </Grid>

      <Grid item container sx={{ margin: "2rem 0 2rem 4rem" }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{ marginBottom: "2rem" }}
        >
          <InputLabel>Search</InputLabel>
          <TextField sx={{ width: "95%" }} />
        </Grid>
      </Grid>

      <Grid item container sx={{ marginLeft: "4rem", width:"100%" }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{ marginBottom: "1rem" }}
        >
          <Typography variant="h6">{data.Genre}</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{ display: "flex", alignItems: "center", justifyContent:"center", width:"100%" }}
        >
          <BasicCard movieTitle={data.Title} onClick={handleClick} />
          <BasicCard movieTitle={data.Title} onClick={handleClick} />
          <BasicCard movieTitle={data.Title} onClick={handleClick} />
          <BasicCard movieTitle={data.Title} onClick={handleClick} />
          <BasicCard movieTitle={data.Title} onClick={handleClick} />
        </Grid>
      </Grid>

      <Grid item container sx={{ marginLeft: "4rem", width:"100%" }}>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{ marginBottom: "1rem" }}
        >
          <Typography variant="h6">{data.Genre}</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{ display: "flex", alignItems: "center", justifyContent:"center", width:"100%" }}
        >
          <BasicCard movieTitle={data.Title} />
          <BasicCard movieTitle={data.Title} />
          <BasicCard movieTitle={data.Title} />
          <BasicCard movieTitle={data.Title} />
          <BasicCard movieTitle={data.Title} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Homepage;
