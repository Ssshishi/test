import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();  
  //这个在不在这个文档里面  真就通过
});
// 单元测试  APP.test.js 是对组件的测试

