import { shallow } from 'enzyme';
import React from "react";
import Home from '../homeView.js';

it("renders without crashing", () => {
    shallow(<Home />);
});