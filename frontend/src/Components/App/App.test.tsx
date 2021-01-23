import React from "react";
import { shallow } from "enzyme";

import App from "./App";

let component: any;

describe("App", () => {
  beforeEach(() => {
    component = shallow(<App />);
  });

  it("Renders correctly", () => {
    expect(component).toMatchInlineSnapshot(`ShallowWrapper {}`);
  });
});
