# Orbit AI Agent — OS Specification & Agent Architecture (`AGENTS.md`)

Orbit is an autonomous **OS-level AI Agent** designed to bridge natural language processing directly with operating system actions, process management, file automation, and cross-application orchestration.

---

## 🏛️ System Architecture

Orbit operates as a multi-layered autonomous system combining high-level cognitive planning with low-level operating system bindings:

```
┌─────────────────────────────────────────────────────────────┐
│                    Natural Language Chat UI                 │
└──────────────────────────────┬──────────────────────────────┘
                               │ User Intent & Prompts
                               ▼
┌─────────────────────────────────────────────────────────────┐
│               Cognitive Agent Reasoning Engine              │
│    (Task Decomposition, Tool Routing, Context Memory)       │
└──────┬───────────────────────┬───────────────────────┬──────┘
       │                       │                       │
       ▼                       ▼                       ▼
┌───────────────┐       ┌───────────────┐       ┌───────────────┐
│ System & CLI  │       │ File System   │       │ Web & Browser │
│ Executor      │       │ Controller    │       │ Automation    │
└──────┬────────┘       └──────┬────────┘       └──────┬────────┘
       │                       │                       │
       └───────────────────────┼───────────────────────┘
                               │ OS System Calls & Subprocesses
                               ▼
┌─────────────────────────────────────────────────────────────┐
│              Permission & Security Sandbox Engine           │
│    (User Approval Gate, Action Audit Logs, Scoped Access)   │
└─────────────────────────────────────────────────────────────┘
```

---

## ⚡ Core Capabilities

### 1. Operating System & Process Management
- **Application Execution**: Launch, manage, monitor, and terminate local applications (e.g., development environments, productivity tools, games).
- **Process Orchestration**: Execute background tasks, monitor CPU/memory thresholds, and pipe process outputs to natural language summaries.

### 2. Intelligent File System Operations
- **Automated Workspace Cleanup**: Organize Downloads, Desktop, or targeted workspace directories based on file metadata, extensions, and content topics.
- **Directory Structuring**: Batch rename, compress, move, convert formats (e.g., WebP, PNG, MP4), and archive assets safely.

### 3. Developer & Code Execution Engine
- **Test Suite Execution**: Automatically trigger test runners (`npm test`, `pytest`, `cargo test`), capture runtime logs, and propose instant diagnostic fixes.
- **Build & CI Automation**: Run local build pipelines, manage monorepos (`turbo`, `pnpm`), and verify build artifacts before deployment.

### 4. Multimodal Web & Agent Synthesis
- **Autonomous Web Browsing**: Interact with external web interfaces, generate assets from generative AI services, download results, and place them directly into local directories.
- **Cross-App Data Transfer**: Capture context from web endpoints and convert them into local file structures or workspace documents.

---

## 🛡️ Security & Permission Safeguards

- **Human-in-the-Loop Confirmation**: High-impact actions (file deletion, system modification, credential access) require explicit user authorization.
- **Sandboxed Execution**: Subprocess commands execute within restricted shell environments with strict timeout limits and resource quotas.
- **Audit Logging**: Every agent step, tool call, command output, and file mutation is logged transparently for full accountability.
