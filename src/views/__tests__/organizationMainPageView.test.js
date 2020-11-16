import { shallow } from 'enzyme';
import React from "react";
import OrganizationMainPage from '../organizationMainPageView';

it("renders without crashing", () => {
    shallow(<OrganizationMainPage />);
});