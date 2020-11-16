import { shallow } from 'enzyme';
import React from "react";
import NavBar from "../nav-bar"

it("renders without crashing", () => {
    shallow(<NavBar />);
});