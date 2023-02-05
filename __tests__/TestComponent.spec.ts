import { describe, expect, it } from "vitest";
import TestComponent from "../src/components/TestComponent.vue";
import { mount } from "@vue/test-utils";

describe("TestComponent", () => {
  const wrapper = mount(TestComponent);

  it("should render correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should have the awaited text", () => {
    expect(wrapper.text()).toBe("Try component");
  });
});
