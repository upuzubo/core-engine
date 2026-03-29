// parser.js
import { parse } from './parser';

const parser = {
  init: function (options) {
    this.options = options;
  },

  parse: function (code) {
    const lines = code.split('\n');
    const statements = [];

    for (const line of lines) {
      const trimmedLine = line.trim();
      if (trimmedLine) {
        const statement = parse(trimmedLine);
        if (statement) {
          statements.push(statement);
        }
      }
    }

    return statements;
  },
};

export default parser;