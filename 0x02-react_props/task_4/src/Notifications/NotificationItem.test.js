// src/Notifications/NotificationItem.test.js
import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import Notifications from './Notifications';

describe('NotificationItem Component', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('renders correct html with dummy type and value props', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.find('li').text()).toBe('test');
    expect(wrapper.find('li').prop('data-notification-type')).toBe('default');
  });

  it('renders correct html with dummy html prop', () => {
    const wrapper = shallow(<NotificationItem type="urgent" html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.find('li').prop('data-notification-type')).toBe('urgent');
    expect(wrapper.find('li').html()).toContain('<u>test</u>');
  });

   it('renders NotificationItem components', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).length).toBe(3);
  });

  it('first NotificationItem element renders the correct html', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).at(0).html()).toContain('New course available');
  });
});
