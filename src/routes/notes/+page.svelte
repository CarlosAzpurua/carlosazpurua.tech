<script lang="ts">
  import Entry from './components/Entry.svelte';

  export let data: {
    notes: Domain.BlogNote[];
  };

  let title = 'Carlos Azpurua | Notes';
  let description =
    'Notes taken while reading about computer science and software development.';
  let avatarUrl = 'https://avatars.githubusercontent.com/u/42218136?v=4';
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <!-- Schema.org markup for Google+ -->
  <meta itemprop="name" content={title} />
  <meta itemprop="description" content={description} />
  <meta itemprop="image" content={avatarUrl} />
  <!-- Open Graph data -->
  <meta property="og:title" content={title} />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://carlosazpurua.tech/" />
  <meta property="og:image" content={avatarUrl} />
  <meta property="og:description" content={description} />
  <meta property="og:site_name" content="Carlos Azpurua" />
  <!-- Instagram Card data -->
  <meta name="instagram:card" content="summary_large_image" />
  <meta name="instagram:site" content="@charlietechoficial" />
  <meta name="instagram:title" content={title} />
  <meta name="instagram:description" content={description} />
  <meta name="instagram:creator" content="@charlietechoficial" />
  <meta name="instagram:image:src" content={avatarUrl} />
</svelte:head>

<ul class="flex flex-col md:grid md:grid-cols-3 md:gap-6">
  {#each data.notes as note}
    <Entry
      title={note.title}
      description={note.description}
      publishDate={new Date(note.date)}
      tags={note.categories}
      slug={note.slug}
      previewImageUrl={note.preview_image_url}
    />
  {/each}
</ul>
