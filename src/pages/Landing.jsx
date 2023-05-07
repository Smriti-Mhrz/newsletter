import React, { useEffect, useState } from "react";
import { getNews } from "../service/api";
import Button from "@mui/material/Button";
import { Link } from '@mui/material';

export const Landing = () => {
  const [newsData, setNewsdata] = useState([]);
  useEffect(() => {
    async function fetchNews() {
      const response = await getNews();
      setNewsdata(response.data.articles.slice(0, 10));
    }
    fetchNews();
  }, []);
  // const tophead = newsData.data.articles;
  // console.log(tophead.title);
  // const title= document.getElementById('title');
  // const image =document.getElementById('urlToImage');

  return (
    <div className="landing__wrapper">
      {newsData.map((item) => {
        return (
          <>
            <div className="wrapper-card">
              <div className="card-title">
                <h1>{item.title}</h1>
              </div>
              <div className="date">
                <p>{item.publishedAt}</p>
              </div>
              <div className="card-image">
                <img src={item.urlToImage} alt="NewsImage" />
              </div>
              <div className="desc">
                <span>{item.description.slice(0, 100) + "...."}</span>
              </div>
              <Link
                component="button"
                variant="contained" className="button"
                onClick={() => {
                  console.info("I'm a button.");
                }}
              >
                Button Link
              </Link>
              {/* <Button variant="contained" color="success" className="button">
                Read More
              </Button> */}

              {/*             
            <div className="wrapper-topheadlines">
            <div className="topheadlines-image">
                <img src={item.urlToImage} alt="NewsImage" />
              </div>
              <div className="title">
                <h3>{item.title}</h3>
              </div>
            </div> */}
            </div>
          </>
        );
      })}
      <div className="must-read">
        <h3>Must Read</h3>
      </div>
    </div>
  );
};
