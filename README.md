# TTC Security Bot

TTC Security is a Discord security and moderation bot project maintained by The Trusted Community (TTC).

> **Development status:** Initial scaffold. No production bot functionality is implemented yet. Do not deploy or invite this project as a functioning security bot.

## Goals
- Protect communities against spam, raids, malicious links, and destructive moderation actions.
- Provide configurable, auditable moderation and security controls.
- Use least-privilege permissions, safe defaults, and transparent logging.
- Avoid collecting or retaining unnecessary user data.

## Stack
- Node.js 20 or newer (LTS recommended)
- TypeScript
- discord.js v14

## Getting started
1. Install Node.js (LTS) and Git.
2. Clone the repository and install dependencies:
   ```sh
   npm install
   ```
3. Copy `.env.example` to `.env` and fill in the required values.
4. Register a Discord application and bot in the Discord Developer Portal. Enable only the gateway intents the bot actually needs. **Never commit the bot token.**
5. Run checks:
   ```sh
   npm run typecheck
   npm run build
   ```

The scaffold does not yet start a Discord client; a bot runtime will be added in a subsequent implementation.

## Security principles
- Keep secrets in environment variables or a secrets manager; never commit `.env`.
- Request only necessary gateway intents and permissions.
- Require confirmation and permission checks for destructive actions.
- Rate-limit commands and protect against duplicate/event-loop abuse.
- Validate configuration and inputs; fail closed where safety is involved.
- Log security events without logging tokens, credentials, or unnecessary personal data.
- Do not automatically ban users based solely on untrusted signals.

## Project status and roadmap
- [x] Initial repository documentation and development configuration
- [ ] Bot client and command/event architecture
- [ ] Permission-aware moderation commands
- [ ] Audit logging and configuration storage
- [ ] Anti-spam and anti-raid controls with safe thresholds
- [ ] Verification and reporting workflows
- [ ] Tests, deployment instructions, and operational monitoring

## Contributing
Use feature branches and review changes before merging. Report security vulnerabilities privately to TTC leadership rather than posting exploit details publicly.
