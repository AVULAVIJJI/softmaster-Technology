import React from "react";
import { Link } from "react-router-dom";
import "./TrendingCourses.css";

// ⭐ IMPORT IMAGES
import awsImg from "../assets/images/aws.jpeg";
import devopsImg from "../assets/images/awsdevops.jpeg";
import azureImg from "../assets/images/azure.jpg";

// ⭐ IMPORT BANNER IMAGE
// import bannerImg from "../assets/images/trending.png"; 
// rename your uploaded image to banner-trending.jpg

const TrendingCourses = () => {
  const trendingData = [
    { 
      title: "AWS",
      slug: "aws",
      img: awsImg,
      desc:
        "The complete cloud computing platform provided by Amazon is known as Amazon Web Services (AWS).",
    },
    {
      title: "AWS DevOps",
      slug: "awsdevops",
      img: devopsImg,
      desc:
        "AWS DevOps combines AWS cloud services and DevOps practices for automation and CI/CD pipelines.",
    },
    {
      title: "Azure",
      slug: "azure",
      img: azureImg,
      desc:
        "Azure is Microsoft’s cloud computing platform providing VMs, databases, networking and AI services.",
    },
  ];

  return (
    <>
      {/* ⭐ TOP BANNER SECTION */}
      {/* <div className="banner-wrapper">
        <img src={bannerImg} alt="Trending Banner" className="banner-image" />

        <div className="banner-content">
          <h1>Trending Courses</h1>
          <p>
            <Link to="/">Home</Link> &nbsp; ➜ &nbsp; Trending Courses
          </p>
        </div>
      </div> */}

      {/* ⭐ TRENDING COURSES SECTION */} 
      <section className="trend-section">
        <h1 className="trend-title">Upskill with Our Trending Courses</h1>

        <div className="trend-container">
          {trendingData.map((item, index) => (
            <div className="trend-card" key={index}>
              
              {/* IMAGE */}
              <img src={item.img} alt={item.title} className="trend-image" />

              {/* TITLE */}
              <h2 className="trend-name">{item.title}</h2>

              {/* DESCRIPTION */}
              <p className="trend-desc">{item.desc}</p>

              {/* BUTTON */}
              <Link to={`/course/${item.slug}`}>
                <button className="learn-btn">Learn more</button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default TrendingCourses;
