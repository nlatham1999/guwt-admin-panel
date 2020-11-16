import { shallow } from 'enzyme';
import React from "react";
import SelectOrganization from '../selectOrganizationView';

it("renders without crashing", () => {
    shallow(<SelectOrganization />);
});