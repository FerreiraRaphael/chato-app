import React from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { AppContext } from "../context/appContext";
// import { addNotifications, resetNotifications } from "../features/userSlice";
import "./Sidebar.css";

function Sidebar() {
    const rooms = ["first room", "second room", "third room"];
    
    return (
        <>
            <h2>Available rooms</h2>
            <ListGroup>
                 {rooms.map((room, idx) => (
                    <ListGroup.Item key={idx}>{room}</ListGroup.Item>
                ))}
            </ListGroup>
            <h2>Members</h2>
            
        </>
    );
}

export default Sidebar;