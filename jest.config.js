/** 配置参考: https://jestjs.io/zh-Hans/docs/configuration */
/** 环境搭建参考 https://juejin.cn/post/6955392566992830477 */
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePaths: ['<rootDir>/src/'],
};