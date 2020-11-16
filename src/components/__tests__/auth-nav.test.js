import { shallow } from 'enzyme';
import React from "react";
import AuthNav from '../auth-nav.js';

it("renders without crashing", () => {
    shallow(<AuthNav />);
});