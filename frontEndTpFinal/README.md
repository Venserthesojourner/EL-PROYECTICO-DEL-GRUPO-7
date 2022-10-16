# TP FINAL - FRONTEND

## Requisitos

```
Node 12+ for Quasar CLI with Webpack, Node 14+ for Quasar CLI with Vite.
Yarn v1 (strongly recommended), PNPM, or NPM.
```

## Instalación

- Debemos estar parados en la carpeta del frontend: `cd frontEndTpFinal`

`npm i -g @quasar/cli`
`npm init quasar`

## ¿Cómo levantar el proyecto de quasar?

- Instalamos dependencias: `npm install`
- Levantamos el proyecto: `quasar dev`

Lo visualizamos en `http://localhost:9000/`

## ¿Errores / Advertencias?

1. Error de linebreak-style en windows: **`Expected linebreaks to be 'LF' but found 'CRLF' linebreak-style`**.

Solución: Solución completa en [Stackoverflow](https://stackoverflow.com/questions/39114446/how-can-i-write-a-eslint-rule-for-linebreak-style-changing-depending-on-windo/43008668#43008668).

```
module.exports = {
  extends: 'google',
  quotes: [2, 'single'],
  globals: {
    SwaggerEditor: false
  },
  env: {
    browser: true
  },
  rules:{
    // windows linebreaks when not in production environment
    "linebreak-style": ["error", process.env.NODE_ENV === 'prod' ? "unix" : "windows"] // <----------
  }
};
```

2. Advertencia de soporte de typescript

```
WARNING: You are currently running a version of TypeScript which is not officially supported by @typescript-eslint/typescript-estree.

You may find that it works just fine, or you may not.

SUPPORTED TYPESCRIPT VERSIONS: >=3.3.1 <4.8.0

YOUR TYPESCRIPT VERSION: 4.8.2

Please only submit bug reports when using the officially supported version.
```

Solución: Pasarse a una versión anterior que tenga soporte. De todas formas, esta advertencia no afecta en el proyecto en general, solo es un mensaje molesto al momento de levantar el servidor.

## Bibliografía

[Documentación de Quasar](https://quasar.dev)
[Foro de Quasar](https://github.com/quasarframework/quasar/discussions/)
[Comunidad de Quasar en Discord](https://discord.com/invite/5TDhbDg)
