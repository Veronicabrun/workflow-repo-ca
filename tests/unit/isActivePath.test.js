import { describe, expect, it } from "vitest";
import { isActivePath } from "../../js/utils/userInterface.js";

describe("isActivePath", () => {
  it("should return true when the current path matches href exactly", () => {
    expect(isActivePath("/about", "/about")).toBe(true);
  });

  it('should return true for root path ("/") when path is "/"', () => {
    expect(isActivePath("/", "/")).toBe(true);
  });

  it('should return true for root path ("/") when path is "/index.html"', () => {
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("should return true when the current path includes the href", () => {
    expect(isActivePath("/dashboard", "/dashboard/settings")).toBe(true);
  });

  it("should return false when paths don’t match", () => {
    expect(isActivePath("/about", "/contact")).toBe(false);
  });
});
