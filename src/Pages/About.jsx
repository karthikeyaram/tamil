import React from "react";
import { useSelector } from "react-redux";
import contentData from '../Data/Menu.json';

const About = () => {
    const { language } = useSelector((state) => state.language);
    const content = contentData[language].content.about;

    return <div>{content}</div>;
};

export default About;
