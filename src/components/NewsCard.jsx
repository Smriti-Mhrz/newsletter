import React from "react";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NewsCard = ({ title, publishedAt, image, desc, url }) => {
  const navigate = useNavigate();

  return (
    <div className="wrapper-card">
      <div className="card-title">
        <h1>{title}</h1>
      </div>
      <div className="date">
        <p>{publishedAt}</p>
      </div>
      <div className="card-image">
        <img src={image} alt="NewsImage" />
      </div>
      <div className="desc">
        <span>{desc}</span>
      </div>
      <Link
        component="button"
        className="button"
        onClick={() => {
            window.location.assign(url);
        }}
      >
        Read More
      </Link>
    </div>
  );
};
