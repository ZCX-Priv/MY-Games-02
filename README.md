# MY-Games-02

一个包含多款经典网页游戏的合集项目，所有游戏均可在浏览器中直接运行。

## 🎮 游戏列表

### 1. 2048
经典的数字合成益智游戏，通过滑动方块合成更大的数字。
- **文件路径**: `2048/2048.html`
- **游戏类型**: 益智游戏
- **特点**: 简单易上手，考验逻辑思维

### 2. 8球桌球
逼真的台球游戏体验，支持单人和多人模式。
- **文件路径**: `8球桌球/index.html`
- **游戏类型**: 体育竞技
- **特点**: 物理引擎逼真，操作流畅

### 3. 像素大卡车
像素风格的卡车驾驶游戏，挑战各种地形。
- **文件路径**: `像素大卡车/index.html`
- **游戏类型**: 驾驶游戏
- **特点**: 像素艺术风格，关卡丰富

### 4. 四色牌 (UNO)
经典的UNO纸牌游戏，支持2-4人游戏。
- **文件路径**: `四色牌/index.html`
- **游戏类型**: 纸牌游戏
- **特点**: 多人对战，策略性强

### 5. 小黑屋 (A Dark Room)
文字冒险游戏，从一个黑暗的房间开始你的冒险。
- **文件路径**: `小黑屋/index.html`
- **游戏类型**: 文字冒险
- **特点**: 剧情丰富，支持多语言

### 6. 我的世界网页版（简化版）
简化版的我的世界，在浏览器中体验方块世界。
- **文件路径**: `我的世界网页版（简化版）/index.html`
- **游戏类型**: 沙盒建造
- **特点**: 3D方块世界，创造模式

### 7. 植物大战僵尸 v1.3
经典的塔防游戏，使用植物抵御僵尸入侵。
- **文件路径**: `植物大战僵尸-v1.3/index.html`
- **游戏类型**: 塔防策略
- **特点**: 经典玩法，多种植物和僵尸

### 8. 植物大战僵尸 v1.6
植物大战僵尸的升级版本，增加了更多内容。
- **文件路径**: `植物大战僵尸-v1.6/index.html`
- **游戏类型**: 塔防策略
- **特点**: 更多关卡，优化体验

### 9. 火柴人跑酷
火柴人风格的跑酷游戏，挑战各种障碍。
- **文件路径**: `火柴人跑酷/index.html`
- **游戏类型**: 跑酷动作
- **特点**: 简约画风，操作简单

### 10. 炒股模拟器
股票交易模拟游戏，学习投资理财知识。
- **文件路径**: `炒股模拟器/index.html`
- **游戏类型**: 模拟经营
- **特点**: 真实股市数据，教育意义

## 🚀 快速开始

### 方法一：直接打开
大部分游戏可以直接双击对应的 `index.html` 或游戏文件在浏览器中打开。

### 方法二：本地服务器（推荐）
为了获得最佳体验，建议使用本地服务器运行：

#### 使用 Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### 使用 Node.js
```bash
# 安装 http-server
npm install -g http-server

# 启动服务器
http-server -p 8000
```

#### 使用 Live Server (VS Code)
如果你使用 VS Code，可以安装 Live Server 扩展，右键点击 HTML 文件选择 "Open with Live Server"。

然后在浏览器中访问 `http://localhost:8000`，选择对应的游戏文件夹。

## 📋 系统要求

- **浏览器**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **JavaScript**: 必须启用
- **本地存储**: 部分游戏需要 localStorage 支持
- **音频**: 支持 HTML5 音频（可选）

## 🎯 游戏特色

- ✅ **纯前端**: 所有游戏均为纯前端实现，无需后端服务器
- ✅ **离线游戏**: 大部分游戏支持离线游玩
- ✅ **响应式设计**: 支持桌面和移动设备
- ✅ **多语言支持**: 部分游戏支持多语言界面
- ✅ **开源免费**: 所有代码开源，免费使用

## 📁 项目结构

```
MY-Games-02/
├── 2048/                    # 2048数字游戏
├── 8球桌球/                 # 台球游戏
├── 像素大卡车/              # 像素卡车游戏
├── 四色牌/                  # UNO纸牌游戏
├── 小黑屋/                  # 文字冒险游戏
├── 我的世界网页版（简化版）/ # 简化版我的世界
├── 植物大战僵尸-v1.3/       # 植物大战僵尸v1.3
├── 植物大战僵尸-v1.6/       # 植物大战僵尸v1.6
├── 火柴人跑酷/              # 火柴人跑酷游戏
├── 炒股模拟器/              # 股票模拟游戏
├── LICENSE                  # 许可证文件
└── README.md               # 项目说明文档
```

## 🔧 技术栈

- **前端框架**: 原生 JavaScript, HTML5, CSS3
- **游戏引擎**: 部分游戏使用 Canvas, WebGL
- **音频处理**: Web Audio API, HTML5 Audio
- **本地存储**: localStorage, sessionStorage
- **构建工具**: 部分项目使用 Webpack, Babel

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本项目
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的修改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## ⚠️ 免责声明

> 根据《计算机软件保护条例》第十七条规定：为了学习和研究软件内含的设计思想和原理，通过安装、显示、传输或者存储软件等方式使用软件的，可以不经软件著作权人许可，不向其支付报酬。

- 📚 **仅供学习**：本项目仅用于学习和研究目的
- 🚫 **禁止商用**：不得将内容用于商业或非法用途
- ⏰ **限时使用**：请在下载后24小时内删除
- 💡 **支持正版**：请支持原创游戏开发者
- 📧 **联系方式**：如有侵权请联系删除

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🎉 致谢

感谢所有游戏的原作者和贡献者们！

## 📞 联系方式

如有问题或建议，欢迎通过以下方式联系：

- 提交 Issue
- 发送邮件
- 社交媒体

---

**享受游戏时光！** 🎮✨
