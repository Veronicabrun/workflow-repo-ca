import { describe, expect, it, beforeEach, afterEach } from "vitest";
import { getUsername, saveUser, clearStorage } from "../../js/utils/storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    clearStorage(); // Rens localStorage før hver test
  });

  afterEach(() => {
    clearStorage(); // Rens localStorage etter hver test
  });

  it("should return the username from localStorage", () => {
    const user = { name: "TestUser" };
    saveUser(user); // Lagre bruker
    expect(getUsername()).toBe("TestUser"); // Forvent at vi får riktig navn tilbake
  });

  it("should return null when no user is in storage", () => {
    expect(getUsername()).toBeNull(); // Skal være `null` hvis ingen bruker er lagret
  });
});
