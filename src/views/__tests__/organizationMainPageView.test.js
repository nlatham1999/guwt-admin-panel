import { shallow } from 'enzyme';
import React from "react";
import OrganizationMainPage from '../organizationMainPageView';

const orgData = {
    "name": "test"
}

it("renders without crashing", () => {
    shallow(<OrganizationMainPage organizationData={orgData}/>);
});