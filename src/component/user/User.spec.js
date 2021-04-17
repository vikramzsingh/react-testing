import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import fetchMock from 'fetch-mock'
import User from "./User";

configure({
  adapter: new Adapter(),
});

const dummyUser = {
    id: 1,
    name: 'Leanne Graham',
    webSite: 'https://jsonplaceholder.typicode.com/users/1'
}

describe('User', () => {

    it('show the feched data', () => {
        fetchMock.getOnce('https://jsonplaceholder.typicode.com/users/1', {
            status: 200,
            body: dummyUser
        })
        const wrapper = shallow(<User id={1} />);
        // const text = wrapper.find("p").text();
        expect(wrapper.find("p").text()).toEqual('Loading!');
    })

})
