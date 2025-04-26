# MagicComponents

MagicComponents is a JavaScript library that allows you to easily create custom elements

## Features

- **Reusable Components**: Create modular and reusable UI components.
- **Lightweight**: Minimal dependencies for fast performance.

## Installation

You can install MagicComponents via

```bash
npm install @mindemangou/magiccomponents

or

pnpm install @mindemangou/magiccomponents
```


## Usage

Here’s a quick example of how to use MagicComponents:

```javascript
import { define} from "@mindemangou/magiccomponents"

define({tagname:'app-app'},async ({element})=> {
    
    console.log(element)
    
})


```
## Data attribut
Each data-* attribute you add to the component becomes a property accessible via element.magicData

```html

    <salut-salut 
    data-name="doe" 
    data-key='sghwy625' 
    data-json='{"country":"benin"}'>
      
    </salut-salut>

```

```javascript
import { define} from "@mindemangou/magiccomponents"

define({tagname:'app-app'},async ({element})=> {
    
    console.log(element.magicData)
    
})


```

## Shadow Dom

To enable component isolation using the Shadow DOM, set the allowShadowDom property to true.

**⚠️ Important**: Once rendered inside the Shadow DOM, the component is no longer influenced by global CSS styles.
To inject external styles into the component, use the stylecontent property

```javascript
import { define} from "@mindemangou/magiccomponents"
import stylecontent from './css/style.css?raw'

define({tagname:'app-app',allowShadowDom:true,stylecontent},async ({element})=> {
    
    element.innerHTML="<h1 class='name' >John Doe</h1>"
    
})


```

## Documentation

For detailed documentation and examples, visit the [official documentation](https://example.com/magiccomponents-docs).

## Contributing

Contributions are welcome! Please read our [contributing guidelines](CONTRIBUTING.md) before submitting a pull request.

## License

MagicComponents is licensed under the [MIT License](LICENSE).

---
Happy coding with MagicComponents!