import { shallow } from 'enzyme';
import React from "react";
import SignupButton from "../signup-button";

it("renders without crashing", () => {
    shallow(<SignupButton />);
});