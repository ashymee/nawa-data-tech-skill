# Technical Skill

### how to run the test

1. Using Quokka

please install vscode extension [Quokka](https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode), to see the output directly (inline with console.log).

---

First Test
![first test](/ss_first.jpg)

---

Second Test
![second test](/ss_second.jpg)

2. Using CLI

clone this repo:

```bash
git clone https://github.com/ashymee/nawa-data-tech-skill.git
```

> use npm, or

```bash
npm install
npm run result
```

> use yarn, or

```bash
yarn install
yarn result
```

> use pnpm

```bash
pnpm install
pnpm result
```

You can edit value from `index.ts` file to get different results.

```ts
// by default, to get first result, the value given is like down below
const text = 'Sample Case';

// and, to get second result, the value given is like down below
const families = 5;
const members = [1, 2, 4, 3, 3];
```

![cli's results](/ss_cli.jpg)
