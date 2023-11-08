<script>
  export let text;
  export let options;
  export let value;
</script>

<div>
  <label for={`select-${text}`}>{text}</label>
  <select id={`select-${text}`} bind:value>
    {#each options as option}
      <option value={option.value}>{option.text}</option>
    {/each}
  </select>
</div>