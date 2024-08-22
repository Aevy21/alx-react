import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CourseList from './CourseList';

describe('CourseList Component', () => {
  it('renders CourseList component without crashing', () => {
    render(<CourseList />);
    expect(screen.getByRole('table', { name: 'CourseList' })).toBeInTheDocument();
  });

  it('renders the 5 different rows', () => {
    render(<CourseList />);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(5);
  });
});

