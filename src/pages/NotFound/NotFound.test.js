import React from "react";
import { create } from "react-test-renderer";

import NotFound from "./index.js";
import Button from "../../components/Button";

describe("TicketDetail component", () => {

  it("renders the expected button ", () => {
      const component = create(<NotFound />);
      const rootInstance = component.root;
      const homeButton = rootInstance.findByType(Button);
      // Expect rendered data to be the same with props data
      expect(homeButton.props.text).toBe("Home");
  });

});
