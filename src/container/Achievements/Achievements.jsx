import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Achievements.scss";

const Achievements = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [achievements, setAchievements] = useState([]);
  const [filterAchievements, setFilterAchievements] = useState([]);

  useEffect(() => {
    const query = '*[_type == "achievements"]';

    client.fetch(query).then((data) => {
      setAchievements(data);
      setFilterAchievements(data);
    });
  }, []);

  const handleAchievementFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === "All") {
        setFilterAchievements(achievements);
      } else {
        setFilterAchievements(
          achievements.filter((achievement) =>
            achievement.tags.includes(item)
          )
        );
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My <span>Achievements</span> & Awards
      </h2>
      <div className="app__achievements-filter">
        {["Academic", "Professional", "Competitions", "Certifications", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleAchievementFilter(item)}
              className={`app__achievements-filter-item app_flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__achievements-portfolio"
      >
        {filterAchievements.map((achievement, index) => (
          <div className="app__achievements-item app__flex" key={index}>
            <div className="app__achievements-img app__flex">
              <img src={urlFor(achievement.imgUrl)} alt={achievement.title} />
            </div>
            <div className="app__achievements-content app__flex">
              <h4 className="bold-text">{achievement.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {achievement.description}
              </p>
              {achievement.date && (
                <p className="p-text" style={{ marginTop: 5, fontStyle: "italic" }}>
                  {achievement.date}
                </p>
              )}
              <div className="app__achievements-tag app__flex">
                <p className="p-text">{achievement.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Achievements, "app__achievements"),
  "achievements",
  "app__Pbg"
);
