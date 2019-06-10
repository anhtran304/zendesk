import React from "react";
import ReactDOM from 'react-dom';
import { create } from "react-test-renderer";
import Button from "./index.js";

describe("Button component", () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render( <Button /> , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it("renders the expected button ", () => {
        const bootstrapClassName = "btn-primary";
        const component = create(<Button bootstrapClassName={ bootstrapClassName }
                                text="Next" 
                                disabled = "YES" />);
        const rootInstance = component.root;
        const button = rootInstance.findByType("button");
        
        // Testing rendered data to be the same with props data
        // console.log(button.props);
        expect(button.props.className).toBe(`btn ${bootstrapClassName}`);
        expect(button.props.children).toBe("Next");
        expect(button.props.disabled).toBe(true);
    });

});


