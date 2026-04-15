# Dreisam 文档仓库

这个仓库只包含文档站点。

## 应用

- `apps/sdk-ol`：在线SDK开发文档「增强SDK」
- `apps/sdk`：离线SDK开发文档「标准SDK」

## 环境要求

- Node.js `>= 20`
- pnpm `>= 10`

## 常用命令

```bash
pnpm install
pnpm run dev:sdk
pnpm run dev:sdk-ol
```

## 单独构建

- `pnpm run build:sdk`
- `pnpm run build:sdk-ol`

## 构建输出目录

- `apps/sdk/.vitepress/dist`
- `apps/sdk-ol/.vitepress/dist`
