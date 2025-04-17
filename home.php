<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?= $_GET['page'] ;?></title>
    <!-- if development -->

    <link rel="stylesheet" href="/src/css/global.css">
 
  </head>
  <body hx-ext="">

 

    
    <pre>
      <?= var_dump(headers_list()) ?>
    </pre>
    <h1>My page <?= $_GET['page'] ;?></h1>
    <button></button>
    <app-app data-age="<?= date('s') ?>" data-n="12" data-val='<?= json_encode(['ville'=>'cotonou']) ?>'  data-ville="benin" data-num="918102" data-select-val data-key="okok2">  
      <template>
       
      </template>
      <h1>LOADING....</h1>
    </app-app>

    

    <?= var_dump(addslashes(json_encode(['ville'=>'cotonou'])) ) ?>
  <a href="#"></a>
    <a href="/about.php" hx-boost="true">go to about </a>
    <a href="http://localhost:8000/s/3/cynthia-coffey?page=Home" hx-boost="true">go to home </a>
    <a href="http://localhost:8000/about.php" hx-boost="true">go to about </a>

    <button hx-get="/test" >okok</button>

    <salut-salut>
      <slot name="attributes">Slot</slot>
      <p slot="essai" >Salut 1742490746666 init value</p>
    </salut-salut>

    <salut-salut data-key="second">
      <p>Salut 1742490746666 init value</p>
    </salut-salut>

    <salut-salut data-key="second4" >
      <p>Salut 1742490746666 init value</p>
    </salut-salut>


    <footer-footer data-key="jjj" data-time="<?= date('s') ?>"></footer-footer>
 
    <script type="module">
  import RefreshRuntime from 'http://localhost:5173/@react-refresh'
  RefreshRuntime.injectIntoGlobalHook(window)
  window.$RefreshReg$ = () => {}
  window.$RefreshSig$ = () => (type) => type
  window.__vite_plugin_react_preamble_installed__ = true
</script>
<script type="module" src="http://localhost:5173/@vite/client"></script>
  <script type="module" src="http://localhost:5173/src/App.tsx"></script>
    <script type="module" src="http://localhost:5173/src/htmx.ts"></script>
   <!--  <script src="/node_modules/htmx.org"></script> -->
   <!--  <script src="https://unpkg.com/htmx.org/dist/ext/head-support.js"></script> -->
 <!--  <script src="/node_modules/htmx.org/dist/ext/debug.js"></script> -->
   </body>
</html>
