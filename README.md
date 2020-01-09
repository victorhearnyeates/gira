# gira
Small node module to copy commit messages to jira. It can be used like:
```
node /path/to/package/index.js "jiraNo" "Comment to add to git and to jira ticket"
```
or, if installed
```
gira "jiraNo" "Comment to add to git and to jira ticket"
```

## Set Up Instructions
1. Make sure you have Node installed https://nodejs.org/en
1. Run `npm install gira` or `npm install gira -g` to use from anywhere
1. Change `user`, `password` and `host` values in [config.json](./config.json)
