const https = require('https');
const colors = require('colors');
const { user, password, host } = require('./config.json');

function postComment(jiraNo, comment) {

    const data = JSON.stringify({
        body: comment
      });

    const options = {
        hostname: host,
        port: 443,
        path: `/rest/api/latest/issue/${jiraNo}/comment`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': data.length,
          'Authorization': 'Basic ' + new Buffer(user + ':' + password).toString('base64')
        }
      };

    const req = https.request(options, (res) => {
        res.on('data', (d) => {
          console.log('Success'.green);
        });
      });
      
    req.on('error', (error) => {
        console.error(`${error}`.red);
    });
      
    req.write(data);
    req.end();
}

module.exports = postComment;
