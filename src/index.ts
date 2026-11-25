/**
 * TTC Security Bot entry point.
 * This placeholder deliberately does not connect to Discord until client setup,
 * permissions/intents review, and safe runtime handling are implemented.
 */
import 'dotenv/config';

function validateEnvironment(): void {
  const required = ['DISCORD_TOKEN', 'DISCORD_CLIENT_ID'] as const;
  const missing = required.filter((key) => !process.env[key]?.trim());

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
  }
}

validateEnvironment();
console.info('Environment validation passed. Discord client runtime is not implemented yet.');
