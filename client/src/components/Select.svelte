<script>
  export let text;
  export let value;
</script>

<div>
  <label for={`select-${text}`}>{text}</label>
  <select id={`select-${text}`} bind:value>
    <slot  />
  </select>
</div>