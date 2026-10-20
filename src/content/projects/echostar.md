---
an: AN-003
name: EchoStar Pipeline
order: 3
title: Network Configuration Automation Pipeline
short: Network config automation
domain: Data pipeline
org: EchoStar Corporation / Boost Mobile, Littleton, CO
role: Network Engineering Intern
dates: Jun – Aug 2026
status: complete
lead: A validation-first pipeline that turned multi-day carrier configuration intake into under 15 minutes. Never trust input, validate at boundaries, fail safe.
indexSpec: "Days → < 15 min intake"
stack: [Python, FastAPI, n8n, JIRA]
keySpecs:
  - { param: Configuration intake, value: "< 15 min", cond: "Previously multiple days" }
  - { param: Parameters extracted, value: "1,000+", cond: "IP subnets, routing protocols, DNS records; multi-region" }
  - { param: Manual data entry, value: "95%+ eliminated", cond: "End-to-end intake and integration" }
  - { param: Network state updates, value: "Zero-touch", cond: "n8n opens and closes JIRA tickets on provisioning" }
---

## Abstract

A pipeline that ingests carrier network documents, extracts and validates network configuration, and drives provisioning end to end.

## Implementation

- Python pipeline that parses and validates carrier network documents, extracting 1,000+ critical configuration parameters (IP subnets, routing protocols, DNS records) for multi-region infrastructure.
- Exposed through a FastAPI REST API wired into an n8n workflow that automatically opens and closes JIRA tickets on provisioning.

## Validation

Errors are caught before any network state changes: schema validation, IP/CIDR checks, overlapping-subnet checks, and required fields.

The same mindset as firmware: never trust input, validate at boundaries, fail safe.
