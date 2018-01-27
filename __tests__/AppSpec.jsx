import React from 'react';
import {shallow} from 'enzyme';
import App from '../src/App'

describe("App", () => {
    it("should display Hello World text", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.contains("Hello World!")).toBe(true);
    });
});