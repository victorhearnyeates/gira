const shell = require('shelljs');

function gitStatus() {
    shell.exec('git status');
}

function gitCommit(commitMsg) {
    shell.exec(`git commit -m "${commitMsg}"`);
}

function gitAdd(files) {
    shell.exec(`git add ${files.join(' ')}`);
}

module.exports = {
    gitAdd,
    gitCommit,
    gitStatus
};
