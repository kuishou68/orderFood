/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

let baseUrl = 'https://api.52kfw.cn';
let routerMode = 'hash';
let imgBaseUrl = 'https://api.52kfw.cn';


if (process.env.NODE_ENV == 'development') {
  imgBaseUrl = 'https://api.52kfw.cn/img/';

} else if (process.env.NODE_ENV == 'production') {
  baseUrl = 'https://api.52kfw.cn';
  imgBaseUrl = 'https://api.52kfw.cn/img/';
}

export {
  baseUrl,
  routerMode,
  imgBaseUrl,
}
