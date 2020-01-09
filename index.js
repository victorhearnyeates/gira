const postComment = require('./jira-commands');
const { gitAdd, gitCommit, gitStatus } = require('./git-commands');

const args = process.argv.slice(2);

if (args[0] == '-a') {
  console.log('Adding to git');
  gitAdd(args.slice(1));
  process.exit(0);
}

if (args[0] == 'status') {
  gitStatus();
  process.exit(0);
}

const [jiraNo, comment] = args;

if (jiraNo === undefined || comment == undefined) {
    console.log("Please provide two arguments: the jira no, and a comment");
    process.exit(0);
} else {
  console.log('Committing to git');
  let msg = `${jiraNo}: ${comment}`;
  gitCommit(msg);

  console.log('Adding comment to jira');
  postComment(jiraNo, comment);
}
