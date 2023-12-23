<script>
  import { Route, Router } from "svelte-routing";
  import Landing from "./pages/landing/Index.svelte";
  import Login from "./pages/login/Index.svelte";
  import Aside from "./components/Aside.svelte";
  import Clientes from "./pages/clientes/Index.svelte";
  import Empleados from "./pages/empleados/Index.svelte";
  import Profile from "./pages/profile/Index.svelte";
  import Paquetes from "./pages/paquetes/Index.svelte";
  import Inscripcion from "./pages/inscripcion/Index.svelte";
  import Venta from "./pages/venta/index.svelte";
  import Productos from "./pages/productos/Index.svelte";
  import Head from "./components/Head.svelte";
  import Almacen from "./pages/almacen/Index.svelte";
  import Header from "./components/Header.svelte";
  import ProtectedRoute from "./components/ProtectedRoute.svelte";
  import Asistencia from "./pages/asistencia/Index.svelte";
  import Promocion from "./pages/promocion/Index.svelte";
</script>

<Head />
<Router>
  <Route path="/*">
    <Header>
      <Router>
        <Route path="/" component={Landing} />
        <Route path="/login" component={Login} />
      </Router>
    </Header>
  </Route>
  <Route path="/dashboard/*">
    <ProtectedRoute>
      <Aside>
        <Router>
          <Route path="/clientes" component={Clientes} />
          <Route path="/empleados" component={Empleados} />
          <Route path="/paquetes" component={Paquetes} />
          <Route path="/inscripcion" component={Inscripcion} />
          <Route path="/venta" component={Venta} />
          <Route path="/asistencia/:id" component={Asistencia} />
          <Route path="/productos" component={Productos} />
          <Route path="/almacen" component={Almacen} />
          <Route path="/profile/:id" component={Profile} />
          <Route path="/promocion" component={Promocion} />
        </Router>
      </Aside>
    </ProtectedRoute>
  </Route>
</Router>
