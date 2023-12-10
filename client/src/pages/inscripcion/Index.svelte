<script>
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
  <Modal {open}>
    <button on:click={closeModal} class="modalA">x</button>
    {#key JSON.stringify(open)}
      <Form
        closeModal={() => {
          getData();
          closeModal();
        }}
      />
    {/key}
  </Modal>
  <Modal open={openQR}>
    <button on:click={closeModalQR}>Cerrar</button>
    {#key idSelected}
      <QrModal 
        id={idSelected}
      />
    {/key}
  </Modal>
  <SearchButton bind:value={search} />
  {#if !$data}
    <Loader />
  {:else}
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
          <th>restante</th>
          <th>opciones</th>
        </tr>
      </thead>
      <tbody>
        {#each $data as inscripcion, i}
          <tr>
            <td>{i + 1}</td>
            <td>{inscripcion.cliente.nombre}</td>
            <td>{inscripcion.paquete.nombre}</td>
            <td>{inscripcion.total} Bs</td>
            <td>{inscripcion.tipoPago}</td>
            <td>{formatDate(inscripcion.fechaInicio)}</td>
            <td>{inscripcion.diasRestantes} días</td>
            <td>
              <button 
                on:click={() => navigate(`/dashboard/profile/${inscripcion.id}`)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 14 14" height="14" width="14"><g id="visible--eye-eyeball-open-view"><path id="Vector" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M12.285 5.800135714285714c0.15395714285714288 0.19195428571428572 0.2392 0.4413407142857143 0.2392 0.69992s-0.08524285714285715 0.5079657142857142 -0.2392 0.69992c-0.9750000000000001 1.1804649999999999 -3.1943135714285718 3.4786885714285716 -5.7850278571428575 3.4786885714285716s-4.81 -2.2982235714285717 -5.785001857142857 -3.4786885714285716c-0.1539942857142857 -0.19195428571428572 -0.2392362142857143 -0.4413407142857143 -0.2392362142857143 -0.69992s0.08524192857142858 -0.5079657142857142 0.2392362142857143 -0.69992C1.689972142857143 4.619670714285714 3.9092578571428573 2.3214285714285716 6.4999721428571435 2.3214285714285716S11.31 4.619670714285714 12.285 5.800135714285714Z" stroke-width="1"></path><path id="Vector_2" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M6.5 8.357142857142858c1.025672142857143 0 1.8571428571428572 -0.8314707142857143 1.8571428571428572 -1.8571428571428572s-0.8314707142857143 -1.8571428571428572 -1.8571428571428572 -1.8571428571428572 -1.8571428571428572 0.8314707142857143 -1.8571428571428572 1.8571428571428572 0.8314707142857143 1.8571428571428572 1.8571428571428572 1.8571428571428572Z" stroke-width="1"></path></g></svg>
              </button>
              <button 
                on:click={() => openModalQR(inscripcion.id)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-0.5 -0.5 14 14" height="14" width="14"><g id="qr-code--codes-tags-code-qr"><path id="Vector" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M5.571428571428571 2.7857142857142856H3.7142857142857144c-0.5128314285714286 0 -0.9285714285714286 0.41574 -0.9285714285714286 0.9285714285714286v1.8571428571428572c0 0.5128314285714286 0.41574 0.9285714285714286 0.9285714285714286 0.9285714285714286h1.8571428571428572c0.5128314285714286 0 0.9285714285714286 -0.41574 0.9285714285714286 -0.9285714285714286V3.7142857142857144c0 -0.5128314285714286 -0.41574 -0.9285714285714286 -0.9285714285714286 -0.9285714285714286Z" stroke-width="1"></path><path id="Vector_2" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M2.7857142857142856 0.4642857142857143H1.3928571428571428C1.1465814285714286 0.4642857142857143 0.9103992857142857 0.5621172142857144 0.7362577857142857 0.7362577857142857 0.5621172142857144 0.9103992857142857 0.4642857142857143 1.1465814285714286 0.4642857142857143 1.3928571428571428V2.7857142857142856" stroke-width="1"></path><path id="Vector_3" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M10.214285714285715 0.4642857142857143h1.3928571428571428c0.24625714285714287 0 0.48248571428571424 0.09783150000000002 0.6565928571428571 0.27197207142857144 0.17410714285714285 0.1741415 0.27197857142857146 0.41032364285714285 0.27197857142857146 0.6565993571428572V2.7857142857142856" stroke-width="1"></path><path id="Vector_4" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M2.7857142857142856 12.535714285714286H1.3928571428571428c-0.2462757142857143 0 -0.48245785714285716 -0.09787142857142857 -0.6565993571428572 -0.27197857142857146C0.5621172142857144 12.089628571428573 0.4642857142857143 11.8534 0.4642857142857143 11.607142857142858V10.214285714285715" stroke-width="1"></path><path id="Vector_5" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M10.214285714285715 12.535714285714286h1.3928571428571428c0.24625714285714287 0 0.48248571428571424 -0.09787142857142857 0.6565928571428571 -0.27197857142857146s0.27197857142857146 -0.4103357142857143 0.27197857142857146 -0.6565928571428571V10.214285714285715" stroke-width="1"></path><path id="Vector_6" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M2.7857142857142856 8.821428571428571V10.214285714285715h1.3928571428571428" stroke-width="1"></path><path id="Vector_7" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M6.5 10.214285714285715V8.821428571428571H5.107142857142858" stroke-width="1"></path><path id="Vector_8" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M10.214285714285715 4.178571428571429H8.821428571428571V2.7857142857142856" stroke-width="1"></path><path id="Vector_9" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M10.214285714285715 7.428571428571429V6.035714285714286H8.821428571428571" stroke-width="1"></path><path id="Vector_10" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M8.821428571428571 8.821428571428571V10.214285714285715H10.214285714285715" stroke-width="1"></path></g></svg>
              </button>
              <button 
                on:click={() => sureAlert("Se eliminará la inscripción permanentemente", () => handleDelete(inscripcion.id))}
              >
                <img src={eliminar} alt="icono-eliminar" />
              </button>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
   </div>
  {/if}
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
