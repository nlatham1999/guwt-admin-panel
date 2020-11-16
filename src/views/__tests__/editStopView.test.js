import { shallow } from 'enzyme';
import React from "react";
import EditStop from '../editStopView';

it("renders without crashing", () => {
    shallow(<EditStop />);
});