<script lang="ts">
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';
  
  import OutlinedText from './OutlinedText.svelte';

  let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>


<nav class="fixed top-0 z-300 flex w-full flex-row justify-end gap-6 bg-[#A7E257] p-4 px-8">
  <a href="#games" class="top-0 left-0 inline-block text-2xl font-bold">
    <OutlinedText textSize="1.5rem" strokeWidth="6px">Games</OutlinedText>
  </a>

  <a href="#modding" class="top-0 left-0 inline-block text-2xl font-bold">
    <OutlinedText textSize="1.5rem" strokeWidth="6px">Modding</OutlinedText>
  </a>

  <a href="#about" class="top-0 left-0 inline-block text-2xl font-bold">
    <OutlinedText textSize="1.5rem" strokeWidth="6px">About</OutlinedText>
  </a>
</nav>

{@render children()}
