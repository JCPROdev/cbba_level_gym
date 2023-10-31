<script>
  import { Route, Router } from 'svelte-routing'
  import Landing from './pages/landing/Index.svelte'
  import Login from './pages/login/Index.svelte'
</script>

<main>
  <Router>
    <Route path="/" component={Landing} />
    <Route path="/login" component={Login} />
  </Router>
</main>