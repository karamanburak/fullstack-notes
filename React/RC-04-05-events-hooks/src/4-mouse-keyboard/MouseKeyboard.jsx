import React, { useState } from "react";
import { FaGooglePlus, FaReact } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
const MouseKeyboard = () => {



    return (
        <div

            className="container text-center mt-4 d-flex flex-column align-items-center"
        >
            <h2 className="text-danger">MOUSE EVENTS</h2>
            <p>X ve Y</p>
            <p className="text-danger fw-bold">
                { } { }
            </p>
            <div
                className="bg-success text-light w-50 p-4"
                id="coord"

            >
            <HiOutlineDesktopComputer /> KOORDİNATLAR <FaReact /> <FaGooglePlus /> 
            </div>
            <div>
                <h2 className="text-danger mt-4">
                    Keyboard-Clipboard Events{" "}
                    <span className="text-primary">{ }</span>
                </h2>

                <input
                    type="text"
                    className="form-control"

                />
            </div>
            <div
                id="todo-1"
                className="bg-success text-light w-50 p-4"

            >
                todo item 1
            </div>

        </div>
    );
};

export default MouseKeyboard;