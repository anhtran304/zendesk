import React from "react";
import ReactDOM from 'react-dom';
import TicketList from "./index.js";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TicketList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
