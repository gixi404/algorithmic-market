import { scrollToSection } from "../utils/commonFn";
import { expect, describe, it } from "vitest";
import { JSDOM } from "jsdom";

const DOM = new JSDOM("<!doctype html><html><body></body></html>");
global.document = DOM.window.document;

describe("Test: scrollToSection 🏳️", function () {
  it("Es una función", () => {
    expect(typeof scrollToSection).toBe("function");
  });

  it("Tiene ID", () => {
    expect(() => scrollToSection()).toThrowError("ID is required");
  });

  it("ID es una string", () => {
    expect(() => scrollToSection(123)).toThrowError("ID must be a string");
  });

  it("ID es una string pero su valor es undefined", () => {
    expect(() => scrollToSection("falseId")).toThrowError("ID is undefined");
  });

  it("ID existe y es una string", () => {
    expect(() => scrollToSection("contact")).toBeDefined();
  });
});
