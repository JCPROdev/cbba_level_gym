<script>
  import Input from "../../../components/Input.svelte";
  import Select from "../../../components/Select.svelte";

  let form = {
    nombre: "",
    turno: "Mañana",
    usuario: "",
    password: ""
  }
</script>

<form>
  <Input 
    text="Nombre"
    value={form.nombre}
  />
  <Select 
    text="Turno"
    value={form.turno}
    options={[{
      text: "Mañana",
      value: "Mañana"
    }, {
      text: "Tarde",
      value: "Tarde"
    }]}
  />
  <Input 
    text="Usuario"
    value={form.usuario}
  />
  <Input 
    text="Contraseña"
    value={form.password}
    type="password"
  />
</form>