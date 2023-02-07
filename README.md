# Nuxt Heroicons

> **Heroicons version used : v2.0.14**  

Use easily the awesome library [Heroicons](https://heroicons.com/) in your Nuxt project. (Nuxt 2 & Nuxt 3 compatible).

## Install

Install by running the following command with your favorite package manager
```bash
npm install --save nuxt-heroicons 
or
yarn install --save nuxt-heroicons
```

## Configuration

Add the package in `nuxt.config.[js, ts]`

For Nuxt 3
```javascript
export default defineNuxtConfig({
  modules: [
    'nuxt-heroicons/index'
  ]
})
```
For Nuxt 2
```javascript
export default {
  buildModules: [
    'nuxt-heroicons'
  ]
}
```

## Usage

Prefix of icons is ````<hero-````. You can use it at :

```html
<hero-type-name/>
```

- ```type``` can be : "solid", "outline" or "mini"
- ```name``` is equal to the icon name separate with "-"

You can see all icons' name [here](https://heroicons.com/).

## Exemple

```html
<template>
  <section>
    <!-- Outline -->
    <hero-outline-academic-cap />
    
    <!-- Solid -->
    <hero-solid-academic-cap />
    
    <!-- Mini -->
    <hero-mini-academic-cap />
  </section>
</template>
```

### And now enjoy ! 🚀

## Contribute
Open a pull request or issue if you have any recommendation.

## Licence
This project is licensed under the terms of the MIT open source license. Please refer to LICENSE for the full terms.
