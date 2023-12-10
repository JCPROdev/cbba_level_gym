<script>
  import { onMount } from "svelte";
  import Loader from "../../components/Loader.svelte";
  import { sendRequest } from "../../utilities/sendRequest";
  import { errorAlert, successAlert } from "../../utilities/alerts";
  import { navigate } from "svelte-routing";

  export let id;

  onMount(async () => {
    const res = await sendRequest(`asistencia/${id}`, null);
    if(res) {
      if(res.status === 1) {
        successAlert(res.message);
        navigate(`/dashboard/profile/${id}`);
      } else if (res.status === 2 || res.status === 3) {
        errorAlert(res.message);
        navigate(`/dashboard/profile/${id}`);
      }
    }
  });
</script>

<Loader 
  text="Marcando asistencia..."
/>