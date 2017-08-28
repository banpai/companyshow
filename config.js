/**
 * 小程序配置文件
 */

// 此处主机域名是腾讯云解决方案分配的域名
// 小程序后台服务解决方案：https://www.qcloud.com/solution/la

var host = "https://api."

var config = {
    // 下面的地址配合云端 Server 工作
    host,
    //主页显示
    //index_api:"http://www.easy-mock.com/mock/59a121428f85d76bb412506b/example/restful/:id/list",
    // index_api: `${host}ls.wshoto.com/app/index.php?i=1&c=entry&do=index_api&m=siyuan_cms`,
    // newslist_api: `${host}ls.wshoto.com/app/index.php?i=1&c=entry&do=newslist_api&m=siyuan_cms`,
    // news_detail_api:`${host}ls.wshoto.com/app/index.php?i=1&c=entry&do=news_detail_api&m=siyuan_cms`,
    index_api: `${host}shanggao.wshoto.com/app/index.php?i=4&c=entry&do=index_api&m=siyuan_cms`,
    newslist_api: `${host}shanggao.wshoto.com/app/index.php?i=4&c=entry&do=newslist_api&m=siyuan_cms`,
    news_detail_api:`${host}shanggao.wshoto.com/app/index.php?i=4&c=entry&do=news_detail_api&m=siyuan_cms`
};

module.exports = config