const fs = require('fs').promises;

function camelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}

function upperFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function removeDash(string) {
    return string.replaceAll('-', '').split('.')[0];
}

setData();

async function setData() {
    const data = await fs.readdir("./svg", 'utf8');

    const fileNumber = data.length;
    let i = 0;

    for await (const fileName of data) {

        let file, fileComponents;
        try {
            file = await fs.readFile(`./svg/${fileName}`, 'utf8');
            //fileComponents = await fs.readFile(`./components/${removeDash(fileName)}.vue`, 'utf8');
        } catch (e) {
            console.log(e)
        }

        const newName = `Mini${removeDash(upperFirst(camelCase(fileName)))}`;

        const newFile = `
        <script>
        export default {
            name: '${newName}',
            props: {
                type: {
                    type: String,
                    default: "solid"
                }
            }
        }
        </script>
        
        <template>
            ${file}
        </template>
        `;

        try {
            //await fs.unlink(`./components/${newName}.vue`);
            await fs.writeFile(`./components/mini/${newName}.vue`, newFile);
        } catch (e) {
            console.log(e);
        }

        i++;

        //console.log(`${i}/${fileNumber}`);
    }
}