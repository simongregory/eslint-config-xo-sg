'use strict';

module.exports = {
  extends: ['xo-space/browser', 'xo-space/esnext'],
  rules: {
    indent: [2, 2, { SwitchCase: 1 }],
    'object-curly-spacing': ['error', 'always'],
    "import/no-unassigned-import": 0
  }
};
