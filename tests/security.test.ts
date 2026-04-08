//! Tests for CSS security scanner
import { describe, it } from 'vitest';

describe('security scan', () => {
  it.todo('blocks external url()');
  it.todo('blocks @import');
  it.todo('flags content: attr()');
  it.todo('blocks :has() targeting inputs');
  it.todo('flags high z-index fixed elements');
  it.todo('blocks expression() and -moz-binding');
  it.todo('passes clean CSS');
});
