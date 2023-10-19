<script>
  import { socials } from '$lib/socials';
</script>

<div class="flex flex-col md:flex-row gap-2">
  {#each socials as item}
  <a target={item.external && '_blank'} href={item.link} class="rounded-xl bg-primary text-on-primary p-4 md:w-[50%]">
    <div class="flex gap-2 items-center">
      <div class="text-on-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d={item.icon}/></svg>
      </div>
      <span>{item.name}</span>
    </div>
  </a>
  {/each}
</div>