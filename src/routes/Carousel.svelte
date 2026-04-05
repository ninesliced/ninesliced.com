<script lang="ts">
	import { fade } from 'svelte/transition';

	// Props
	export let slides: Array<{type: "video"|"image", src: string, alt?: string}> = [];

	// State
	let currentIndex: number = 0;

	const next = (): void => {
		currentIndex = (currentIndex + 1) % slides.length;
	};

	const prev = (): void => {
		currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	};

	const goTo = (index: number): void => {
		currentIndex = index;
	};

	/**
	 * Formats various YouTube URL patterns into a standard embed URL.
	 */
	function formatYoutubeUrl(url: string): string {
		if (url.includes('embed')) return url;

		const regExp: RegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
		const match: RegExpMatchArray | null = url.match(regExp);

		const videoId: string | null = match && match[2].length === 11 ? match[2] : null;

		return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
	}
</script>

<div class="carousel-container">
	<div class="viewport">
		{#each slides as slide, i}
			{#if i === currentIndex}
				<!-- <div class="slide" in:fade={{ duration: 200 }}> -->
				<div class="slide">
					{#if slide.type === 'video'}
						<iframe
							src={formatYoutubeUrl(slide.src)}
							title={slide.alt || 'YouTube video'}
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
					{:else}
						<img src={slide.src} alt={slide.alt ?? 'Carousel image'} />
					{/if}
				</div>
			{/if}
		{/each}
	</div>
	{#if slides.length > 1}
		<button class="nav-btn prev" on:click={prev} aria-label="Previous slide">&lt;</button>
		<button class="nav-btn next" on:click={next} aria-label="Next slide">&gt;</button>
	{/if}

	{#if slides.length > 1}
		<div class="indicators">
			{#each slides as _, i}
				<button
					class="dot"
					class:active={i === currentIndex}
					on:click={() => goTo(i)}
					aria-label="Go to slide {i + 1}"
				></button>
			{/each}
		</div>
	{/if}
</div>

<style>
	.carousel-container {
		width: 100%;
		max-width: 500px;
		margin: 0 auto;
		position: relative;
	}

	.viewport {
		position: relative;
		width: 100%;
		aspect-ratio: 16 / 9;
		background: #000;
		overflow: hidden;
		border-radius: 12px;
	}

	.slide {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	iframe {
		width: 100%;
		height: 100%;
	}

	.nav-btn {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background-color: #ffffff;
		color: #222123;
		border: 4px solid #222123;

		padding: 0;

		display: flex;
		align-items: center;
		justify-content: center;

		box-sizing: border-box;

		width: 50px;
		height: 50px;
		cursor: pointer;
		z-index: 10;

		font-size: 1.2rem;
		font-weight: bold;

		transition: background-color 0.2s;
	}

	.nav-btn:hover {
		background-color: #f1f4ce;
	}

	.prev {
		padding-right: 2px;
        left: -20px;
        border-radius: 100%;
	}
	.next {
		padding-left: 2px;
        right: -20px;
        border-radius: 100%;
	}

	.indicators {
		display: flex;
		justify-content: center;
		gap: 10px;
		margin-top: 15px;
	}

	.dot {
		width: 20px;
		height: 20px;
		border-radius: 20px;
		border: none;
		/* background: #428C6F; */
		cursor: pointer;
		padding: 0;
		transition: all 0.3s ease;

		background-color: #ffffff;
		border: 4px solid #222123;
	}

	.dot:hover {
		background: #f1f4ce;
	}

	.dot.active {
		background: #222123;
		width: 40px;
	}
</style>
