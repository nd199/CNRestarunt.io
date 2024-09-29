import React from "react";
import styles from "./page.module.css";
import Main from "@/components/about-group/main/Main";
import Content1 from "@/components/about-group/content1/Content1";
import Content2 from "@/components/about-group/content2/Content2";

const About = () => {
    return (
        <div className={styles.container}>
            <Main/>
            <Content1/>
            <Content2/>
        </div>
    );
};

export default About;
