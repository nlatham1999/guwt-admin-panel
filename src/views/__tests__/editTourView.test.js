import { shallow } from 'enzyme';
import React from "react";
import EditTour from '../editTourView';

it("renders without crashing", () => {
    shallow(<EditTour />);
});