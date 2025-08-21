# Contributing to Portfolio Project

## Development Workflow

### Prerequisites

- Node.js 18.x or 20.x
- npm

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd my-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Code Quality Standards

#### ESLint & Prettier

- **ESLint**: Enforces code quality and catches potential bugs
- **Prettier**: Automatically formats code for consistency
- **Pre-commit hooks**: Automatically run linting and formatting

#### Available Scripts

```bash
# Development
npm run dev                 # Start development server

# Code Quality
npm run lint               # Fix ESLint errors automatically
npm run lint:check         # Check for ESLint errors only
npm run format             # Format code with Prettier
npm run format:check       # Check code formatting
npm run type-check         # TypeScript type checking

# Build
npm run build              # Build for production
npm start                  # Start production server
```

### Git Workflow

#### Pre-commit Hooks

Every commit automatically runs:

1. ESLint (with auto-fix)
2. Prettier formatting
3. Type checking

#### Branch Strategy

- `main` - Production branch
- `develop` - Development branch
- `feature/*` - Feature branches
- `fix/*` - Bug fix branches

#### Commit Message Convention

```
feat: add new contact form component
fix: resolve dark mode toggle issue
docs: update README with setup instructions
style: format code with prettier
refactor: optimize performance in Hero section
test: add unit tests for ContactForm
chore: update dependencies
```

### CI/CD Pipeline

#### GitHub Actions

- **Quality Check**: Runs on every push and PR
  - ESLint validation
  - Prettier check
  - TypeScript compilation
  - Build verification
  - Multi-Node.js version testing

- **Deployment**: Automatic deploy to production on main branch
- **Dependency Updates**: Weekly automated dependency updates

#### Quality Gates

- All PRs must pass ESLint checks
- Code must be properly formatted
- TypeScript must compile without errors
- Build must succeed

### Code Standards

#### File Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # Reusable UI components
├── sections/           # Page sections (Hero, About, etc.)
├── contexts/           # React contexts
├── hooks/              # Custom React hooks
├── data/               # Static data and configurations
└── types/              # TypeScript type definitions
```

#### Component Guidelines

- Use TypeScript for all components
- Include proper prop types
- Add JSDoc comments for complex functions
- Follow React best practices (hooks, memo, etc.)

#### Styling

- Use Tailwind CSS for styling
- Follow semantic CSS class naming
- Support dark mode with CSS variables
- Ensure responsive design

### Testing

- Unit tests for utility functions
- Component testing with React Testing Library
- E2E tests for critical user flows

### Performance

- Optimize images and assets
- Use Next.js optimization features
- Monitor bundle size
- Implement lazy loading where appropriate

### Accessibility

- Follow WCAG 2.1 guidelines
- Use semantic HTML
- Ensure keyboard navigation
- Provide alt text for images
- Test with screen readers
