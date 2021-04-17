# frontend-commit-template

前端代码风格及commit风格规范化模板

> 仅供参考，实际使用请参考工程模板

## 工程模板请参考

- [raw-react](https://github.com/HerbertHe/raw-react)

## 代码风格与commit规范工具

- eslint
- prettier
- commitizen
- cz-customizable
- commitlint
- lint-staged
- husky

## 项目依赖

`npm`全局安装`commitizen`

```bash
npm i -g commitizen
```

## 构建流程

1. 代码风格检查 —— 使用eslint对代码进行检查`.eslintrc.json`
2. 代码风格修复 —— 使用prettier对代码进行格式化`.prettierrc.json`
3. commitizen —— 生成commit`参考package.json`
4. cz-customizable —— 自定义commit提交`.cz-config.js`
5. husky —— 使用git hooks配合commitlint对commit进行检查，配合lint-staged对文件进行规范化处理`.commitlintrc.json`

## 项目使用流程

```bash
# clone仓库
git clone

# 删除.git重新绑定.git

# 进入目录安装依赖
yarn

# 提交流程
git add .
npm run commit
git push
```
