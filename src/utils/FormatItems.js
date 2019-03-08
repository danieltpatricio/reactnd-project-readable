import React from "react";
import udacity from "../assets/udacity.png";
import redux from "../assets/redux.png";
import react from "../assets/react.png";
import profile from "../assets/profile.png";

export const formatDate = timestamp => {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return (
    " " + d.toLocaleDateString() + " às " + time.substr(0, 5) + time.slice(-2)
  );
};

export const formatObject = array => {
  array = array.reduce((array, item) => {
    array[item.id] = item;
    return array;
  }, {});

  return array;
};

export const getIcons = name => {
  switch (name) {
    case "react":
      return <img alt={name} className="categories-list-icons" src={react} />;
    case "redux":
      return <img alt={name} className="categories-list-icons" src={redux} />;
    case "udacity":
      return <img alt={name} className="categories-list-icons" src={udacity} />;
    case "profile":
      return <img alt={name} src={profile} />;
    default:
      return <h2>(Sem Imagem)</h2>;
  }
};

export const generateUID = () => {
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
};
