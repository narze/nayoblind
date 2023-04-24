<script lang="ts">
	import { Facebook, Twitter, Line } from 'svelte-share-buttons-component';

	export let url = 'https://nayoblind.narze.live/';
	export let text: string;
</script>

{#if url}
	<div class="flex gap-2">
		<span class="flex items-center">แชร์:</span>
		<Facebook class="h-10 w-10 rounded-full" {url} quote={text} />
		<Twitter class="h-10 w-10 rounded-full" {url} {text} hashtags="nayoblind" />
		<Line class="h-10 w-10 rounded-full" {url} {text} />
	</div>
{/if}
