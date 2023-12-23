<script>
  import FormButton from "../../../components/FormButton.svelte";
  import GlobalForm from "../../../components/GlobalForm.svelte";
  import Input from "../../../components/Input.svelte";
  import { errorAlert, successAlert } from "../../../utilities/alerts";
  import { sendCloudinary } from "../../../utilities/sendImage";
  import { sendRequest } from "../../../utilities/sendRequest";
  export let closeModal;
  export let promocion;

  let preview = promocion?.foto;
  let form = {
    foto: null,
    titulo: promocion?.titulo || "",
    descripcion: promocion?.descripcion || "",
  };

  const handleChangeFoto = (e) => {
    if (e.target.files.length === 0) return;
    form.foto = e.target.files[0];
  };

  const handleSend = async (e) => {
    e.preventDefault();
    let foto = undefined;
    if (form.foto) {
      foto = await sendCloudinary(form.foto);
      console.log(foto);
    }
    const res = await sendRequest(
      promocion ? `promocion/${promocion.id}` : "promocion",
      {
        ...form,
        foto,
      },
      promocion ? "PUT" : "POST"
    );
    if (res) {
      successAlert(res.message);
      closeModal();
    }
  };

  const changePreview = () => {
    if (form.foto) {
      const fr = new FileReader();
      fr.readAsDataURL(form.foto);
      fr.addEventListener("load", () => {
        preview = fr.result;
      });
    }
  };

  $: form.foto, changePreview();
</script>

<GlobalForm>
  <div>
    <small>Foto:</small>
    <input type="file" on:change={handleChangeFoto} />
  </div>
  <img alt="preview" src={preview} />
  <Input text="Título" bind:value={form.titulo} />
  <Input text="Descripción" bind:value={form.descripcion} />
  <FormButton on:click={handleSend}>Enviar</FormButton>
</GlobalForm>

<style>
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  small {
    font-size: 14px;
    margin-left: 8px;
  }
</style>
