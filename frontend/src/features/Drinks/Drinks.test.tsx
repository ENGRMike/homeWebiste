import React from "react";
import { shallow } from "enzyme";

import { Drinks } from "./Drinks";

let component: any;

describe("Drinks", () => {
  beforeEach(() => {
    component = shallow(<Drinks />);
  });

  it("Renders correctly", () => {});
});
