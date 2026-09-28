# Contributing to AcadVault2.0

First off, thank you for considering contributing to AcadVault2.0! It's people like you that make AcadVault2.0 such a great tool. 

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open-source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

## General Guidelines

- **Code of Conduct:** Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.
- **Issues:** Before opening a new issue or PR, please search the issue tracker to check if it has already been reported or addressed.
- **Quality:** Ensure your code is clean, well-documented, and passes any existing linting or formatting checks.

## How to Contribute

### 1. Fork the Repository

Click the "Fork" button at the top right of the repository page to create your own copy of the repository in your GitHub account.

### 2. Clone your Fork

Clone the repository to your local machine:

```bash
git clone https://github.com/YOUR_USERNAME/AcadVault2.0.git
cd AcadVault2.0
```

### 3. Add the Upstream Remote

Add the original repository as an upstream remote to keep your fork synced:

```bash
git remote add upstream https://github.com/PushkarP-404/AcadVault2.0.git
```

### 4. Create a Branch

Before making any changes, create a new branch for your feature or bug fix. Use descriptive names:

```bash
git checkout -b feature/your-feature-name
# or for a bug fix:
git checkout -b fix/your-bug-fix
```

### 5. Install Dependencies and Run

Install the dependencies and start the local development server:

```bash
npm install
npm run dev
```

### 6. Make your Changes

Make your changes in the local repository. Be sure to follow the existing coding style and structure of the project.

### 7. Run the Tests

Before committing your changes, make sure to run the test suite to ensure nothing was broken. We use Jest and React Testing Library.

```bash
# Run all tests
npm run test

# Run tests in watch mode (useful during development)
npm run test:watch
```

If you are adding a new feature or fixing a bug, please include tests for your changes.

### 8. Commit your Changes

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages. This leads to more readable messages that are easy to follow when looking through the project history.

**Commit Message Format:**
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Common Types:**
- `feat:` A new feature
- `fix:` A bug fix
- `docs:` Documentation only changes
- `style:` Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `refactor:` A code change that neither fixes a bug nor adds a feature
- `perf:` A code change that improves performance
- `test:` Adding missing tests or correcting existing tests
- `chore:` Changes to the build process or auxiliary tools and libraries such as documentation generation

**Example Commits:**
- `feat(ui): add dark mode support`
- `fix(auth): resolve login timeout issue`
- `docs: update setup instructions in readme`

Commit your changes using git:

```bash
git add .
git commit -m "feat: add new awesome feature"
```

### 9. Push to your Fork

Push your committed changes to your fork on GitHub:

```bash
git push origin your-branch-name
```

### 10. Create a Pull Request

Go to the original `AcadVault2.0` repository on GitHub. You will see a prompt to create a Pull Request from your recently pushed branch. Provide a clear and detailed description of the changes you've made, referencing any relevant issues.

## Syncing your Fork

To keep your fork up to date with the original repository, regularly sync your `master` branch (or whichever branch is your default):

```bash
git checkout master
git fetch upstream
git merge upstream/master
git push origin master
```

Thank you again for your interest in contributing!
