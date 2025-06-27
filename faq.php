<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <!-- if development -->
     <style>
      html.is-changing .transition-fade {
        transition: opacity 0.25s;
        opacity: 1;
      }
      html.is-animating .transition-fade {
        opacity: 0;
      }
    </style>
  </head>
  <body>

    <add-add  >

    </add-add>

    <remove-remove >

    </remove-remove>

    <number-number>

    </number-number>

    
    <main id="swup" class="transition-fade">
      <h1>Welcome</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </main>
    <script type="module">
      import Swup from 'https://unpkg.com/swup@4?module';
      const swup = new Swup();
    </script>
  </body>
 
    <script type="module">
      import RefreshRuntime from 'http://localhost:5173/@react-refresh'
      RefreshRuntime.injectIntoGlobalHook(window)
      window.$RefreshReg$ = () => {}
      window.$RefreshSig$ = () => (type) => type
      window.__vite_plugin_react_preamble_installed__ = true
    </script>
    
    <script type="module" src="http://localhost:5173/@vite/client"></script>
    <script type="module" src="http://localhost:5173/src/ts/App.tsx"></script>
    <script type="module" src="http://localhost:5173/src/ts/index.ts"></script>
    <script type="module" src="http://localhost:5173/src/ts/components.tsx"></script>



   </body>
</html>
