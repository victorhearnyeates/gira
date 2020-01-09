const shell = require('shelljs');
const postComment = require('./jira-data');


const args = process.argv.slice(2);
const [jiraNo, comment] = args;

if (args[0] == '-a') {
  console.log('Adding to git');
  shell.exec(`git add ${args.slice(1).join(' ')}`);
  process.exit(0);
}

if (jiraNo === undefined || comment == undefined) {
    console.log("Please provide two arguments: the jira no, and a comment");
    process.exit(0);
} else {
  console.log('Committing to git');
  shell.exec(`git commit -m "${jiraNo}: ${comment}"`);

  console.log('Adding comment to jira');
  postComment(jiraNo, comment);
}
