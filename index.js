import {join} from 'pathe';
import {defineNuxtModule} from '@nuxt/kit';
import Vue from 'vue';

const fs = require('fs');

// Utils
if (typeof require.context === 'undefined') {
    require.context = (base = '.', scanSubDirectories = false, regularExpression = /\.js$/) => {
        const files = {};

        function readDirectory(directory) {
            fs.readdirSync(directory).forEach((file) => {
                const fullPath = join(directory, file);

                if (fs.statSync(fullPath).isDirectory()) {
                    if (scanSubDirectories) readDirectory(fullPath);

                    return;
                }

                if (!regularExpression.test(fullPath)) return;

                files[fullPath] = true;
            });
        }

        readDirectory(join(__dirname, 'components'));

        function Module(file) {
            return require(file);
        }

        Module.keys = () => Object.keys(files);

        return Module;
    };
}

function camelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}

function upperFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default defineNuxtModule({
    hooks: {
        "components:dirs"(dirs) {
            dirs.push({
                path: join(__dirname, 'components/mini'),
                prefix: 'hero',
            });
            dirs.push({
                path: join(__dirname, 'components/outline'),
                prefix: 'hero',
            });
            dirs.push({
                path: join(__dirname, 'components/solid'),
                prefix: 'hero',
            });
        }
    }
})

try {
//Mini
    const componentsMini = require.context(
        join(__dirname, 'components/mini'),
        false,
        /Tw[A-Z]\w+\.(vue|js)$/
    );

    componentsMini.keys().forEach((fileName) => {
        const componentConfig = componentsMini(fileName)
        const componentName = upperFirst(
            camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
        )
        Vue.component(componentName, componentConfig.default || componentConfig)
    });

//Outline
    const componentsOutline = require.context(
        join(__dirname, 'components/outline'),
        false,
        /Tw[A-Z]\w+\.(vue|js)$/
    );

    componentsOutline.keys().forEach((fileName) => {
        const componentConfig = componentsOutline(fileName)
        const componentName = upperFirst(
            camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
        )
        Vue.component(componentName, componentConfig.default || componentConfig)
    });

//Mini
    const componentsSolid = require.context(
        join(__dirname, 'components/solid'),
        false,
        /Tw[A-Z]\w+\.(vue|js)$/
    );

    componentsSolid.keys().forEach((fileName) => {
        const componentConfig = componentsSolid(fileName)
        const componentName = upperFirst(
            camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
        )
        Vue.component(componentName, componentConfig.default || componentConfig)
    });
} catch (e) {
    console.log(`An error occurred while loading the nuxt-heroicons package : ${e}`)
}