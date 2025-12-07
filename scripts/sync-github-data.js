#!/usr/bin/env node

/**
 * Sync GitHub Data Script
 * 
 * This script fetches repositories and organizations from GitHub API
 * and saves them to JSON files for the portfolio frontend.
 * 
 * Usage:
 *   GITHUB_TOKEN=your_token GITHUB_USERNAME=username node scripts/sync-github-data.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Configuration
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'hoangthai77641';
const DATA_DIR = path.join(__dirname, '..', 'data');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

/**
 * Make a GitHub API request
 */
function githubRequest(endpoint) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.github.com',
      path: endpoint,
      method: 'GET',
      headers: {
        'User-Agent': 'Portfolio-Sync-Script',
        'Accept': 'application/vnd.github.v3+json',
      }
    };

    if (GITHUB_TOKEN) {
      options.headers['Authorization'] = `token ${GITHUB_TOKEN}`;
    }

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(new Error(`Failed to parse JSON: ${e.message}`));
          }
        } else {
          reject(new Error(`GitHub API error: ${res.statusCode} - ${data}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
}

/**
 * Fetch user's public repositories
 */
async function fetchRepositories() {
  console.log(`Fetching repositories for user: ${GITHUB_USERNAME}...`);
  
  try {
    const repos = await githubRequest(`/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`);
    
    // Filter and transform repository data
    const transformedRepos = repos
      .filter(repo => !repo.fork && !repo.private) // Only non-forked public repos
      .map(repo => ({
        id: repo.id,
        name: repo.name,
        fullName: repo.full_name,
        description: repo.description || '',
        url: repo.html_url,
        homepage: repo.homepage || '',
        language: repo.language || 'Unknown',
        languages_url: repo.languages_url,
        topics: repo.topics || [],
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        watchers: repo.watchers_count,
        createdAt: repo.created_at,
        updatedAt: repo.updated_at,
        pushedAt: repo.pushed_at,
        size: repo.size,
        defaultBranch: repo.default_branch,
        isArchived: repo.archived,
        isTemplate: repo.is_template,
      }));
    
    console.log(`✓ Found ${transformedRepos.length} repositories`);
    return transformedRepos;
  } catch (error) {
    console.error('Error fetching repositories:', error.message);
    return [];
  }
}

/**
 * Fetch languages used in each repository
 */
async function fetchRepositoryLanguages(repo) {
  try {
    const languagesUrl = repo.languages_url.replace('https://api.github.com', '');
    const languages = await githubRequest(languagesUrl);
    return {
      ...repo,
      languages: languages
    };
  } catch (error) {
    console.error(`Error fetching languages for ${repo.name}:`, error.message);
    return {
      ...repo,
      languages: {}
    };
  }
}

/**
 * Fetch user's organizations
 */
async function fetchOrganizations() {
  console.log(`Fetching organizations for user: ${GITHUB_USERNAME}...`);
  
  try {
    const orgs = await githubRequest(`/users/${GITHUB_USERNAME}/orgs`);
    
    const transformedOrgs = orgs.map(org => ({
      id: org.id,
      login: org.login,
      name: org.login,
      description: org.description || '',
      url: org.html_url,
      avatarUrl: org.avatar_url,
      reposUrl: org.repos_url,
    }));
    
    console.log(`✓ Found ${transformedOrgs.length} organizations`);
    return transformedOrgs;
  } catch (error) {
    console.error('Error fetching organizations:', error.message);
    return [];
  }
}

/**
 * Fetch repositories for each organization
 */
async function fetchOrganizationRepos(org) {
  try {
    const reposUrl = org.reposUrl.replace('https://api.github.com', '');
    const repos = await githubRequest(reposUrl + '?per_page=100');
    
    const transformedRepos = repos
      .filter(repo => !repo.private)
      .map(repo => ({
        id: repo.id,
        name: repo.name,
        fullName: repo.full_name,
        description: repo.description || '',
        url: repo.html_url,
        homepage: repo.homepage || '',
        language: repo.language || 'Unknown',
        languages_url: repo.languages_url,
        topics: repo.topics || [],
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        updatedAt: repo.updated_at,
      }));
    
    return {
      ...org,
      repositories: transformedRepos
    };
  } catch (error) {
    console.error(`Error fetching repos for org ${org.login}:`, error.message);
    return {
      ...org,
      repositories: []
    };
  }
}

/**
 * Main function
 */
async function main() {
  console.log('='.repeat(50));
  console.log('GitHub Data Sync Script');
  console.log('='.repeat(50));
  
  if (!GITHUB_TOKEN) {
    console.warn('⚠ Warning: No GITHUB_TOKEN found. API rate limits will be lower.');
  }
  
  try {
    // Fetch repositories
    const repositories = await fetchRepositories();
    
    // Fetch detailed language data for repositories (with rate limiting)
    console.log('\nFetching language details for repositories...');
    const repositoriesWithLanguages = [];
    for (let i = 0; i < Math.min(repositories.length, 20); i++) {
      const repo = repositories[i];
      console.log(`  [${i + 1}/${Math.min(repositories.length, 20)}] ${repo.name}`);
      const repoWithLangs = await fetchRepositoryLanguages(repo);
      repositoriesWithLanguages.push(repoWithLangs);
      
      // Rate limiting - wait 1 second between requests
      if (i < repositories.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    // Fetch organizations
    const organizations = await fetchOrganizations();
    
    // Fetch organization repositories
    console.log('\nFetching repositories for organizations...');
    const organizationsWithRepos = [];
    for (let i = 0; i < organizations.length; i++) {
      const org = organizations[i];
      console.log(`  [${i + 1}/${organizations.length}] ${org.login}`);
      const orgWithRepos = await fetchOrganizationRepos(org);
      organizationsWithRepos.push(orgWithRepos);
      
      // Rate limiting
      if (i < organizations.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    // Save to files
    const projectsFile = path.join(DATA_DIR, 'projects.json');
    const orgsFile = path.join(DATA_DIR, 'organizations.json');
    
    fs.writeFileSync(projectsFile, JSON.stringify(repositoriesWithLanguages, null, 2));
    console.log(`\n✓ Saved ${repositoriesWithLanguages.length} repositories to ${projectsFile}`);
    
    fs.writeFileSync(orgsFile, JSON.stringify(organizationsWithRepos, null, 2));
    console.log(`✓ Saved ${organizationsWithRepos.length} organizations to ${orgsFile}`);
    
    console.log('\n' + '='.repeat(50));
    console.log('Sync completed successfully!');
    console.log('='.repeat(50));
    
  } catch (error) {
    console.error('\n❌ Error during sync:', error);
    process.exit(1);
  }
}

// Run the script
main();
