import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Accordion2 from './Accordion2';
describe ('Accordion2 Component', () => {
    const sections = [
        {
          title: 'Section 1',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
        {
          title: 'Section 2',
          content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
        },
        {
          title: 'Section 3',
          content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
        },
      ]
      it('renders without errors', () => {
          const div = document.createElement('div');
          ReactDOM.render(<Accordion2 />, div);
          ReactDOM.unmountComponentAtNode(div);
      })

      it('render an empty li',() => {
          const wrapper = shallow(<Accordion2 sections={sections}/>);
          expect(toJson(wrapper)).toMatchSnapshot();
      })

      it('render the first session',() => {
        const wrapper = shallow(<Accordion2 sections={sections} />);
        wrapper.find('button').at(0).simulate('click');
        expect(toJson(wrapper)).toMatchSnapshot();
      })
      it('render only open session',() => {
        const wrapper = shallow(<Accordion2 sections={sections} />);
        wrapper.find('button').at(1).simulate('click');
        wrapper.find('button').at(2).simulate('click');
        expect(toJson(wrapper)).toMatchSnapshot();

      })
})


