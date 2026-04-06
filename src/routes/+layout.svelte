<script lang="ts">
  import './layout.css';
  import favicon from '$lib/assets/favicon.svg';
  
  import OutlinedText from './OutlinedText.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <title>Ninesliced</title>
  <link rel="icon" href={favicon} />
</svelte:head>

<nav class="fixed top-0 z-300 flex w-full flex-row items-center justify-end gap-3 bg-[#A7E257] p-4 px-8">
  <a href="https://x.com/ninesliced" class="flex flex-row gap-2 items-center">
    <img
      src="src/lib/assets/page/logos/twitter.svg"
      alt="Twitter"
      class="h-10"
    />
  </a>
  <a href="https://bsky.app/profile/ninesliced.com" class="flex flex-row gap-2 items-center">
    <img
      src="src/lib/assets/page/logos/bluesky.svg"
      alt="Bluesky"
      class="h-10"
    />
  </a>
  <a href="https://instagram.com/ninesliced_games" class="flex flex-row gap-2 items-center">
    <img
      src="src/lib/assets/page/logos/instagram.svg"
      alt="Instagram"
      class="h-10"
    />
  </a>
  <a href="https://youtube.com/@ninesliced_games" class="flex flex-row gap-2 items-center">
    <img
      src="src/lib/assets/page/logos/youtube.svg"
      alt="Youtube"
      class="h-10"
    />
  </a>

  <a href="#games" class="hidden sm:inline-block top-0 left-0 text-2xl font-bold px-2">
    <OutlinedText textSize="1.5rem" strokeWidth="6px">Games</OutlinedText>
  </a>

  <a href="#modding" class="hidden sm:inline-block top-0 left-0 text-2xl font-bold px-2">
    <OutlinedText textSize="1.5rem" strokeWidth="6px">Modding</OutlinedText>
  </a>

  <a href="#about" class="hidden sm:inline-block top-0 left-0 text-2xl font-bold px-2">
    <OutlinedText textSize="1.5rem" strokeWidth="6px">About</OutlinedText>
  </a>
</nav>

{@render children()}