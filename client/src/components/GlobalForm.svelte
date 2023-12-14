<form action="">
  <slot />
</form>

<style>
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    row-gap: 12px;
  }
</style>