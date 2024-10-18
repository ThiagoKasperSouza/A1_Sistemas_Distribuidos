import { assertEquals } from "@std/assert";
import { isEven } from "./main.ts";

Deno.test(function isEvenPosTest() {
  assertEquals(isEven(2), 1);
});

Deno.test(function isEvenNegTest() {
  assertEquals(isEven(-2), 1);
});

Deno.test(function isOddPosTest() {
  assertEquals(isEven(3), 1);
});

Deno.test(function isOddNegTest() {
  assertEquals(isEven(-7), 1);
});


Deno.test(function isEvenCharTest() {
  assertEquals(isEven(Number("asasa")), -1);
});

Deno.test(function isEvenFrationTest() {
  assertEquals(isEven(2/4), -1);
});

Deno.test(function isEvenFloatTest() {
  assertEquals(isEven(2.54), -1);
});

