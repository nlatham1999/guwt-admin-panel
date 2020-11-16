import { shallow } from 'enzyme';
import React from "react";
import LoginButton from '../login-button.js';

it("renders without crashing", () => {
    shallow(<LoginButton />);
});