const express = require("express");
const helmet = require("helmet");
const { isValidIdentifier } = require("./security");

function createApp() {
  const app = express();

  app.disable("x-powered-by");
  app.use(helmet());
  app.use((_req, res, next) => {
    res.set("Cache-Control", "no-store");
    next();
  });
  app.use(express.json({ limit: "32kb", strict: true }));

  app.get("/", (_req, res) => {
    res.json({
      service: "devsecops-security-pipeline",
      documentation: "See README.md for security pipeline details"
    });
  });

  app.get("/robots.txt", (_req, res) => {
    res.type("text/plain").send("User-agent: *\nDisallow:\n");
  });

  app.get("/sitemap.xml", (_req, res) => {
    res.type("application/xml").send('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>');
  });

  app.get("/health", (_req, res) => {
    res.json({ status: "ok", service: "devsecops-security-pipeline" });
  });

  app.get("/api/profile/:id", (req, res) => {
    const requestedId = req.params.id;
    const authenticatedId = req.get("x-user-id");

    if (!isValidIdentifier(requestedId)) {
      return res.status(400).json({ error: "invalid identifier" });
    }

    if (!authenticatedId || authenticatedId !== requestedId) {
      return res.status(403).json({ error: "forbidden" });
    }

    return res.json({
      id: requestedId,
      displayName: "Security Demo User",
      role: "developer"
    });
  });

  app.post("/api/echo", (req, res) => {
    const message = typeof req.body?.message === "string" ? req.body.message.trim() : "";

    if (!message || message.length > 200) {
      return res.status(400).json({ error: "message must be 1-200 characters" });
    }

    return res.json({ message });
  });

  app.use((_req, res) => {
    res.status(404).json({ error: "not found" });
  });

  app.use((err, _req, res, _next) => {
    console.error("request_error", { message: err.message });
    res.status(500).json({ error: "internal server error" });
  });

  return app;
}

module.exports = { createApp };
