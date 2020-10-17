import React from "react";
import { Avatar, Typography } from "@material-ui/core";

const Desc = ({ prod }) => {
  return (
    <>
      <Typography variant="caption" color="textSecondary">
        Product Summary
      </Typography>
      <div className="summary">
        <div className="first">
          <Avatar alt="Remy Sharp" size="large" src={prod.image} />
          <Typography variant="h5">{prod.name}</Typography>
        </div>
        <Typography variant="caption" color="textSecondary">
          {prod.description}
        </Typography>
        <div className="second">
          <Typography variant="h5">Price {prod.price}</Typography>
        </div>
      </div>
    </>
  );
};

export default Desc;
