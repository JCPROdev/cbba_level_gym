<script>
  import buscar from "../../assets/iconos/buscar.png";
  import eliminar from "../../assets/iconos/elimianar.png";
  import editar from "../../assets/iconos/ediatar.png";
  import store from "../../assets/iconos/store.png";
  let verInput = false;
</script>

<div class="Content">
  <h2>Clientes</h2>
  <div class="buscar" on:click={() => (verInput = true)}>
    <input
      type="text"
      style="width: {verInput ? '100%' : '0'}; transition: width 1s ease;"
    />
    <img src={buscar} alt="buscar" />
  </div>

  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>producto</th>
        <th>precio</th>
        <th>cantidad</th>
        <th>fecha</th>
        <th>total</th>
        <th>opciones</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>suplemento</td>
        <td>100</td>
        <td>20</td>
        <td>10/20/23</td>
        <td>100</td>
        <td>
          <img src={editar} alt="icono-editar" />
          <img src={eliminar} alt="icono-eliminar" />
        </td>
      </tr>
    </tbody>
  </table>
  <div class="acciones">
    <button><img src={store} alt="icon-store" />Agregar</button>
  </div>
</div>

<style>
  .Content {
    width: 90%;
    height: 80%;
    box-shadow: 0 5px 5px #0005;
    padding: 2em;
    position: relative;
    & h2 {
      margin-bottom: 34px;
    }
    & button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1em;
      color: var(--primary);
      border: none;
      cursor: pointer;
      position: relative;
      background-color: transparent;
      overflow: hidden;
      padding: 0.5em 1em;
      &::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        z-index: -1;
        animation: vertical 2s ease;
      }
      &:hover {
        color: #fff;
        &::before {
          animation: vertical 5s infinite;
        }
      }
    }
  }
  .acciones {
    position: absolute;
    bottom: 4em;
    width: 90%;
    display: flex;
    justify-content: right;
  }
  .buscar {
    content: "";
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 2em;
    right: 2em;
    width: 200px;
  }
  input {
    border: none;
    border-bottom: solid 1px var(--primary);
    outline: none;
  }
  table {
    width: 90%;
    text-align: center;
    & thead {
      & th {
        font-weight: 600;
        color: #0005;
        &::first-letter {
          text-transform: uppercase;
        }
      }
    }
    & img {
      margin: 0 0.5em;
    }
  }
</style>
