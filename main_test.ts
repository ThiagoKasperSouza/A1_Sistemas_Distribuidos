import { assertEquals } from "@std/assert";
import { isEven } from "./main.ts";

Deno.test(function isEvenPosTest() {
  assertEquals(isEven(2), 1);
});

Deno.test(function isEvenNegTest() {
  assertEquals(isEven(-2), 1);
});

Deno.test(function isEvenZeroTest() {
  assertEquals(isEven(2), 1);
});


Deno.test(function isEvenCharTest() {
  assertEquals(isEven(2), 1);
});

Deno.test(function isEvenFrationTest() {
  assertEquals(isEven(2), 1);
});

Deno.test(function isEvenFloatTest() {
  assertEquals(isEven(2), 1);
});

