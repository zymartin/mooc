const path = require('path');
const mime = require('mime');
const fs = require('mz/fs');

// url: 类似'/static/'
// dir: 类似__dirname + '/static'
function staticFiles(url, dir) {
    return async(ctx, next) => {
        let rpath = ctx.request.path;
        // 判断是否以指定的url开头
        if(rpath.startsWith(url)) {
            // 获取完整路径
            let fp = path.join(dir, rpath.substring(url.length));
            // 判断文件完整路径
            if(await fs.exists(fp)) {
                // 查找文件的mime
                ctx.response.type = mime.lookup(rpath);
                // 读取文件内容并赋值给response.body
                ctx.response.body = await fs.readFile(fp);
            } else {
                // 文件不存在
                ctx.response.status = 404;
            }
        } else {
            // 如果不是指定前缀的URL，则继续处理下一个middleware
            await next();
        }
    };
}

module.exports = staticFiles;