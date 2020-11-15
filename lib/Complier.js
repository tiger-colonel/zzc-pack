const fs = require('fs');
const path = require('path');
class Complier {
    constructor(config) {
        this.config = config;
        // 需要保存入口文件的路径
        this.entryId; // './src/index.js';
        // 需要保存所有模块的依赖
        this.modules = {};
        this.entry = config.entry; // 入口路径
        this.root = process.cwd(); // 工作路径
    }
    getSource(modulePath) {
        return fs.readFileSync(modulePath, 'utf8');
    }
    // 构建模块
    buildModle(modulePath, isEntry) {
        // 拿到模块的内容
        const source = this.getSource(modulePath);
        // 模块id modulePath modulePath - this.root
        const moduleName = `./${path.relative(this.root, modulePath)}`;
        console.log(moduleName);
        this.parse(source, path.dirname(moduleName));
    }
    emitFile() {

    }
    run() {
        // 执行 并创建模块的依赖关系
        this.buildModle(path.resolve(this.root, this.entry), true);
        // 发射一个文件  打包后的文件
        this.emitFile();
    }
}

module.exports = Complier;
