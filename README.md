# @airx/sdk

[![npm](https://img.shields.io/npm/v/@airx/sdk.svg?style=plastic)](https://npmjs.org/package/@airx/sdk) [![npm](https://img.shields.io/npm/dm/@airx/sdk.svg?style=plastic)](https://npmjs.org/package/@airx/sdk)
[![npm](https://img.shields.io/npm/dt/@airx/sdk.svg?style=plastic)](https://npmjs.org/package/@airx/sdk)

## 安装

```bash
npm i --save @airx/sdk
# 或
yarn add @airx/sdk
```

## 使用

```js
const SDK = require('@airx/sdk');

const sdk = new SDK({
  SecretId: 'xxxx',
  SecretKey: 'xxxx',
  // 访问的域名:
  // Domain: 'sandbox.dwi.ng',
  // 是否启用HTTPS:
  // Secure: true 
});

(async () => {
  const result = await sdk.get('/user/check', {
    username: '13212341234'
  });
  console.log(result);
})();
```

## 无缝对接腾讯云接口

Demo:

```js
const SDK = require('@airx/sdk');

const cvm = new SDK({
  SecretId: 'xxxx',
  SecretKey: 'xxxx',
  Domain: 'cvm.api.qcloud.com'
});

(async () => {
  const result = await cvm.get('/v2/index.php', {
    Action: 'DescribeInstances',
    Region: 'gz'
  });
  console.log(result);
})();
```


## License

MIT

通过支付宝捐赠：

![qr](https://cloud.githubusercontent.com/assets/1890238/15489630/fccbb9cc-2193-11e6-9fed-b93c59d6ef37.png)
