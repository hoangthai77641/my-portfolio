# Portfolio Auto-Sync Scripts

This directory contains scripts that automatically sync your GitHub data to keep your portfolio up-to-date.

## Scripts

### 1. `sync-github-data.js`

Fetches public repositories and organizations from the GitHub API.

**What it does:**

- Fetches all your public repositories (non-forked)
- Fetches detailed language data for each repository
- Fetches organizations you belong to
- Fetches repositories for each organization
- Saves data to `data/projects.json` and `data/organizations.json`

**Usage:**

```bash
# With environment variables
GITHUB_TOKEN=your_token GITHUB_USERNAME=username npm run sync:github

# Or with default username from git config
npm run sync:github
```

**Environment Variables:**

- `GITHUB_TOKEN` (optional): GitHub personal access token for higher rate limits
- `GITHUB_USERNAME` (optional): Defaults to `hoangthai77641`

### 2. `extract-skills.js`

Analyzes repository languages to generate a skills summary.

**What it does:**

- Reads `data/projects.json` and `data/organizations.json`
- Analyzes programming languages used across all repositories
- Categorizes skills by type (frontend, backend, database, mobile, cloud, tools)
- Calculates skill levels based on usage frequency:
  - **Advanced**: Used in 3+ repositories
  - **Intermediate**: Used in 1-2 repositories
- Saves data to `data/skills.json`

**Usage:**

```bash
npm run sync:skills
```

### 3. `transform-to-typescript.js`

Transforms synced JSON data into TypeScript files for the frontend.

**What it does:**

- Reads `data/projects.json`, `data/organizations.json`, and `data/skills.json`
- Transforms data into TypeScript format compatible with frontend components
- Generates `src/data/synced-projects.ts` and `src/data/synced-skills.ts`
- Includes proper TypeScript interfaces and type definitions

**Usage:**

```bash
npm run sync:transform
```

### 4. Run All Scripts

```bash
npm run sync:all
```

This runs all three scripts in sequence: sync → extract → transform

## Automated Sync

The portfolio data is automatically synced via GitHub Actions:

- **Schedule**: Daily at 00:00 UTC
- **Trigger**: Can also be manually triggered via GitHub Actions UI
- **Process**:
  1. Fetches latest GitHub data
  2. Extracts skills from repositories
  3. Creates a Pull Request with the updated data
  4. You review and merge the PR

## Data Files

Generated files in the `data/` directory (JSON format):

- `projects.json` - Your public repositories with language data
- `organizations.json` - Organizations and their repositories
- `skills.json` - Extracted skills with levels and counts

Generated files in `src/data/` directory (TypeScript format):

- `synced-projects.ts` - TypeScript version of projects data
- `synced-skills.ts` - TypeScript version of skills data

**Note:** JSON files in `data/` are in `.gitignore` and managed via automated PRs. TypeScript files in `src/data/` are committed to the repository.

## Manual Testing

To test the scripts locally:

```bash
# 1. Install dependencies
npm install

# 2. Set your GitHub token (optional but recommended)
export GITHUB_TOKEN=your_github_token_here

# 3. Run the sync
npm run sync:all

# 4. Check the generated files
ls -la data/
cat data/projects.json | jq '.[:2]'  # View first 2 projects
cat data/skills.json | jq '.skills'   # View skills summary
```

## Creating a GitHub Token

1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Click "Generate new token (classic)"
3. Select scopes: `public_repo`, `read:org`, `read:user`
4. Copy the token
5. Set it as an environment variable or GitHub Secret

## Troubleshooting

**Rate Limit Errors:**

- Set `GITHUB_TOKEN` environment variable
- Reduce the number of repositories processed (edit the script)

**No Data Generated:**

- Ensure scripts have execute permissions: `chmod +x scripts/*.js`
- Check that you have public repositories
- Verify GitHub username is correct

**Workflow Not Running:**

- Check GitHub Actions are enabled in repository settings
- Ensure workflow file is on the main branch
- Manually trigger via Actions tab

## Integration with Frontend

The frontend reads from TypeScript data files in `src/data/`:

- `src/data/projects.ts` - Project definitions
- `src/data/skills.ts` - Skill definitions

To integrate synced data, you can:

1. Manually copy data from JSON files to TypeScript files
2. Create a script to convert JSON to TypeScript
3. Modify frontend to read from JSON files directly

## Future Enhancements

- [ ] Add technology detection from package.json, requirements.txt, etc.
- [ ] Extract README content for project descriptions
- [ ] Analyze commit activity for project status
- [ ] Generate project categories (personal, team, open-source)
- [ ] Create visualization data for skills chart
- [ ] Add support for private repositories (with token)
