# DAST Baseline Policy

OWASP ZAP remains a blocking security gate in this project.

The baseline rules file ignores exactly two low-risk warnings that are not actionable for this API demo:

- **10049 Non-Storable Content**: the application deliberately sends `Cache-Control: no-store` to prevent caching of API responses.
- **90004 Cross-Origin-Embedder-Policy Header Missing or Invalid**: the warning is emitted for `sitemap.xml`. Cross-origin isolation is not required for this API and enabling COEP solely for the sitemap would not reduce a relevant application risk.

All other ZAP alerts remain blocking because the workflow still uses `fail_action: true`.

If the application changes in a way that makes either warning relevant, this baseline should be reviewed rather than expanded automatically.
