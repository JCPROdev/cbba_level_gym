<script>
  import { Link } from "svelte-routing";
import { contador } from "../../store/contador";

  const aumentar = () => {
    $contador++;
  }
</script>

<div>
  <p>Hola mundo {$contador}</p>
  <button on:click={aumentar}>Aumentar</button>
  <Link to="/login">Login</Link>
</div>

<style>
</style>