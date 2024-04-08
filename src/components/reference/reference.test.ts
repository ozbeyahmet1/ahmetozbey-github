import { render } from "@testing-library/react";

// Import the component to be tested and its props
import Reference, { ReferenceProps } from "./index";

// Describe the test suite for the Reference component
describe("Reference component", () => {
  // Define mock props for the component
  const props: ReferenceProps = {
    name: "Test Name",
  };

  // Test case: Ensure that the component renders without crashing
  it("renders without crashing", () => {
    // Render the Reference component with mock props
    render(Reference(props));
  });

  // You can add more test cases here as needed
});
