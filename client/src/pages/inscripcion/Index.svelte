<script>
  import store from "../../assets/iconos/store.png";
  import Modal from "../../components/Modal.svelte";
  import Form from "./components/Form.svelte";
  import { getRequest } from "../../utilities/getRequest";
  import fondo from "../../assets/logo-fondo.png";
  import Loader from "../../components/Loader.svelte";
  import SearchButton from "../../components/SearchButton.svelte";
  let search = "";
  let open = false;

  const openModal = () => {
    open = true;
  };
  const closeModal = () => {
    open = false;
  };

  let data = getRequest("inscripcion");
</script>

<div class="Content">
  <h2>Inscripciones</h2>
  <img src={fondo} alt="" class="backgraund-a" />
  <Modal {open}>
    <button on:click={closeModal}>Cerrar</button>
    {#key JSON.stringify(open)}
      <Form
        closeModal={() => {
          data = getRequest("paquete");
          closeModal();
        }}
      />
    {/key}
  </Modal>
  <SearchButton bind:value={search} />
  {#await data}
    <Loader />
  {:then res}
   <div class="container">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>cliente</th>
          <th>paquete</th>
          <th>total</th>
          <th>tipo de pago</th>
          <th>fecha</th>
          <th>opciones</th>
        </tr>
      </thead>
      <tbody>
        {#each res.data as paquete, i}
          <tr>
            <td>{i + 1}</td>
            <td>{paquete.nombre}</td>
            <td>{paquete.precio}</td>
            <td>
              <button>
                Ver
              </button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
   </div>
  {/await}
  <button on:click={() => openModal()} class="agregar-btn"
    ><img src={store} alt="icon-store" />Agregar</button
  >
</div>

<style lang="scss">
  .Content {
    width: 90%;
    height: 80vh;
    box-shadow: var(--shadow1);
    background-color: var(--white);
    border-radius: 16px;
    padding: 2em;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    .backgraund-a {
      width: 100%;
      height: 80%;
      position: absolute;
      object-fit: cover;
      z-index: -1;
    }
    & h2 {
      margin-bottom: 34px;
    }
    & .agregar-btn {
      color: var(--primary);
      border: none;
      cursor: pointer;
      position: relative;
      background-color: transparent;
      overflow: hidden;
      padding: 0.5em 1em;
      align-self: flex-end;
      justify-self: flex-end;
      display: flex;
      align-items: center;

      gap: 1em;
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
   .container {
    width: 100%;
    height: 60vh;
    overflow: auto;
    table {
    width: 100%;
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
      & button{
        border:none;
        background-color: transparent;
      }
    }
  }
}
</style>
