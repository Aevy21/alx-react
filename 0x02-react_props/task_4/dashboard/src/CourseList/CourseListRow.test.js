import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
  describe('When isHeader is true', () => {
    it('renders one cell with colspan = 2 when textSecondCell is not provided', () => {
      render(<CourseListRow isHeader={true} textFirstCell="Header 1" />);
      const headerCell = screen.getByText('Header 1');
      expect(headerCell).toBeInTheDocument();
      expect(headerCell).toHaveAttribute('colspan', '2');
    });

    it('renders two cells when textSecondCell is provided', () => {
      render(<CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell="Header 2" />);
      const headerCell1 = screen.getByText('Header 1');
      const headerCell2 = screen.getByText('Header 2');
      expect(headerCell1).toBeInTheDocument();
      expect(headerCell2).toBeInTheDocument();
    });
  });

  describe('When isHeader is false', () => {
    it('renders correctly two td elements within a tr element', () => {
      render(<CourseListRow isHeader={false} textFirstCell="Data 1" textSecondCell="Data 2" />);
      const dataCell1 = screen.getByText('Data 1');
      const dataCell2 = screen.getByText('Data 2');
      expect(dataCell1).toBeInTheDocument();
      expect(dataCell2).toBeInTheDocument();
    });
  });
});

