import { shallow } from 'enzyme';
import React from "react";
import SelectOrganization from '../select-organization-view';

it("renders without crashing", () => {
    shallow(<SelectOrganization />);
});