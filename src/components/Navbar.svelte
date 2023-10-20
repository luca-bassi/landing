<script>
  export let active;
  const paths = [
    { label: '/', url: '/'},
    { label: 'art', url: '/art' },
    { label: 'music', url: '/music'}
  ];
</script>

<div class="py-3 px-4">
  <div class="flex justify-center items-center gap-2">
    {#each paths as path}
    <a href={path.url} class="py-2 px-4 rounded-xl flex items-center justify-center text-on-background" class:active={active==path.url}>{path.label}</a>
    {/each}
  </div>
</div>

<style lang="scss">
  a:hover {
    background-color: rgba(var(--primary), .08)
  }
  .active {
    @apply font-medium text-primary;
    background-color: rgba(var(--primary), .12);
  }
</style>