import React from "react";
import ReactDOM from 'react-dom';
import { create } from "react-test-renderer";
import Table from "./index.js";

describe("Table component", () => {

  it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Table />, div);
  ReactDOM.unmountComponentAtNode(div);
  });
  
});