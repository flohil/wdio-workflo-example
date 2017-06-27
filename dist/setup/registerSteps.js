"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selectFiles = require('../utils/io').selectFiles;
const fs = require('fs');
const path = require('path');
exports.default = testDir => {
    const stepsPath = path.join(testDir, 'steps');
    const stepFiles = selectFiles(stepsPath, 'step.js');
    for (const stepFile of stepFiles) {
        const source = fs.readFileSync(stepFile, 'utf8');
        eval(source);
    }
};
//# sourceMappingURL=registerSteps.js.map