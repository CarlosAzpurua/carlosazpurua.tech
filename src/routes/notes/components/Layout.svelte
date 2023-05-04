<script lang="ts" context="module">
  import a from './custom/a.svelte';
  import blockquote from './custom/blockquote.svelte';
  import h2 from './custom/h2.svelte';
  import h3 from './custom/h3.svelte';
  import img from './custom/img.svelte';

  export { a, blockquote, h2, h3, img };
</script>

<script lang="ts">
  import { humanDate } from '$lib/utils/date';

  import '../styles/note.css';
  import '../styles/prism-one-dark.css';

  export let title;
  export let description;
  export let date;
  export let preview_image_url;

  const publishedTime = new Date(date);
  const formattedDate = humanDate(publishedTime);
</script>

<svelte:head>
  <title>{title} | Carlos Azpurua</title>
  <meta name="description" content={description} />
  <!-- Schema.org markup for Google+ -->
  <meta itemprop="name" content={title} />
  <meta itemprop="description" content={description} />
  <meta itemprop="image" content={preview_image_url} />
  <!-- Open Graph data -->
  <meta property="og:title" content={title} />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://carlosazpurua.tech/" />
  <meta property="og:image" content={preview_image_url} />
  <meta property="og:description" content={description} />
  <meta property="og:site_name" content="Carlos Azpurua" />
  <meta property="article:published_time" content={publishedTime.toJSON()} />
  <meta property="article:modified_time" content={publishedTime.toJSON()} />
  <!-- Instagram Card data -->
  <meta name="instagram:card" content="summary_large_image" />
  <meta name="instagram:site" content="@charlietechoficial" />
  <meta name="instagram:title" content={title} />
  <meta name="instagram:description" content={description} />
  <meta name="instagram:creator" content="@charlietechoficial" />
  <meta name="instagram:image:src" content={preview_image_url} />
</svelte:head>

<div class="safe-zone note-container">
  <figure
    class="flex justify-center items-center overflow-hidden rounded max-h-[300px]"
  >
    <img class="w-full" src={preview_image_url} alt={title} />
  </figure>
  <header class="py-4">
    <h1 class="text-3xl py-4">{title}</h1>
    <div class="flex mb-2">
      <span class="flex items-center mr-2">
        <time class="text-sm mr-2" datetime={date.toString()}
          >{formattedDate}</time
        >
      </span>
    </div>
  </header>
  <slot />
</div>

<style>
  @media only screen and (max-width: 920px) {
    .note-container {
      padding: 0 1rem;
    }
  }
</style>
