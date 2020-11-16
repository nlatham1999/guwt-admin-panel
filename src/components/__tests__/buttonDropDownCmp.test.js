import { shallow } from 'enzyme';
import React from "react";
import ButtonWithDropDownCmp from '../buttonDropDownCmp.js';

it("renders without crashing", () => {
    shallow(<ButtonWithDropDownCmp />);
});