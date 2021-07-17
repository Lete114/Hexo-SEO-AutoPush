const request = require("request");
const { google } = require("googleapis");
const fs = require('fs');
const readline = require('readline');

module.exports = function (locals) {
    var config = this.config.hexo_seo_autopush.google
    
    function readFileToArr(fReadName, callback) {
        var fRead = fs.createReadStream(fReadName, 'utf8');
        var objReadline = readline.createInterface({
            input: fRead
        });
        var arr = new Array();
        objReadline.on('line', function (line) {
            arr.push(line);
        });
        objReadline.on('close', function () {
            callback(arr);
        });
    }
    var publicDir = this.public_dir;
    var UrlsFile = publicDir + "google.txt";
    if (config.enable) {
        var rootDir = this.base_dir;
        var google_key = rootDir + config.google_file;
        var key = require(google_key);

        const jwtClient = new google.auth.JWT(
            key.client_email,
            null,
            key.private_key,
            ["https://www.googleapis.com/auth/indexing"],
            null
        );
        jwtClient.authorize(function (err, tokens) {
            if (err) {
                console.log(err);
                return;
            }
            readFileToArr(UrlsFile, function (data) {
                for (var i = 0; i < data.length; i++) {
                    var options = {
                        url: "https://indexing.googleapis.com/v3/urlNotifications:publish",
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        auth: { "bearer": tokens.access_token },
                        json: {
                            "url": data[i],
                            "type": "URL_UPDATED"
                        }
                    };
                    request(options, function (error, response, body) {
                        console.log("Google response: ", body);
                    });
                }
            });
        });
    }
}