module.exports = {
    types: [
        {
            value: ":tada: initial",
            name: "🎉 initial:  初始化项目",
        },
        { value: ":page_facing_up: license", name: "📄 license: 新增或更新许可证" },
        {
            value: ":see_no_evil: gitignore",
            name: "🙈 gitignore: 新增或更新.gitignore文件",
        },
        { value: ":sparkles: feat", name: "✨ feat:    新的特性" },
        { value: ":boom: feat", name: "💥 feat:    不兼容更新" },
        { value: ":alembic: feat", name: "⚗ feat:    实验性功能" },
        { value: ":bug: fix", name: "🐛 fix:    修复bug" },
        {
            value: ":ambulance: fix",
            name: "🚑 fix:    bug紧急修复",
        },
        {
            value: ":lock: fix",
            name: "🔒 fix:    修复安全性问题",
        },
        { value: ":alien: fix", name: "👽 fix:    修复因外部API修改导致的更新" },
        { value: ":card_file_box: fix", name: "🗃 fix:    数据库有关的更改" },
        { value: ":pencil2: fix", name: "✏️ fix:    修复打字错误" },
        { value: ":bulb: comments", name: "💡 comments:    代码新增或者更新注释" },
        { value: ":pencil: docs", name: "📝 docs:    更改文档" },
        {
            value: ":fire: remove",
            name: "🔥 remove:    删除代码或文件",
        },
        {
            value: ":lipstick: ui",
            name: "💄 ui:    主题样式修改",
        },
        { value: ":iphone: ui", name: "📱 ui:    响应式设计" },
        { value: ":dizzy: ui", name: "💫 ui:    新增或更新动画或过渡效果" },
        {
            value: ":zap: perf",
            name: "⚡️ perf:    提升性能的修改",
        },
        { value: ":wheelchair: perf", name: "♿️ perf:    提高可用性" },
        { value: ":children_crossing: perf", name: "🚸 perf:    提升用户体验" },
        { value: ":mag: perf", name: "🔍 perf:    SEO优化" },
        {
            value: ":globe_with_meridians: localization",
            name: "🌐 localization:    本土化或国际化",
        },
        {
            value: ":recycle: refactor",
            name: "♻️ refactor:    非修复bug和增加新特性的代码重构",
        },
        { value: ":poop: refactor", name: "💩 refactor:    重写屎一样的代码" },
        {
            value: ":building_construction: refactor",
            name: "🏗 refactor:    架构级修改",
        },
        {
            value: ":truck: refactor",
            name: "🚚 refactor:    移动或者修改资源名, (e.g.: 文件、地址、路由)",
        },
        {
            value: ":art: style",
            name:
                "🎨 style:  更改代码风格, 不涉及功能的更改 (空格, 格式化代码, 等等)",
        },
        { value: ":white_check_mark: test", name: "✅ test:    测试" },
        { value: ":hammer: build", name: "🔨 build:    新增或更新构建脚本" },
        {
            value: ":rocket: deploy",
            name: "🚀 deploy:    项目部署",
        },
        {
            value: ":package: package",
            name: "📦 package:    新增或者更新编译代码或者包",
        },
        {
            value: ":bookmark: release",
            name: "🔖 release:    发布新的版本",
        },
        {
            value: ":wrench: chore",
            name: "🔧 chore:    构建流程和辅助工具更改, 比如依赖库",
        },
        { value: ":twisted_rightwards_arrows: merge", name: "🔀 merge:    分支合并" },
        { value: ":rewind: revert", name: "⏪ revert:    回滚代码" },
        {
            value: ":construction_worker: ci",
            name: "👷 ci:    新增或更新持续集成系统",
        },
        {
            value: ":green_heart: ci",
            name: "💚 ci:    修复持续集成创建",
        },
        { value: ":loud_sound: log", name: "🔊 log:    新增或更新log" },
        { value: ":mute: log", name: "🔇 log:    删除log" },
        {
            value: ":heavy_plus_sign: dependencies",
            name: "➕ dependencies:    新增依赖",
        },
        {
            value: ":heavy_minus_sign: dependencies",
            name: "➖ dependencies:    移除依赖",
        },
        {
            value: ":arrow_down: dependencies",
            name: "⬇️ dependencies:    降低依赖版本",
        },
        { value: ":arrow_up: dependencies", name: "⬆️ dependencies:    依赖版本更新" },
        {
            value: ":pushpin: dependencies",
            name: "📌 dependencies:    固定依赖版本",
        },
        { value: ":chart_with_upwards_trend:", name: "📈    新增分析或跟踪代码" },
        { value: ":construction: WIP", name: "🚧 WIP:    工作流" },
        {
            value: ":rotating_light: remove warnings",
            name: "🚨 remove warnings:    移除警告",
        },

        {
            value: ":label: fix",
            name: "🏷️ fix:    新增或更新类型 (TypeScript, Flow)",
        },
        { value: ":goal_net: fix", name: "🥅 fix:    错误调试" },

        { value: ":bento: assets", name: "🍱 assets:    更新资源" },
        { value: ":beers: drunk", name: "🍻 drunk:    酒喝多了写代码" },
        {
            value: ":busts_in_silhouette: contributor",
            name: "👥 contributor: 新增贡献者",
        },
        { value: ":clown_face: mock", name: "🤡 mock:    模拟相关" },
        { value: ":egg:", name: "🥚    新增或更新彩蛋" },
        {
            value: ":camera_flash: snapshots",
            name: "📸 snapshots:    新增或更新快照",
        },
        { value: ":seedling: seed", name: "🌱 seed:    新增或更新种子文件" },
        {
            value: ":triangular_flag_on_post: flags",
            name: "🚩 flags:    增删更新特性flags",
        },
        {
            value: ":wastebasket: deprecating",
            name: "🗑 deprecating:    有争议的代码，应当被删除",
        },
    ],

    allowTicketNumber: false,
    isTicketNumberRequired: false,
    ticketNumberPrefix: "TICKET-",
    ticketNumberRegExp: "\\d{1,5}",

    // override the messages, defaults are as follows
    messages: {
        type: "选择你要commit的类型:\n",
        subject: "输入简短精炼的更改描述\n",
        body: '对于更改的详细描述 (可选). 使用 "|" 换行:\n',
        breaking: "列出 BREAKING CHANGES (可选):\n",
        footer: "列举更改关闭的ISSUES (可选). E.g.: #31, #34:\n",
        confirmCommit: "你确认上述的commit吗?",
    },

    allowCustomScopes: true,
    allowBreakingChanges: [":boom: feat"],
    skipQuestions: ["scope"],

    // limit subject length
    subjectLimit: 100,
    breaklineChar: "|", // It is supported for fields body and footer.
    footerPrefix: "关闭的ISSUES:",
    // askForBreakingChangeFirst : true, // default is false
}
