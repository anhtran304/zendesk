import React from "react";
import ReactDOM from 'react-dom';
import TicketDetail from "./index.js";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TicketDetail />, div);
  ReactDOM.unmountComponentAtNode(div);
});
