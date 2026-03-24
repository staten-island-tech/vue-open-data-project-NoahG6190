<template>
  <div id="app">
    <header class="site-header">
      <div class="brand">Open Data Viewer</div>
    </header>
    <main class="site-main">
      <RouterView />
    </main>
    <footer class="site-footer">Data from NYC Open Data</footer>
  </div>
</template>

<script setup></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap');
:root{
  --bg:#f6f8fb;
  --card:#ffffff;
  --accent:#2563eb;
  --muted:#6b7280;
}
#app{font-family:Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color:#111827; background:var(--bg); min-height:100vh;}
.site-header{background:linear-gradient(90deg, rgba(37,99,235,0.08), transparent); padding:18px 24px; box-shadow:0 1px 0 rgba(0,0,0,0.03);}
.brand{font-weight:600; color:var(--accent); font-size:1.1rem}
.site-main{padding:24px 12px; max-width:1100px; margin:0 auto}
.site-footer{text-align:center; color:var(--muted); font-size:0.9rem; padding:18px 0}
</style>
