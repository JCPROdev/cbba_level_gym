<script>
  import buscar from "../../assets/iconos/buscar.png";
  import eliminar from "../../assets/iconos/elimianar.png";
  import editar from "../../assets/iconos/ediatar.png";
  import store from "../../assets/iconos/store.png";
  import Modal from "../../components/Modal.svelte";
  import Form from "./components/Form.svelte";
  import { getRequest } from "../../utilities/getRequest";
  import { sendRequest } from "../../utilities/sendRequest";

  let verInput = false;
  let open = false;
  let empleado = null;

  const openModal = (item) => {
    if(item) {
      empleado = item;
    } else {
      empleado = null;
    }
    open = true;
  }

  const closeModal = () => {
    open = false;
  }
  let data = getRequest('empleado');

  const handleDelete = async (id) => {
    const res = await sendRequest(`empleado/${id}`, null, "DELETE");
    if(res) {
      alert(res.message);
      data = getRequest('empleado');
    }
  }
</script>

<div class="Content">
  <h2>Empleados</h2>
  <Modal 
    open={open}
  >
    <button
      on:click={closeModal}
    >Cerrar</button>
    {#key JSON.stringify(empleado)}
    <Form 
      empleado={empleado}
      closeModal={() => {
        data = getRequest('empleado');
        closeModal();
      }}
    />
    {/key}
  </Modal>
  <button class="buscar" on:click={() => (verInput = true)}>
    <input
      type="text"
      style="width: {verInput ? '100%' : '0'}; transition: width 1s ease;"
    />
    <img src={buscar} alt="buscar" />
  </button>
  {#await data}
    <p>Cargando...</p>
  {:then res} 
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>nombre</th>
          <th>turno</th>
          <th>usuario</th>
          <th>opciones</th>
        </tr>
      </thead>
      <tbody>
        {#each res.data as empleado, i}
        <tr>
          <td>{i + 1}</td>
          <td>{empleado.nombre}</td>
          <td>{empleado.turno}</td>
          <td>{empleado.usuario}</td>
          <td>
            <button on:click={() => openModal(empleado)}><img src={editar} alt="icono-editar" /></button>
            <button on:click={() => handleDelete(empleado.id)}><img src={eliminar} alt="icono-eliminar" /></button>
          </td>
        </tr>
        {/each}
      </tbody>
    </table>
  {/await}
  <div class="acciones">
    <button 
      on:click={() => openModal()}
      class="agregar-btn"
    ><img src={store} alt="icon-store" />Agregar</button>
  </div>
</div>

<style lang="scss">
  .Content {
    width: 90%;
    height: 80%;
    box-shadow: var(--shadow1); 
    background-color: var(--white);
    border-radius: 16px;
    padding: 2em;
    position: relative;
    & h2 {
      margin-bottom: 34px;
    }
    & .agregar-btn {
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
    border: none;
    background-color: transparent;
  }
  input {
    border: none;
    border-bottom: solid 1px var(--primary);
    outline: none;
  }
  table {
    width: 90%;
    text-align: center;
    border-collapse: collapse;
    & th {
      font-weight: 500;
      padding: 8px 0;
      border-bottom: 1px solid var(--grayopacity);
      color: var(--gray);
      &::first-letter {
        text-transform: uppercase;
      }
    }
    & td {
      padding: 12px 0;
    }
    & img {
      margin: 0 0.5em;
    }
  }
</style>
