const chalk = require('chalk');
const { get } = require('lodash');

const defaultColors = {
  BRACE: 'gray',
  BRACKET: 'gray',
  COLON: 'gray',
  COMMA: 'gray',
  STRING_KEY: 'magenta',
  STRING_LITERAL: 'yellow',
  NUMBER_LITERAL: 'green',
  BOOLEAN_LITERAL: 'cyan',
  NULL_LITERAL: 'white'
};

exports.colorize = function colorize(tokens, options) {
  const opts = options || {};
  const colors = opts.colors || {};

  return tokens.reduce((acc, token) => {
    const colorFn = get(chalk, colors[token.type] || defaultColors[token.type]);
    return acc + (colorFn ? colorFn(token.value) : token.value);
  }, '');
};
