<script>
  import eliminar from "../../assets/iconos/elimianar.png";
  import editar from "../../assets/iconos/ediatar.png";
  import store from "../../assets/iconos/store.png";
  import Modal from "../../components/Modal.svelte";
  import Form from "./components/Form.svelte";
  import { sendRequest } from "../../utilities/sendRequest";
  import fondo from "../../assets/logo-fondo.png";
  import Loader from "../../components/Loader.svelte";
  import SearchButton from "../../components/SearchButton.svelte";
  import { successAlert, sureAlert } from "../../utilities/alerts";
  import Head from "../../components/Head.svelte";
  import { useGet } from "../../hooks/useGet";
  import Table from "../../components/Table.svelte";
  import AgregarButton from "../../components/AgregarButton.svelte";
  let search = "";
  let open = false;
  let cliente = null;

  const openModal = (item) => {
    if (item) {
      cliente = item;
    } else {
      cliente = null;
    }
    open = true;
  };

  const closeModal = () => {
    open = false;
  };

  let { data, getData } = useGet("cliente");

  const handleDelete = async (id) => {
    const res = await sendRequest(`cliente/${id}`, null, "DELETE");
    if (res) {
      successAlert(res.message);
      getData();
    }
  };
</script>

<Head title="Clientes" />
<div class="Content">
  <h2>Clientes</h2>
  <img src={fondo} alt="" class="backgraund-a" />
  <Modal {open}>
    <button on:click={closeModal} class="modalA">x</button>
    {#key JSON.stringify(cliente)}
      <Form
        {cliente}
        closeModal={async () => {
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
          <th class="big">nombre</th>
          <th class="medium center">opciones</th>
        </tr>
      </thead>
      <tbody>
        {#each $data as cliente, i}
          <tr>
            <td class="center"><p>{i + 1}</p></td>
            <td><p>{cliente.nombre}</p></td>
            <td class="center">
              <button on:click={() => openModal(cliente)}
                ><img src={editar} alt="icono-editar" /></button
              >
              <button
                on:click={() =>
                  sureAlert(
                    "Se eliminará el cliente y sus datos permanentemente.",
                    () => handleDelete(cliente.id)
                  )}><img src={eliminar} alt="icono-eliminar" /></button
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
  }
</style>
