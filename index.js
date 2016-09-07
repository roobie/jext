/**
 * requires all modules in one go.
 */
void [
  'array',
  'date',
  'function',
  'number',
  'object',
  'promise',
  'string',
].map(n => require(`./modules/${n}.js`));
