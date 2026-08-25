# inialum-lp

Official website for INIALUM

## Development

> [!NOTE]
>
> - This project uses Astro 7 and Vite Plus. You can read the Astro documentation [here](https://docs.astro.build).

### Setup

1. Clone this repository
2. Install dependencies

   ```shell
   vp install
   ```

3. Run the development server

   ```shell
   vp run dev
   ```

### Validation

```shell
vp run lint
vp run typecheck
vp run build
```

Oxfmt and Oxlint handle JavaScript, TypeScript, styles, and configuration files. Astro files remain formatted with Prettier and checked with `astro check`; TypeScript Go checks the remaining TypeScript sources through Vite Plus.

## License

Licensed under [Apache License 2.0](LICENSE).
