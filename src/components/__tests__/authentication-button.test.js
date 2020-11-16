import { shallow } from 'enzyme';
import React from "react";
import AuthenticationButton from '../authentication-button';

it("renders without crashing", () => {
    shallow(<AuthenticationButton />);
});