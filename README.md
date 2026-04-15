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
