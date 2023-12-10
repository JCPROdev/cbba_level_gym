<script>
  import Table from "../../components/Table.svelte";
  import eliminar from "../../assets/iconos/elimianar.png";
  import store from "../../assets/iconos/store.png";
  import Modal from "../../components/Modal.svelte";
  import Form from "./components/Form.svelte";
  import { sendRequest } from "../../utilities/sendRequest";
  import fondo from "../../assets/logo-fondo.png";
  import Loader from "../../components/Loader.svelte";
  import SearchButton from "../../components/SearchButton.svelte";
  import { successAlert, sureAlert } from "../../utilities/alerts";
  import Head from "../../components/Head.svelte";
  import { formatDate } from "../../utilities/formatDate";
  import { useGet } from "../../hooks/useGet";
  import AgregarButton from "../../components/AgregarButton.svelte";
  let search = "";
  let open = false;
  let almacen = null;

  const openModal = (item) => {
    if (item) {
      almacen = item;
    } else {
      almacen = null;
    }
    open = true;
  };

  const closeModal = () => {
    open = false;
  };

  let { data, getData } = useGet("almacen");
  const handleDelete = async (id) => {
    const res = await sendRequest(`almacen/${id}`, null, "DELETE");
    if (res) {
      successAlert(res.message);
      getData();
    }
  };
</script>

<Head title="Almacen" />
<div class="Content">
  <h2>Almacen</h2>
  <img src={fondo} alt="" class="backgraund-a" />
  <Modal {open}>
    <button on:click={closeModal} class="modalA">x</button>
    {#key JSON.stringify(almacen)}
      <Form
        {almacen}
        closeModal={() => {
          getData();
          closeModal();
        }}
      />
    {/key}
  </Modal>
  <SearchButton bind:value={search} />
  {#if !$data}
    <Loader table />
  {:else}
  <Table>
    <thead>
      <tr>
        <th class="center">#</th>
        <th class="big">producto</th>
        <th class="big center">cantidad comprada</th>
        <th class="medium center">precio de compra</th>
        <th class="medium">fecha</th>
        <th class="medium center">opciones</th>
      </tr>
    </thead>
    <tbody>
      {#each $data as almacen, i}
        <tr>
          <td class="center"><p>{i + 1}</p></td>
          <td><p>{almacen.producto.nombre}</p></td>
          <td class="center"><p>{almacen.cantidadAumentada}</p></td>
          <td class="center"><p>Bs. {almacen.totalCompra}</p></td>
          <td><p>{formatDate(almacen.fecha)}</p></td>
          <td class="center">
            <button on:click={() => sureAlert("Se eliminará el almacen y sus datos permanentemente.", () => handleDelete(almacen.id))}
              ><img src={eliminar} alt="icono-eliminar" /></button
            >
          </td>
        </tr>
      {/each}
    </tbody>
  </Table>
  {/if}
  <AgregarButton on:click={() => openModal()} />
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
    & img {
      margin: 0 0.5em;
    }
  }
}
</style>
