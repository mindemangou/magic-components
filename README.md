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
Each `data-*` attribute you add to the component becomes a property accessible via element.magicData.
Use the `refreshMagicData` method to refresh data attributes retrieved from the server

```html

    <app-app 
    data-name="doe" 
    data-isAdmin='false' 
    data-json='{"country":"benin"}'>
      
    </app-app>

```

```javascript
import { define} from "@mindemangou/magiccomponents"

define({tagname:'app-app'},async ({element})=> {
    
    console.log(element.magicData) //{ tagName:'app-app',isAdmin:'false',json:{country:"benin"} }
    element.refreshMagicData()
})

```

**⚠️ Important**:If you mount a component in multiple places within your application, the refreshMagicData method will not work unless you add a data-key attribute to each instance of the component.

```html
    <app-app 
    data-key='key1'></app-app>

    <app-app 
    data-key='key2'></app-app>

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

For detailed documentation and examples, visit the [official documentation](https://github.com/mindemangou/magic-components).


## License

MagicComponents is licensed under the [MIT License](LICENSE).

---
Happy coding with MagicComponents!