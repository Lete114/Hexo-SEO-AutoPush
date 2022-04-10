const { sortDownDate } = require('./sort')

module.exports = (locals, count, date) => {
  date = date == 'created' ? 'date' : 'updated' // 日期

  let posts = [].concat(locals.posts.toArray())
  let urls = posts.map((post) => {
    return {
      date: post[date].format('yyyy-MM-DD HH:mm:ss'), // 格式化日期
      permalink: post.permalink
    }
  })

  let sort_urls = sortDownDate(urls, 'date') // 降序排列如期
  return sort_urls
    .slice(0, count || undefined)
    .map((post) => post.permalink)
    .join('\n')
}
