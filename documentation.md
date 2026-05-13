# Documentation

## Workspace Conventions

- Keep app-specific code inside `apps/<name>`.
- Keep reusable code inside `packages/`.
- Use the root `package.json` for workspace-wide scripts only.
- Keep editor settings in `.vscode/`.

## System A Component Contribution

### Components Added

- StudyMetricsPanel
- ReadinessBoard

### Purpose

These components improve System A by adding learner progress tracking and topic readiness visualization. The contribution follows the monorepo idea by keeping the feature inside the correct application folder and making it available through the System A export file.

### Work Completed

- Created a Study Metrics Panel to show flashcard review progress, correct answers, and study goal completion.
- Created a Readiness Board to display study topics, confidence level, and readiness status.
- Connected the new components to the existing System A export structure.

### Files Added

- apps/system-a/StudyMetricsPanel.tsx
- apps/system-a/ReadinessBoard.tsx
