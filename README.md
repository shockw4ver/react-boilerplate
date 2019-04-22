# React boilerplate

## ❗Warning

该项目只作为模板维护，如果你需要使用该模板构建你的项目，请先克隆本项目到本地并删除 remote origin，然后在 gitlab 中重新注册一个项目作为 remote origin。
这个项目会不断更新，因此建议在你的项目中添加 remote template 来随时同步。

## 🏗Structure

**原则上，你的代码都应该在 src 中完成，如果无法通过`app.config.toml` 的配置使 src 以外的文件符合需求，请联系该项目的管理员添加相应配置或作对应的调整。（你可以先进行修改再通知管理员，以提高效率）**

### 🏠Core libs

- React
  版本为当前模板最近更新的时间对应的最新 release
- Mobx
  为了兼容词霸 app，使用 major version 4 的最新 release
- MobxReact
  版本为当前模板最近更新的时间对应的最新 release
- ReachRouter
  版本为当前模板最近更新的时间对应的最新 release，该路由较之 react-router 更加轻便，目前的需求也都支持

### 🗄Files

src 文件夹的基本结构如下：

```
src
├── App.js
├── App.test.js
├── components
├── containers
├── index.js
├── logo.svg
├── pages
├── serviceWorker.js
├── shared
├── store
├── layouts
└── utils
```

#### 组件文件结构规范

##### 组件结构

所有的组件都应该遵循如下结构，即便该组件暂时无须样式文件；其中，由于目前还没有单元测试的规范，因而 `index.test.js` 暂时不要求
```
MyComp
├── index.scss
├── index.js
└── index.test.js
```

##### 文件夹结构

- **pages**

  页面（路由）的源码，所有页面级的组件都可以在这里面编写
  - store 关联：👌
  - 全局引用：⛔
  - alias: `@pages`
  - generate command: `yarn g page [PAGENAME]`

- **shared**

  模态类型的组件，如 modal、prompt、toast 等

  - store 关联：👌
  - 全局引用：👌
  - alias: `@shared`
  - generate command: ☕

- **components**

  一些只用作视觉化数据的全局组件，它们最好都是无状态的

  - store 关联：⛔
  - 全局引用：👌
  - alias: `@components`
  - generate command: `yarn g component [COMPNAME]`

- **containers**

  容器类型的组件都写在这里面，它们可以产生副作用，并且通常是自带状态的。一个完整的页面应当由 0 个（页面本身也是容器）或多个容器组成

  - store 关联：👌
  - 全局引用：👌
  - alias: `@containers`
  - generate command: `yarn g container [CONTAINERNAME]`

- **layouts**

  应用的基本布局组件，如 sidebar、toolbar、tabbar 等，在页面或路由中根据需要引用它们

  - store 关联：👌
  - 全局引用：👌
  - alias: `@layouts`
  - generate command: `yarn g layout [LAYOUTNAME]`

**PS**：容器组件（包括页面）可以拥有自身作用域下的子组件，但需保证它们不会被该容器以外的其他的组件引用。若需添加子组件，请在该容器下建立 `chilren` 文件夹来存放它们

#### 状态管理中心

目前的项目不会涉及过于复杂的数据流，因此采用 coding 效率更高的 MobX 作为状态管理工具

- **store**

  - alias: `@store`
  - generate command: `yarn g store [STORENAME]`

#### 网络

采用基于 fetch 的 `umi-request` 作为 http 请求库，请在 services 文件夹中查看规范的写法。  
同时，网络请求模块是可替换的，样板代码也非常简洁，因此没有冗余的 generator 实现。

- **services**

  - alias: `@service`

#### 静态资源

存放在 assets 文件夹中，其中，图标文件放在 icons 子文件夹中，其他图片放在 images 文件夹中；其他文件可自行建立子文件夹存放，但文件夹名称需明确

- **assets**

  - alias: `@assets`

#### 工具

一些工具类和工具函数统一编写在 utils 中

- **utils**

  - alias: `@utils`
  - generate command: ☕

## 🌏Vendors

- **normalize.css**
  
  经典的样式一致化 css 库

- **reset.css**

  样式重置

- **date-fns**

  比 `momentjs` 更加灵活轻量的日期时间工具，其使用方式类似于 `lodash`
  