<script>
  import Table from "../../components/Table.svelte";
  import store from "../../assets/iconos/store.png";
  import Modal from "../../components/Modal.svelte";
  import Form from "./components/Form.svelte";
  import fondo from "../../assets/logo-fondo.png";
  import Loader from "../../components/Loader.svelte";
  import SearchButton from "../../components/SearchButton.svelte";
  import Head from "../../components/Head.svelte";
  import { formatDate } from "../../utilities/formatDate";
  import eliminar from "../../assets/iconos/elimianar.png";
  import { successAlert, sureAlert } from "../../utilities/alerts";
  import { sendRequest } from "../../utilities/sendRequest";
  import { useGet } from "../../hooks/useGet";
  import QrModal from "./components/QRModal.svelte";
  import { navigate } from "svelte-routing";
  import AgregarButton from "../../components/AgregarButton.svelte";
  import SquareButton from "../../components/SquareButton.svelte";
  import IconEdit from "../../icons/IconEdit.svelte";
  import IconDelete from "../../icons/IconDelete.svelte";
  import IconQr from "../../icons/IconQR.svelte";
  import IconEye from "../../icons/IconEye.svelte";

  let search = "";
  let open = false;
  let openQR = false;
  let idSelected = 0;

  const openModal = () => {
    open = true;
  };
  const closeModal = () => {
    open = false;
  };
  const openModalQR = (id) => {
    idSelected = id;
    openQR = true;
  };
  const closeModalQR = () => {
    openQR = false;
  };
  
  let { data, getData } = useGet("inscripcion");
  const handleDelete = async (id) => {
    const res = await sendRequest(`inscripcion/${id}`, null, "DELETE");
    if (res) {
      successAlert(res.message);
      getData();
    }
  };
</script>

<Head title="Inscripciones" />
<div class="Content">
  <h2>Inscripciones</h2>
  <img src={fondo} alt="" class="backgraund-a" />
  <Modal {open} {closeModal}>
    {#key JSON.stringify(open)}
      <Form
        closeModal={() => {
          getData();
          closeModal();
        }}
      />
    {/key}
  </Modal>
  <Modal open={openQR} closeModal={closeModalQR}>
    {#key idSelected}
      <QrModal 
        id={idSelected}
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
        <th class="big">cliente</th>
        <th class="big">paquete</th>
        <th class="small">total</th>
        <th class="medium">tipo de pago</th>
        <th class="medium">fecha</th>
        <th class="small">restante</th>
        <th class="medium center">opciones</th>
      </tr>
    </thead>
    <tbody>
      {#each $data as inscripcion, i}
        <tr>
          <td class="center"><p>{i + 1}</p></td>
          <td><p>{inscripcion.cliente.nombre}</p></td>
          <td><p>{inscripcion.paquete.nombre}</p></td>
          <td><p>Bs. {inscripcion.total}</p></td>
          <td><p>{inscripcion.tipoPago}</p></td>
          <td><p>{formatDate(inscripcion.fechaInicio)}</p></td>
          <td><p>{inscripcion.diasRestantes} días</p></td>
          <td class="center">
            <div class="buttons">
              <SquareButton
                on:click={() => navigate(`/dashboard/profile/${inscripcion.id}`)}
              ><IconEye /></SquareButton>
              <SquareButton
                color="blue"
                on:click={() => openModalQR(inscripcion.id)}
              ><IconQr /></SquareButton>
              <SquareButton
                color="orange"
                on:click={() => sureAlert("Se eliminará la inscripción permanentemente", () => handleDelete(inscripcion.id))}
              ><IconDelete /></SquareButton>
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
