<script lang="ts">
  import Carousel from '../Carousel.svelte';
  // If you export the interface from Carousel.svelte, you can import it here
  // (See "Pro Tip" below on how to export it)
  
  interface Slide {
    type: 'image' | 'video';
    src: string;
    alt?: string;
  }

  const mySlides: Slide[] = [
    { 
      type: 'image', 
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', 
      alt: 'Landscape' 
    },
    { 
      type: 'video', 
      src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    }
  ];
</script>

<Carousel slides={mySlides} />