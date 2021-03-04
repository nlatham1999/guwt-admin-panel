import { shallow } from 'enzyme';
import React from "react";
import OrganizationMainPage from '../organization-main-page-view';

const orgData = {
    "name": "test"
}

it("renders without crashing", () => {
    shallow(<OrganizationMainPage organizationData={orgData}/>);
});