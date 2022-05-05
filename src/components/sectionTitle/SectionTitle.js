import React from "react";
import "./SectionTitle.css";
const Sectiontitle = (props) => {
  return <h2 className="section-title">{props.children}</h2>;
};

export default Sectiontitle;
