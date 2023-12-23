<script>
  import Modal from "../../components/Modal.svelte";
  import Form from "./components/Form.svelte";
  import fondo from "../../assets/logo-fondo.png";
  import Loader from "../../components/Loader.svelte";
  import Head from "../../components/Head.svelte";
  import { useGet } from "../../hooks/useGet";
  import Table from "../../components/Table.svelte";
  import IconEdit from "../../icons/IconEdit.svelte";
  import SquareButton from "../../components/SquareButton.svelte";

  let open = false;
  let promocion = null;

  const openModal = (item) => {
    if (item) {
      promocion = item;
    } else {
      promocion = null;
    }
    open = true;
  };

  const closeModal = () => {
    open = false;
  };

  let { data, getData } = useGet("promocion");
</script>

<Head title="Clientes" />
<div class="Content">
  <h2>Promoción</h2>
  <img src={fondo} alt="" class="backgraund-a" />
  <Modal {open} {closeModal}>
    {#key JSON.stringify(promocion)}
      <Form
        {promocion}
        closeModal={async () => {
          getData();
          closeModal();
        }}
      />
    {/key}
  </Modal>
  {#if !$data}
    <Loader table />
  {:else}
    <Table>
      <thead>
        <tr>
          <th class="center">#</th>
          <th class="medium">foto</th>
          <th class="big">título</th>
          <th class="big">descripción</th>
          <th class="medium center">opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="center"><p>1</p></td>
          <td
            ><img
              alt="promocion"
              src={$data.foto}
            /></td
          >
          <td><p>{$data.titulo}</p></td>
          <td><p>{$data.descripcion}</p></td>
          <td class="center">
            <div class="buttons">
              <SquareButton on:click={() => openModal($data)}
                ><IconEdit /></SquareButton
              >
            </div>
          </td>
        </tr>
      </tbody>
    </Table>
  {/if}
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
    isolation: isolate;
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
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
</style>
