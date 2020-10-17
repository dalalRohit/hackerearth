import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Grid, Typography } from "@material-ui/core";
import Card from "./components/RecipeCard";

const Hero = ({ children }) => {
  return <div className="hero">{children}</div>;
};
export default function App() {
  const [loading, setLoading] = useState(false);
  const [rec, setRec] = useState([]);

  const fetchRecipes = () => {
    setLoading(true);
    axios
      .get("http://starlord.hackerearth.com/recipe")
      .then((res) => {
        setRec(res.data);
        setLoading(false);
      })
      .catch((err) => {
        alert(err.message);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchRecipes();
  }, []);
  return (
    <Container disableGutters>
      <Hero>
        <Typography align="center" variant="h4" color="textPrimary">
          MyRecipeApp
        </Typography>
      </Hero>
      {loading ? (
        "Loading"
      ) : (
        <Grid container justify="space-evenly" spacing={3}>
          {rec.map((r) => {
            return (
              <Grid item key={r.id}>
                <Card data={r} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Container>
  );
}
