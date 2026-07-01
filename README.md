# Website about Berlin's späti culture

This repository contains the source code for our IDPA project website about Berlin's unique Späti culture. The application is built with Vue 3, Vite, TypeScript and Tailwind.

## Setup

Clone the repository and install all dependencies:

```npm install```

Start the local development server:

```npm run dev```

The application will be available at:

```http://localhost:5173```

Hot Module Reloading (HMR) is enabled, so changes are applied automatically during development.

Before committing changes, always run:

```npm run build```

This ensures that the project builds successfully and helps detect TypeScript or build errors early.

## Branching Strategy

The repository uses two long-lived branches:

* ```main``` – Production branch
* ```dev``` – Development branch

### Main
The main branch contains the current production version of the website. Every commit on this branch is automatically deployed via Cloudflare Pages.
### Dev
The dev branch contains features that are ready for testing but have not yet been released to production. At any time, the dev branch should remain in a deployable state. By merging changes into dev, a preview will be deployed under a dev-domain via Cloudflare Pages.

### Developing New Features

When implementing a new feature or fixing a bug:
1. Create a new branch from dev. Naming convention below.
2. Implement your changes in the feature branch.
3. Test your changes locally.
4. Run:

   ```npm run build```

6. Create a Pull Request targeting dev.
7. Merge the Pull Request once the feature is complete.

Direct pushes or merges into main are prohibited by the branch protection rules. Feature branches should always be merged into dev first before being promoted to main.

#### Branch Naming

* Features: ```feature/<your-feature-name>```
* Bugfixes: ```patch/<name-of-your-bugfix>```

Examples:

* ```feature/history-detail-page```
* ```feature/interview-section```
* ```patch/mobile-navbar```
* ```patch/video-loading```

## Deployment

The production website is automatically deployed through Cloudflare Pages whenever changes are merged into the main branch.
Changes merged into dev branch will be deployed to a preview.
