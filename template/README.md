<!--
 * @Author: ice
 * @Date: 2020-12-14 17:57:03
 * @LastEditTime: 2020-12-23 21:26:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /cra-template-rack-typescript/template/README.md
-->
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## [README](https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/README.md)
## Others Scripts
In the project directory, you can also run:

### `npm run dev`
Start project with no mock.
### `npm run prettier`
Format the files in the directory src.

### `npm run lint`
Check whether the files in the directory src are standardized.

## /public/settings[-pro].json参数详解

> 所有值均为string类型
- is_production 是否为生产环境，枚举值："true" | "false"
- api_origin API源，例："https://p2.nokafc.testing.poeticloud.com"
- api_pathname API路径名称 例："/api/v1"
- version 版本（非必填） 例："v1.0.0"
