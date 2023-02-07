# Usage

Install the package :
`npm i nuxt-heroicons`

After in `nuxt.config.[js, ts]` add :

```javascript
/*
  Nuxt 3
*/
export default defineNuxtConfig({
  modules: [
    //...
    'tw-icons/index'
  ],
})

/*
  Nuxt 2
*/
export default {
  buildModules: [
    //...
    'tw-icons'
  ],
}
```

Once done you can call the heroicons.

```html
<hero-type-name />
```

- "type" is equal to : solid, outline or mini
- "name" is equal to the icon name separate with "-"

You can see all the icons [here](https://heroicons.com/).

## Exemple

```html
<template>
  <div class="section">
    <!-- Outline -->
    <hero-outline-academic-cap />
    
    <!-- Solid -->
    <hero-solid-academic-cap />
    
    <!-- Mini -->
    <hero-mini-academic-cap />
  </div>
</template>
```

And now enjoy ! 🚀
