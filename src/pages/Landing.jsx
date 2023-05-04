import React, { useEffect, useState } from "react";
import { getNews } from "../service/api";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const Landing = () => {
  const [newsData, setNewsdata] = useState([]);
  useEffect(() => {
    async function fetchNews() {
      const response = await getNews();
      setNewsdata(response.data.articles.slice(0, 6));
    }
    fetchNews();
  }, []);

  return (
    <div className="landing__wrapper">
      {newsData.map((item) => {
        return (
          <div className="wrapper-card">
            <div className="card-title">
              <h1>{item.title}</h1>
            </div>
            <div className="card-photo">
              <img src={item.urlToImage} alt="NewsPhoto" />
            </div>
            <div className="desc">
              <span>{item.description.slice(0, 90) + "...."}</span>
            </div>
            {/* <div className="date">
                <p>{item.publishedAt}</p>
              </div> */}
              <Button variant="contained" color="success" className="button">
                Read More
              </Button>
          </div>
        );
      })}
    </div>
  );
};
