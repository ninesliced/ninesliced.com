<script lang="ts">
	import OutlinedText from './OutlinedText.svelte';
	import Carousel from './Carousel.svelte';

	export let id;
	export let title = "";
	export let inverted = false;
	export let slides: Array<{type: "video"|"image", src: string, alt?: string}> = [];
	export let links: Array<{url: string, text: string}> = []
	export let backgroundColor = "#EEF49A"
</script>

<div
	{id} class="flex w-full {inverted ? 'flex-row-reverse' : 'flex-row'} m-5 flex-wrap justify-center gap-3 items-center"
>
	<div
		class="flex w-1/2 max-w-120 grow flex-col items-center justify-center rounded-2xl p-6 gap-6"
		style={`background-color: ${backgroundColor}`}
	>
		<div>
			<OutlinedText textSize="2rem" strokeWidth="8px">{title}</OutlinedText>
		</div>

		<div class="flex flex-col gap-3 text-[#222123]">
			<slot></slot>
		</div>

		<p class="flex flex-row gap-4 justify-center flex-wrap">
			{#each links as link}
				<a href={link.url}>
					<OutlinedText textSize="1.2rem" strokeWidth="6px">{link.text}</OutlinedText>
				</a>
			{/each}
		</p>
	</div>

	<div class="w-128">
		<Carousel slides={slides} />
		<!-- <img src={imgSrc} alt={imgAlt} class="rounded-2xl" /> -->
	</div>
</div>
