import React from "react";
import { useSelector } from "react-redux";
import contentData from '../Data/Menu.json';

const Home = () => {
    const { language } = useSelector((state) => state.language);
    const content = contentData[language].content.home;

    return <div>{content}</div>;
};

export default Home;
