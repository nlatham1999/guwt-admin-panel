import { shallow } from 'enzyme';
import React from "react";
import LogoutButton from "../logout-button";

it("renders without crashing", () => {
    shallow(<LogoutButton />);
});