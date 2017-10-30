import React from 'react';
import Adapter from '../setupTests';
import { shallow } from 'enzyme';
import App from './App';


describe('App', () => {
	const app = shallow(<App />);

	it('renders correctly', () => {
	   expect(app).toMatchSnapshot();
	});

	it('initialises the `state` with an empty list of gifts', () => {
	    expect(app.state().gifts).toEqual([]);
	});

	describe('when clicking the `add-gift` button', () => {

		beforeEach( () => {
			app.setState({ gifts: [] });
		});

		afterEach( () => {
			app.find('.btn-add').simulate('click');
		});
		it('adds a new gift to `state`', () => {
		    expect (app.state().gifts).toEqual([{ id: 1 }]); 
		});

		it('adds a new gift to the rendered list', () => {
			expect (app.find('.gift-list').children().length).toEqual(1);
		});

	});

});
