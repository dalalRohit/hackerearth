import React, { useState } from "react";
import Modal from "./Modal";
import {
  Card,
  Chip,
  CardHeader,
  Typography,
  CardMedia,
  CardContent,
  makeStyles,
  CardActions,
} from "@material-ui/core";
const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 400,
    minWidth: 400,
    minHeight: 400,
    maxHeight: 500,
    cursor: "pointer",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));
export default function RecipeCard(props) {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const { id, name, image, category, label, price, description } = props.data;
  return (
    <>
      <Card onClick={handleClickOpen} raised className={classes.root} key={id}>
        <CardHeader
          title={`${name} - ${price}`}
          subheader={`category - ${category}`}
        />

        <CardMedia className={classes.media} image={`${image}`} title={name} />

        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </CardContent>

        {label ? (
          <CardActions>
            <Chip label={label} variant="outlined" />
          </CardActions>
        ) : null}
      </Card>
      {open ? (
        <Modal open={open} prod={props.data} onclose={handleClose} />
      ) : null}
    </>
  );
}
