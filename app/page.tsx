import React from 'react';
import UtilityNavbar from "@/app/components/UtilityNavbar/UtilityNavbar";
import HomePage from "@/app/components/HomePage";
import ActionBasedNavbar from "@/app/components/ActionBasedNavbar/ActionBasedNavbar";

const Home = () => {
    return (
        <>
            <UtilityNavbar/>
            {/*<ActionBasedNavbar/>*/}
            <HomePage/>
        </>
    );
};

export default Home;