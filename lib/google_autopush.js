module.exports = function (locals) {
    var request = require("request");
    var { google } = require("googleapis");
    var config = this.config;

    if (config.hexo_seo_autopush.google.enable) {
        var urls = [].concat(locals.posts.toArray()).map(function (post) {
            return {
                "date": post.updated || post.date,
                "permalink": post.permalink
            }
        })
            .slice(0, this.config.hexo_seo_autopush.google.count)
            .map(function (post) {
                return post.permalink;
            })
            .join('\n');
        var str = urls.split('\n');

        var rootDir = this.base_dir;
        var google_key = rootDir + config.hexo_seo_autopush.google.google_file;
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
            for (let i = 0; i < str.length; i++) {
                var options = {
                    url: "https://indexing.googleapis.com/v3/urlNotifications:publish",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    auth: { "bearer": tokens.access_token },
                    json: {
                        "url": str[i],
                        "type": "URL_UPDATED"
                    }
                };
                request(options, function (error, response, body) {
                    console.log("Google response: ", body);
                });
            }
        });
    }
}