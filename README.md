# DevSecOps Security Pipeline

A portfolio-grade application security project that demonstrates how security checks can be enforced automatically in a CI/CD pipeline.

## What this project demonstrates

- **SAST:** Semgrep scans application code for insecure patterns.
- **SCA:** npm audit checks third-party dependencies.
- **Secrets scanning:** Gitleaks detects committed credentials and tokens.
- **Container security:** Trivy scans the Docker image for OS and package vulnerabilities.
- **DAST:** OWASP ZAP baseline testing runs against the live test application.
- **Security gates:** high-impact findings fail the workflow instead of becoming passive reports.
- **Secure development:** Helmet headers, strict JSON limits, input validation, authorization checks, and centralized error handling.

## Architecture

```mermaid
flowchart LR
  A[Developer Push] --> B[Unit + Security Tests]
  B --> C[SAST - Semgrep]
  C --> D[SCA - npm audit]
  D --> E[Secrets - Gitleaks]
  E --> F[Docker Build]
  F --> G[Container Scan - Trivy]
  G --> H[Run Test App]
  H --> I[DAST - OWASP ZAP]
  I --> J{Security Gate}
  J -->|Pass| K[Release Candidate]
  J -->|Fail| L[Remediate Finding]
```

## Run locally

```bash
npm install
npm test
npm start
```

Open `http://localhost:3000/health`.

### Authorization demo

```bash
curl -H "x-user-id: 42" http://localhost:3000/api/profile/42
```

A request for another user's profile is rejected with HTTP 403.

## Docker

```bash
docker build -t devsecops-security-pipeline .
docker run --rm -p 3000:3000 devsecops-security-pipeline
```

## Security workflow

The GitHub Actions workflow in `.github/workflows/security.yml` runs on pushes and pull requests. The pipeline covers code scanning, dependency review, secrets detection, image scanning, dynamic testing, and release gating.

## Threat model

See [docs/THREAT-MODEL.md](docs/THREAT-MODEL.md).

## Security note

This repository is a defensive learning project. No credentials are required, and sample configuration uses environment variables rather than committed secrets.
