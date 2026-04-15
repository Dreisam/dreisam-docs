# Dreisam 文档仓库

这个仓库只包含文档站点。

## 应用

- `apps/protocol`：旧协议文档站点，多语言协议页面
- `apps/sdkpro`：在线SDK开发文档「增强SDK」
- `apps/sdk`：离线SDK开发文档「标准SDK」

## 环境要求

- Node.js `>= 20`
- pnpm `>= 10`

## 常用命令

```bash
pnpm install
pnpm run dev:protocol
pnpm run dev:sdk
pnpm run dev:sdkpro
```

## 单独构建

- `pnpm run build:protocol`
- `pnpm run build:sdk`
- `pnpm run build:sdkpro`

## 构建输出目录

- `apps/protocol/docs/.vitepress/dist`
- `apps/sdk/.vitepress/dist`
- `apps/sdkpro/.vitepress/dist`

## GitHub Pages

当前仓库已经准备好 GitHub Pages 部署，发布后路径如下：

- 根入口：`/dreisam-docs/`
- 标准 SDK：`/dreisam-docs/sdk/`
- 增强 SDK：`/dreisam-docs/sdkpro/`

部署入口是 `.github/workflows/deploy-pages.yml`，触发条件是推送到 `main` 分支或手动运行 workflow。
