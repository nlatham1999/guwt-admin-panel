import { shallow } from 'enzyme';
import App from '../app.js';
import React from "react";

it("renders without crashing", () => {
    shallow(<App />);
});