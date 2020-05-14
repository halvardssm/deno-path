import { assertEquals } from "https://deno.land/std@v0.51.0/testing/asserts.ts";
import { resolve } from "./mod.ts";

const strings = [
  {
    name: "Folders",
    string: resolve("a", "b", "c"),
    solution: "a/b/c",
  },
  {
    name: "Folders with ./",
    string: resolve("./a", "./b", "./c"),
    solution: "a/b/c",
  },
  {
    name: "Folders with /",
    string: resolve("/a", "/b", "/c"),
    solution: "/c",
  },
  {
    name: "Folders with ..",
    string: resolve("a", "b", "../c"),
    solution: "a/c",
  },
  {
    name: "Folders with /../ in pos 1",
    string: resolve("a/../d", "b", "c"),
    solution: "d/b/c",
  },
  {
    name: "Folders with /../ in pos 2",
    string: resolve("a", "b/../d", "c"),
    solution: "a/d/c",
  },
  {
    name: "Folders with / in middle",
    string: resolve("a", "/", "c"),
    solution: "/c",
  },
];

strings.forEach(({ name, string, solution }) =>
  Deno.test({
    name: name || "Empty",
    fn(): void {
      assertEquals(string, solution);
    },
  })
);
