mport React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe('App Component', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

  it('contains the Notifications component', () => {
    expect(wrapper.find(Notifications).length).toBe(1);
  });

  it('contains the Header component', () => {
    expect(wrapper.find(Header).length).toBe(1);
  });

  it('contains the Login component', () => {
    expect(wrapper.find(Login).length).toBe(1);
  });

  it('contains the Footer component', () => {
    expect(wrapper.find(Footer).length).toBe(1);
  });

  it('does not contain the CourseList component by default', () => {
    expect(wrapper.find(CourseList).length).toBe(0);
  });

  describe('when isLoggedIn is true', () => {
    beforeEach(() => {
      wrapper = shallow(<App isLoggedIn={true} />);
    });

    it('does not display the Login component', () => {
      expect(wrapper.find(Login).length).toBe(0);
    });

    it('contains the CourseList component', () => {
      expect(wrapper.find(CourseList).length).toBe(1);
    });
  });
});

