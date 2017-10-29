import React from 'react';
import {shallow} from 'enzyme';
import App from '../src/App'
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });

describe("App", () => {
    it("should display Hello World text", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains("Hello World!")).toBe(true);
    });
});