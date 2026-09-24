const test = require("node:test");
const assert = require("node:assert/strict");
const request = require("supertest");
const { createApp } = require("../src/app");

test("health endpoint returns service status", async () => {
  const response = await request(createApp()).get("/health");
  assert.equal(response.status, 200);
  assert.equal(response.body.status, "ok");
});

test("protected resource rejects missing identity", async () => {
  const response = await request(createApp()).get("/api/profile/42");
  assert.equal(response.status, 403);
});

test("protected resource rejects cross-user access", async () => {
  const response = await request(createApp())
    .get("/api/profile/42")
    .set("x-user-id", "7");
  assert.equal(response.status, 403);
});

test("protected resource accepts matching identity", async () => {
  const response = await request(createApp())
    .get("/api/profile/42")
    .set("x-user-id", "42");
  assert.equal(response.status, 200);
  assert.equal(response.body.id, "42");
});

test("identifier validation rejects malformed input", async () => {
  const response = await request(createApp())
    .get("/api/profile/not-a-number")
    .set("x-user-id", "not-a-number");
  assert.equal(response.status, 400);
});
