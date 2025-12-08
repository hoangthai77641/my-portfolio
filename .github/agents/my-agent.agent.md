---
name: GitHub Portfolio Sync Agent
description: Automatically sync repositories, organizations, and technologies from GitHub to my personal portfolio site.
---

# 👋 My Agent

This agent keeps my portfolio site up to date by automatically syncing the latest information from my GitHub account.

## 🎯 Key Features

- 🔄 Scan and update the list of public repositories and organizations I belong to.
- 📦 Categorize repositories by type (personal, team, open-source).
- 🛠️ Analyze repository content to extract technologies used (e.g., React, Node.js, Java Spring Boot).
- 🧩 Update the "Featured Projects" and "Skills & Technologies" sections on [portfolio-updating.vercel.app](https://portfolio-updating.vercel.app).
- 📤 Create pull requests periodically to update JSON or Markdown files used by the frontend.

## 🔧 How It Works

The agent uses the following scripts:

### 1. `sync-github-data.js`

- Calls the GitHub API to fetch repositories and organizations.
- Saves data to:
  - `data/projects.json`
  - `data/organizations.json`

### 2. `extract-skills.js`

- Analyzes programming languages used across repositories.
- Calculates usage frequency to classify skill levels:
  - `Advanced` if used ≥ 3 times
  - `Intermediate` if used less
- Saves data to `data/skills.json`

## 🧪 Testing

You can test this agent locally using the Copilot CLI:

```bash
copilot agent run .github/agents/my-agent.agent.md
```
