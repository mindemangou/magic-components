# MagicComponents

**MagicComponents** is a modern, lightweight JavaScript/TypeScript library for building fast, reusable, and type-safe custom elements (Web Components) with minimal boilerplate.  
It supports Shadow DOM, prop validation, secure DOM manipulation, and seamless integration with React via slots.

---

## ✨ Features

- **Reusable Custom Elements**: Define modular UI components easily.
- **Shadow DOM Support**: Full encapsulation and style isolation.
- **Prop Validation**: Type, required, and default value checks for props.
- **Secure by Default**: DOMPurify integration for safe HTML injection.
- **Data Attributes as Props**: All `data-*` attributes are automatically parsed and available as props.
- **Intersection Observer**: Lazy rendering when components become visible.

- **TypeScript First**: Strong typing for all APIs.
- **Lightweight**: Minimal dependencies, fast runtime.


---

## 🚀 Installation

```bash
npm install @mindemangou/magiccomponents
# or
pnpm install @mindemangou/magiccomponents
```


---

## 🛠️ Usage

### Basic Example

```typescript
import { define } from "@mindemangou/magiccomponents";

define({ tagname: 'app-hello' }, ({ element, props }) => {
  element.innerHTML = `<h1>Hello, ${props.name || 'World'}!</h1>`;
});
```

```html
<app-hello data-name="Magic"></app-hello>
```

---

### Shadow DOM

```typescript
import { define } from "@mindemangou/magiccomponents";
import stylecontent from './style.css?raw';

define(
  { tagname: 'app-shadow', allowShadowDom: true, stylecontent },
  ({ element }) => {
    element.innerHTML = `<div class="shadowed">Shadow DOM content</div>`;
  }
);
```

---

### Props & Data Attributes

All `data-*` attributes are automatically parsed and available in the `props` object.

```html
<user-card data-name="Jane" data-age="28" data-json='{"country":"Benin"}'></user-card>
```

```typescript
define({ tagname: 'user-card' }, ({ element, props }) => {
  // props: { tagname: 'user-card', name: 'Jane', age: '28', json: { country: 'Benin' } }
  element.innerHTML = `<p>${props.name} (${props.age}) - ${props.json.country}</p>`;
});
```

---

### Slots

MagicComponents supports named slots for flexible content distribution.

```html
<my-layout>

  <div slot="header">Header Content</div>
  <div slot="main">Main Content</div>

</my-layout>

```

---

### 🪄 Magic Fragment

You can use the `<magic-fragment>` tag inside your templates or slots to group multiple elements **without adding extra wrappers**.  
This is especially useful when you want to return multiple root nodes in a slot or template.

**Example:**

```html
<my-layout>
    <magic-fragment slot="main">
      <section>Section 1</section>
      <section>Section 2</section>
    </magic-fragment>
  </div>
```

In your component, all children of `<magic-fragment>` will be injected as siblings, not wrapped in an extra element.

---

### Intersection Observer (Lazy Rendering)

Render components only when they become visible by using the `whenVisible` option.

```typescript
define(
  { tagname: 'lazy-section', whenVisible: true },
  ({ element }) => {
    element.innerHTML = `<p>This section is rendered only when visible!</p>`;
  }
);
```

---


You can use the data-hider attribute to hide or perfom actions on child element of the custom elements before running connected callback

```html
<my-layout data-hider > <!-- add data-hider  -->
  <div slot="info"></div>
</my-layout>

```

```css
  /* Hide slot with css */
 [data-hider] > [slot] {
  opacity:0
 }

```

---

## 📚 Documentation

- [Official Documentation & API Reference](https://github.com/mindemangou/magic-components)
- [React Slot Adapter](https://www.npmjs.com/package/@mindemangou/magiccomponents-react)

---

## 🛡️ Security

- All HTML content injected via templates is sanitized with [DOMPurify](https://github.com/cure53/DOMPurify).
- Data attributes are safely parsed and encoded to prevent XSS.

---


## 🧑‍💻 Contributing

Contributions, issues and feature requests are welcome!  
See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 📄 License

MIT © [Mindemangou FADONOUGBO](https://github.com/mindemangou)

---

Happy coding with **MagicComponents**! 🚀
