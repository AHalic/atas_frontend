import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo.svg";
import './style.css';

export default function AppHeader() {

    return (
        <div className="Header">
            <img src={logo} className="Logo"/>
        </div>
    );
}