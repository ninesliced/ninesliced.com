<script lang="ts">
	interface Props {
		type: 'up' | 'down' | 'up_orange';
		bgColor: string;
		position?: string;
	}

	let { type, bgColor, position = 'top-0' }: Props = $props();
</script>

<!--   -->
<div
    class="{position} {position ? ' ' : ''} w-full left-0 relative h-16 bg-repeat-x bg-left bg-[length:auto_100%] select-none"
    style={`background-color: ${bgColor}; background-image: url(src/lib/assets/page/section_separator_${type}.svg)`}
></div>
