import { shallow } from 'enzyme';
import React from "react";
import Loading from '../loading';

it("renders without crashing", () => {
    shallow(<Loading />);
});