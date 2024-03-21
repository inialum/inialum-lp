# inialum-lp

Official website for INIALUM

## Development

> [!NOTE]
>
> - This project uses Astro. You can read the documentation [here](https://docs.astro.build).

### Setup

1. Clone this repository
2. Install dependencies

   ```shell
   pnpm install
   ```

3. Run the development server

   ```shell
   pnpm run dev
   ```

## Storybook

You can run storybook to see the components in isolation.

```shell
pnpm run storybook:dev
```

## Deployment

This project is deployed to [Cloudflare Pages](https://pages.cloudflare.com) using GitHub Actions. When a new commit is pushed to `main` branch, the project will be automatically deployed.  
If you want to deploy to the staging environment, push the commit to `staging` branch. (`@inialum/inialum-dev` will handle this)

## License

Licensed under [Apache License 2.0](LICENSE).
