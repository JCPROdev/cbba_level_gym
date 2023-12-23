<script>
  import eliminar from "../../assets/iconos/elimianar.png";
  import editar from "../../assets/iconos/ediatar.png";
  import Modal from "../../components/Modal.svelte";
  import Form from "./components/Form.svelte";
  import { sendRequest } from "../../utilities/sendRequest";
  import fondo from "../../assets/logo-fondo.png";
  import Loader from "../../components/Loader.svelte";
  import SearchButton from "../../components/SearchButton.svelte";
  import { errorAlert, successAlert, sureAlert } from "../../utilities/alerts";
  import Head from "../../components/Head.svelte";
  import { useGet } from "../../hooks/useGet";
  import Table from "../../components/Table.svelte";
  import AgregarButton from "../../components/AgregarButton.svelte";
  import SquareButton from "../../components/SquareButton.svelte";
  import IconEdit from "../../icons/IconEdit.svelte";
  import IconDelete from "../../icons/IconDelete.svelte";
  import IconExcel from "../../icons/IconExcel.svelte";
  import { http } from "../../utilities/http";
  import FileSaver from "file-saver";
  import { onMount } from "svelte";
  import { filterBy } from "../../utilities/filterBy";

  let search = "";
  let open = false;
  let empleado = null;
  let fechaActual = "";
  onMount(() => {
    const today = new Date();
    const format = today.toISOString().split("T")[0];
    fechaActual = format;
  });
  const openModal = (item) => {
    if (item) {
      empleado = item;
    } else {
      empleado = null;
    }
    open = true;
  };

  const closeModal = () => {
    open = false;
  };

  let { data, getData } = useGet("empleado");

  const handleDelete = async (id) => {
    const res = await sendRequest(`empleado/${id}`, null, "DELETE");
    if (res) {
      successAlert(res.message);
      getData();
    }
  };
  const handleAdminExcel = async () => {
    try {
      const access_token = localStorage.getItem("access_token");
      const response = await fetch(http + `exceladministrador`, {
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
          Authorization: access_token ? `Bearer ${access_token}` : "",
        },
      });
      const blob = await response.blob();
      FileSaver.saveAs(blob, `admin_reporte`);
    } catch (error) {
      errorAlert("Error al descargar el archivo");
    }
  };

  const handleExcel = async (empleado) => {
    try {
      const access_token = localStorage.getItem("access_token");
      const response = await fetch(http + `excelempleado/${empleado.id}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
          Authorization: access_token ? `Bearer ${access_token}` : "",
        },
        body: JSON.stringify({
          fecha: fechaActual,
        }),
      });
      const blob = await response.blob();
      FileSaver.saveAs(blob, `${empleado.nombre}`);
    } catch (error) {
      errorAlert("Error al descargar el archivo");
    }
  };

  $: datos = $data;
  const handleFilter = () => {
    datos = $data?.filter((data) => filterBy(data.nombre, search));
  };
  $: search, handleFilter();
</script>

<Head title="Empleados" />
<div class="Content">
  <h2>Empleados</h2>
  <img src={fondo} alt="" class="backgraund-a" />
  <Modal {open} {closeModal}>
    {#key JSON.stringify(empleado)}
      <Form
        {empleado}
        closeModal={() => {
          getData();
          closeModal();
        }}
      />
    {/key}
  </Modal>
  <SearchButton bind:value={search}>
    <SquareButton on:click={() => handleAdminExcel()} color="green"
      ><IconExcel /></SquareButton
    >
  </SearchButton>
  {#if !$data}
    <Loader table />
  {:else}
    <Table>
      <thead>
        <tr>
          <th class="center">#</th>
          <th class="big">nombre</th>
          <th class="medium">turno</th>
          <th class="medium">usuario</th>
          <th class="medium center">opciones</th>
        </tr>
      </thead>
      <tbody>
        {#each datos as empleado, i}
          <tr>
            <td class="center"><p>{i + 1}</p></td>
            <td><p>{empleado.nombre}</p></td>
            <td><p>{empleado.turno}</p></td>
            <td><p>{empleado.usuario}</p></td>
            <td class="center">
              <div class="buttons">
                <SquareButton on:click={() => openModal(empleado)}
                  ><IconEdit /></SquareButton
                >
                <SquareButton
                  color="orange"
                  disabled={empleado.usuario === "admin"}
                  on:click={() =>
                    sureAlert(
                      "Se eliminará el empleado y sus datos permanentemente",
                      () => handleDelete(empleado.id)
                    )}><IconDelete /></SquareButton
                >
                <SquareButton
                  color="green"
                  on:click={() => handleExcel(empleado)}
                  ><IconExcel /></SquareButton
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
