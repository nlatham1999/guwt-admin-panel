import { shallow } from 'enzyme';
import React from "react";
import AdminTutorialButton from '../admin-tutorial-button';

it("renders without crashing", () => {
    shallow(<AdminTutorialButton />);
});