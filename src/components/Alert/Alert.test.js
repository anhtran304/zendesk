import React from "react";
import { create } from "react-test-renderer";

import Alert from "./index.js";

describe("TicketDetail component", () => {

  it("renders the expected message ", () => {
      const component = create(<Alert message="Test"/>);
      const rootInstance = component.root;
      const alertComponent = rootInstance.findByType(Alert);
      // Expect rendered data to be the same with props data
      expect(alertComponent.props.message).toBe("Test");
  });

});
