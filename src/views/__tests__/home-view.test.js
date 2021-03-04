import { shallow } from 'enzyme';
import React from "react";
import Home from '../home-view.js';

it("renders without crashing", () => {
    shallow(<Home />);
});