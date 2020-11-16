import { shallow } from 'enzyme';
import React from "react";
import HomeContent from '../home-content';
import Footer from '../footer';
import NavBar from '../nav-bar';
import Hero from '../hero';
import Loading from '../loading';

it("HomeContent renders without crashing", () => {
    shallow(<HomeContent />);
});

it("HomeContent renders without crashing", () => {
    shallow(<Footer />);
});

it("HomeContent renders without crashing", () => {
    shallow(<NavBar />);
});

it("HomeContent renders without crashing", () => {
    shallow(<Hero />);
});

it("HomeContent renders without crashing", () => {
    shallow(<Loading />);
});