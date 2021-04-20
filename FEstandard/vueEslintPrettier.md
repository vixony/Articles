# Vue项目使用eslint + prettier规范代码风格

### 写在前面

团队开发的项目，如果没有对代码风格作要求，有多少团队成员，就当然会出现多少种不同的代码风格。因此，我们需要一种能够统一团队代码风格的工具，作为强制性的规范，统一整个项目的代码风格。

幸好，我们有 eslint 和 prettier 。

### eslint VS prettier

应该大多数项目都已经采用eslint来对代码进行质量检查，可能少部分还会采用其进行一定程度上的统一风格。那为什么还需要prettier呢？我们先来对它们作一个简单的了解。

#### 各种linters

总体来说，linters有两种能力：

1. **检查代码质量**，比如是否有已定义但未使用的变量，或者使用函数式编程的函数是否产生副作用等。
2. **检查代码风格**，比如每行的最大长度，或者是否使用拖尾逗号等。

其中，eslint文档中，带扳手图标的规则就是eslint能够自动修复的规则。而不带该图标的规则，eslint则只能给出错误或警告，随后由开发者人工修复。

#### prettier

pretter没有对代码的质量进行检查的能力，其只会对代码风格按照指定的规范进行统一，避免一个项目中出现多种不同的代码风格。

### 项目配置

此处使用vue项目作为例子

#### 一、首先配置eslint

如果大家的项目是使用vue cli生成的，并且选择使用eslint的话，那么默认在项目根目录下就会生成.eslintrc.js。如果没有，也可以在项目根目录下创建该文件以及.eslintignore文件

此处我使用eslint-plugin-vue，选择的是vue/strongly-recommended规则。

```
npm install --save-dev eslint eslint-plugin-vue@next
复制代码
// .eslintrc.js

extends: {
    'plugin:vue/strongly-recommended'
}

复制代码
// .eslintignore

/build/
/config/
/dist/
/*.js
/test/unit/coverage/


复制代码
```

如果希望在重新编译的时候eslint自动修复代码，需要在webpack配置中加入eslint，并且设置`fix: true`，并且在devserver中开启eslint。

```
// config/index.js

module.exports = {
  dev: {
    useEslint: true,  
  }
}

复制代码
// webpack.base.conf.js

const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay,
    fix: true,
  }
})

复制代码
```

#### 二、配置prettier

由于使用eslint，并不能最大程度地统一代码风格，因此我们需要引入prettier。

```
npm install --save-dev prettier
复制代码
```

按照实际需要配置prettier

```
//prettier.config.js

module.exports = { 
  "printWidth": 80, // 每行代码长度（默认80）
  "tabWidth": 2, // 每个tab相当于多少个空格（默认2）
  "useTabs": false, // 是否使用tab进行缩进（默认false）
  "singleQuote": true, // 使用单引号（默认false）
  "semi": true, // 声明结尾使用分号(默认true)
  "trailingComma": "all", // 多行使用拖尾逗号（默认none）
  "bracketSpacing": true, // 对象字面量的大括号间使用空格（默认true）
  "jsxBracketSameLine": false, // 多行JSX中的>放置在最后一行的结尾，而不是另起一行（默认false）
  "arrowParens": "avoid" // 只有一个参数的箭头函数的参数是否带圆括号（默认avoid）
}; 

复制代码
```

需要在package.json里面配置调用prettier进行格式化的命令

```
// package.json

"scripts": {
  "format": "prettier --write \"src/**/*.js\" \"src/**/*.vue\"",
}

复制代码
```

至此，可以在命令行中输入npm run format对代码进行格式化了。

#### 三、配置husky和lint-staged

由于直接使用prettier进行代码格式化仍存在一些弊端，例如：

1. 一次性对所有文件进行格式化，如果是项目中途加入prettier，会对一些早已经编写完成的代码进行格式化，可能会造成冲突或者一些不可预知的问题，降低项目稳定性。
2. 每次都要键入npm run format进行代码格式化，多了额外的操作，开发体验不良好。

故此，我们可以修改代码格式化的时机，仅对本次提交的代码进行格式化，并且在代码提交之前进行格式化，确保存入仓库的代码都是格式化后的良好的代码。

husky是一款可以帮助我们使用git hooks的第三方库，可以根据package.json文件里定义的钩子和钩子执行的命令将要执行的操作写对应的钩子脚本里。

lint-staged，官方说明是一款可以对git提交的代码使用linter的第三方库，其依赖于husky使用git hooks。此处我们不仅仅可以利用其调用linters，还可以调用prettier对代码进行格式化。

```
npm install --save-dev lint-staged husky

复制代码
// package.json

"scripts": {
    "precommit": "lint-staged"  // precommit钩子执行lint-staged
},
"lint-staged": {
    "src/**/*.{js,json,css,vue}": [
      "prettier --write",  // 先执行prettier，再执行eslint，保证代码质量
      "eslint --fix",
      "git add"
    ]
},
复制代码
```

#### 四、同时使用eslint和prettier的配置

由于需要同时使用prettier和eslint，而prettier的一些规则和eslint的一些规则可能存在冲突，所以需要将eslint的一些可能与prettier发生冲突的代码格式化规则关闭。这里使用eslint-plugin-prettier和eslint-config-prettier。

eslint-plugin-prettier可以将prettier的规则设置为eslint的规则，对不符合规则的进行提示。（与eslint-plugin-vue相同）

eslint-config-prettier可以关闭eslint可能与prettier发生冲突的代码格式化规则。官方称eslint-plugin-prettier需要与eslint-config-prettier搭配食用才能获得最佳效果。

```
npm install --save-dev eslint-plugin-prettier eslint-config-prettier
复制代码
// .eslintrc.js
module.exports = {
    extends: [
        'plugin:vue/strongly-recommended',
        'plugin:prettier/recommended'
    ]
    rules: {
        "prettier/prettier": "error"
    }
}

复制代码
```

**经过上述配置，每次git commit的时候，都会先执行prettier以及eslint对代码进行格式化和质量检查，确保代码没有问题之后再提交**

### 整体配置文件

```
npm install -D prettier husky lint-staged eslint-config-prettier eslint-plugin-prettier

复制代码
// package.json

{
  "scripts": {
    "format": "prettier --write \"src/**/*.js\" \"src/**/*.vue\"",
    "precommit": "lint-staged"
  },
  "lint-staged": {
    "src/**/*.{js,json,css,vue}": [
      "prettier --write",
      "eslint --fix",
      "git add"
    ]
  },
  "devDependencies": {
    "eslint": "^4.15.0",
    "eslint-config-prettier": "^2.9.0",
    "eslint-plugin-prettier": "^2.6.2",
    "eslint-plugin-vue": "^4.0.0",
    "husky": "^0.14.3",
    "lint-staged": "^7.2.0",
    "prettier": "^1.14.2",
  },
}

复制代码
// eslintrc.js
// https://eslint.org/docs/user-guide/configuring

module.exports = {
  extends: [
    'plugin:vue/strongly-recommended',
    'plugin:prettier/recommended'
  ],
  // add your custom rules here
  rules: {
    // ...other codes
    "prettier/prettier": "error"
  }
}

复制代码
//prettier.config.js

module.exports = { 
  "printWidth": 80, // 每行代码长度（默认80）
  "tabWidth": 2, // 每个tab相当于多少个空格（默认2）
  "useTabs": false, // 是否使用tab进行缩进（默认false）
  "singleQuote": true, // 使用单引号（默认false）
  "semi": true, // 声明结尾使用分号(默认true)
  "trailingComma": "all", // 多行使用拖尾逗号（默认none）
  "bracketSpacing": true, // 对象字面量的大括号间使用空格（默认true）
  "jsxBracketSameLine": false, // 多行JSX中的>放置在最后一行的结尾，而不是另起一行（默认false）
  "arrowParens": "avoid" // 只有一个参数的箭头函数的参数是否带圆括号（默认avoid）
}; 

复制代码
```

### 写在最后

一般IDE集成了eslint或者prettier工具的话，会默认根据项目根目录下相关配置文件进行代码检查。

如果使用vscode，vetur的默认代码风格化使用的就是prettier，会自动检索项目根目录下的prettier配置文件进行格式化。eslint检索工具推荐使用eslint插件，安装后也会自动检索eslint配置文件进行代码检查，非常方便。

以上就是我对规范代码风格的实践，参考了各家的实践，并且制定了符合项目实际的规范。

如果有更好更便捷的统一代码风格的方式，请不吝告知，谢谢！