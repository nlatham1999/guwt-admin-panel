import { shallow } from 'enzyme';
import React from "react";
import DeleteOrganization from '../delete-organization';

it("renders without crashing", () => {
    shallow(<DeleteOrganization />);
});