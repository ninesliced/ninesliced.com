<script lang="ts">
  import OutlinedText from './OutlinedText.svelte';

  export let socials: Array<{icon: string, url: string, text: string}> = [];
</script>

<div class="flex flex-row gap-3 items-center justify-center flex-wrap max-w-200">
  {#each socials as social}
    <div class="bg-[#EEF49A] p-2 px-5 rounded-full">
      <a href={social.url} class="flex flex-row gap-2 items-center">
        <img
          src={social.icon}
          alt={social.text}
          class="h-10"
        />
        <OutlinedText textSize="1.5rem" strokeWidth="6px">{social.text}</OutlinedText>
      </a>
    </div>
  {/each}
</div>
