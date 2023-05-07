import React, { useEffect, useState } from "react";
import { getNews } from "../service/api";
// import { Link } from "react-router-dom";
import { NewsCard } from "../components/NewsCard";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "../assets/icons/icons";

export const Landing = () => {
  const [newsData, setNewsdata] = useState([]);
  const [mustRead, setMustRead] = useState([]);
  const [slice, setSlice] = useState(100);
  const [sliceread, setSliceRead] = useState(30);
  useEffect(() => {
    async function fetchNews() {
      const response = await getNews();
      setNewsdata(response.data.articles.slice(0, 10));
      setMustRead(response.data.articles.slice(10, 17));
    }
    fetchNews();
  }, []);
  useEffect(() => {
    const handleCategory = () => {
      if (window.innerWidth > 769) {
        setSlice(200);
        setSliceRead(90);
      } else {
        setSlice(100);
        setSliceRead(30);
      }
    };
    window.addEventListener("resize", handleCategory);
  });
  return (
    <div className="landing">
      <div className="landing__wrapper">
        {newsData.map((item) => {
          return (    
            <NewsCard title={item.title} publishedAt={item.publishedAt} image={item.urlToImage} desc={item.description.slice(0,slice)} url={item.url}/>          
          );
        })}
      </div>

          <h3>Must Read</h3>
        <div className="must-read">
          {mustRead.map((item) => {
            return (
              <div className="wrapper-topheadlines">
                <div className="topheadlines-image">
                  <img src={item.urlToImage} alt="NewsImage" />                  
                </div>
                
                <div className="title">
                 <h4>{item.title.slice(0,sliceread) + ".."}</h4>
                </div>
              </div>
            );
          })}
        </div>
        <div className="wrapper-socialmedia">
        <h3>Find Us Here</h3>
        <ul>
          <li><FacebookIcon fontSize="large" color="primary"/></li>
          <li><TwitterIcon fontSize="large" color="primary"/></li>
          <li><InstagramIcon fontSize="large" color="secondary"/></li>
        </ul>
      </div>
    </div>
  );
};
