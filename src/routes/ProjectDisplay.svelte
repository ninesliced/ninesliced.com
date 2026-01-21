<script>
	import OutlinedText from './OutlinedText.svelte';

  export let imgSrc = "";
  export let imgAlt = "";
  export let reverse = false;
</script>

<div class="flex w-full {reverse ? 'flex-row-reverse' : 'flex-row'} justify-center flex-wrap gap-3 m-5">
	<div
		class="flex w-1/2 max-w-120 flex-col grow items-center justify-center rounded-2xl bg-[#FDF5BC] p-6"
	>
		<slot></slot>
	</div>

	<div class="w-128">
		<img src={imgSrc} alt={imgAlt} class="rounded-2xl" />
	</div>
</div>
