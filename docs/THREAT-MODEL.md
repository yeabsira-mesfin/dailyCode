# Threat Model

## Assets

- User profile data
- Application source code
- CI/CD credentials and workflow permissions
- Container image
- Dependency supply chain

## Trust boundaries

1. Internet client to application
2. Application to runtime environment
3. Source repository to CI runner
4. Dependency registry to build process
5. Built image to deployment environment

## Primary threats and controls

| Threat | Example | Control |
| --- | --- | --- |
| Broken access control | User requests another user's record | Resource-level authorization check and tests |
| Injection | Malformed input reaches an interpreter | Strict validation, no dynamic evaluation, SAST |
| Vulnerable dependency | Known CVE enters build | npm audit and Trivy |
| Secret exposure | Token committed to repository | Gitleaks and .gitignore |
| Container vulnerability | Vulnerable OS package ships | Trivy image scan |
| Missing security headers | Browser receives weak defaults | Helmet |
| Runtime issue missed by source scans | Misconfiguration exposed over HTTP | OWASP ZAP baseline scan |

## Security gate policy

The pipeline stops promotion when security checks fail. Teams can tune severity thresholds based on risk appetite, exploitability, internet exposure, and remediation SLAs.
