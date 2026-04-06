<script>
  export let insideColor = "white";
  export let strokeColor = "#2C2936";
  export let textSize = "2.25rem"; // Equivalent to text-4xl
  export let strokeWidth = "8px";
</script>

<div 
  class="outline-container" 
  style:--inside-color={insideColor}
  style:--outline-color={strokeColor}
  style:--text-size={textSize}
  style:--stroke-width={strokeWidth}
>
  <span class="outline-bg" aria-hidden="true">
    <slot></slot>
  </span>
  
  <span class="outline-fg">
    <slot></slot>
  </span>
</div>

<style>
  .outline-container {
    position: relative;
    display: inline-block;
    font-weight: 700; /* font-bold */
    font-size: var(--text-size);
    line-height: 1.2;
  }

  .outline-bg {
    position: absolute;
    left: 0;
    top: 0;
    color: var(--outline-color);
    -webkit-text-stroke: var(--stroke-width) var(--outline-color);
    user-select: none;
  }

  .outline-fg {
    position: relative;
    color: var(--inside-color);
  }
</style>