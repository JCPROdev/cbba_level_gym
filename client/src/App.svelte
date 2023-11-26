<script>
  import { Route, Router } from "svelte-routing";
  import Landing from "./pages/landing/Index.svelte";
  import Login from "./pages/login/Index.svelte";
  import Aside from "./components/Aside.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Clientes from "./pages/clientes/Index.svelte";
  import Empleados from "./pages/empleados/Index.svelte";
  import Home from "./pages/home/Index.svelte";
  import Paquetes from "./pages/paquetes/Index.svelte";
  import Inscripcion from "./pages/inscripcion/Index.svelte";
  import Productos from "./pages/productos/Index.svelte";
  import Head from "./components/Head.svelte";
  import Almacen from "./pages/almacen/Index.svelte";
</script>

<Head />
<Router>
  <Route path="/*">
    <Navbar>
      <Router>
        <Route path="/" component={Landing} />
        <Route path="/login" component={Login} />
      </Router>
    </Navbar>
  </Route>
  <Route path="/dashboard/*">
    <Aside>
      <Router>
        <Route path="/clientes" component={Clientes} />
        <Route path="/empleados" component={Empleados} />
        <Route path="/paquetes" component={Paquetes} />
        <Route path="/inscripcion" component={Inscripcion} />
        <Route path="/productos" component={Productos} />
        <Route path="/almacen" component={Almacen} />
        <Route path="/home" component={Home} />
      </Router>
    </Aside>
  </Route>
</Router>
