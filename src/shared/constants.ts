//! Rate limit values, allowed domains, security patterns

export const RATE_LIMITS = {
  perUserPerHour: 1,
  perUserPerDay: 3,
  globalPerHour: 20,
  maxFileSize: 100 * 1024,
} as const;

export const ALLOWED_URL_DOMAINS = [
  'data:',
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'cdn.jsdelivr.net',
  'gitsk.in',
  'skinbank.gitsk.in',
] as const;

export const SSE_STEPS = [
  'ratelimit',
  'validate',
  'security',
  'duplicate',
  'fork',
  'commit',
  'pr',
] as const;
