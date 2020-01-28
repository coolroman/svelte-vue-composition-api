<div class="list" class:empty="{$recipes.length === 0}">
  {#if $recipes.length}
    {#each $recipes as recipe}
      <div class="card" on:click="{e => recipes.selectRecipe(recipe.id)}">
        <h2 class="card-title">{recipe.title}</h2>
      </div>
    {/each}
  {:else}
    <p class="center">Нет рецептов. Добавьте первый</p>
  {/if}
</div>

<script>
  import { recipes } from './../composition/recipes.js';
</script>

<style>
  .card {
    border-bottom: 1px solid #eee;
    padding: 1rem;
    transition: 300ms all ease;
    cursor: pointer;
    background: #fff;
  }

  .empty {
    padding: 1rem;
    background: #fff!important;
  }

  .card-title {
    padding: 1rem;
    text-align: center;
  }

  .card:hover {
    background: #eee;
  }

  .list {
    background: #fffeee;
  }
</style>
