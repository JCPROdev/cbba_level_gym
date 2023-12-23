<script>
  import Table from "../../components/Table.svelte";
  import Modal from "../../components/Modal.svelte";
  import Form from "./components/Form.svelte";
  import fondo from "../../assets/logo-fondo.png";
  import Loader from "../../components/Loader.svelte";
  import SearchButton from "../../components/SearchButton.svelte";
  import Head from "../../components/Head.svelte";
  import { formatDate } from "../../utilities/formatDate";
  import { useGet } from "../../hooks/useGet";
  import AgregarButton from "../../components/AgregarButton.svelte";
  import SquareButton from "../../components/SquareButton.svelte";
  import ModalVenta from "../../components/ModalVenta.svelte";
  import IconEye from "../../icons/IconEye.svelte";
  import FormVer from "./components/FormVer.svelte";
  import { filterBy } from "../../utilities/filterBy";

  let search = "";
  let open = false;
  let openVenta = false;
  let idVenta = 0;
  const openModal = () => {
    open = true;
  };
  const closeModal = () => {
    open = false;
  };
  const openModalVente = (id) => {
    idVenta = id;
    openVenta = true;
  };
  const closeModalVenta = () => {
    openVenta = false;
  };

  let { data, getData } = useGet("venta");

  $: datos = $data;
  const handleFilter = () => {
    datos = $data?.filter((data) =>
      filterBy(data.empleado.nombre + " " + formatDate(data.fecha), search)
    );
  };
  $: search, handleFilter();
</script>

<Head title="Venta" />
<div class="Content">
  <h2>Venta</h2>
  <img src={fondo} alt="" class="backgraund-a" />
  <ModalVenta {open} {closeModal}>
    {#key JSON.stringify(open)}
      <Form
        closeModal={() => {
          getData();
          closeModal();
        }}
      />
    {/key}
  </ModalVenta>
  <Modal open={openVenta} closeModal={closeModalVenta}>
    {#key idVenta}
      <FormVer
        {idVenta}
        closeModal={() => {
          closeModalVenta();
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
          <th class="big">empleado</th>
          <th class="big">fecha</th>
          <th class="small">total</th>
          <th class="medium center">opciones</th>
        </tr>
      </thead>
      <tbody>
        {#each datos as venta, i}
          <tr>
            <td class="center">{i + 1}</td>
            <td class="big">{venta.empleado.nombre}</td>
            <td class="big">{formatDate(venta.fecha)}</td>
            <td class="small">Bs. {venta.total}</td>
            <td class="center">
              <div class="buttons">
                <SquareButton
                  color="blue"
                  on:click={() => openModalVente(venta.id)}
                  ><IconEye /></SquareButton
                >
              </div>
            </td>
          </tr>
        {/each}</tbody
      >
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
</style>
