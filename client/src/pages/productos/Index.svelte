<script>
  import Table from "../../components/Table.svelte";
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
  import AgregarButton from "../../components/AgregarButton.svelte";
  import SquareButton from "../../components/SquareButton.svelte";
  import IconEdit from "../../icons/IconEdit.svelte";
  import IconDelete from "../../icons/IconDelete.svelte";
  let search = "";
  let open = false;
  let producto = null;

  const openModal = (item) => {
    if (item) {
      producto = item;
    } else {
      producto = null;
    }
    open = true;
  };

  const closeModal = () => {
    open = false;
  };

  let { data, getData } = useGet("producto");

  const handleDelete = async (id) => {
    const res = await sendRequest(`producto/${id}`, null, "DELETE");
    if (res) {
      successAlert(res.message);
      getData();
    }
  };
</script>

<Head title="Productos" />
<div class="Content">
  <h2>Productos</h2>
  <img src={fondo} alt="" class="backgraund-a" />
  <Modal {open} {closeModal}>
    {#key JSON.stringify(producto)}
      <Form
        {producto}
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
          <th class="big">nombre</th>
          <th class="medium center">precio</th>
          <th class="medium center">cantidad</th>
          <th class="medium center">opciones</th>
        </tr>
      </thead>
      <tbody>
        {#each $data as producto, i}
          <tr>
            <td class="center">{i + 1}</td>
            <td>{producto.nombre}</td>
            <td class="center">Bs. {producto.precio}</td>
            <td class="center">{producto.cantidad}</td>
            <td class="center">
              <div class="buttons">
                <SquareButton on:click={() => openModal(producto)}
                  ><IconEdit /></SquareButton
                >
                <SquareButton
                  color="orange"
                  on:click={() =>
                    sureAlert(
                      "Se eliminará el producto y sus datos permanentemente.",
                      () => handleDelete(producto.id)
                    )}><IconDelete /></SquareButton
                >
              </div>
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
    display: flex;
    flex-direction: column;
    isolation: isolate;
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
