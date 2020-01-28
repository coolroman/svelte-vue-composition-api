<div class="detail">
  {#if $recipe}
    <div class="recipe">
      <h2>{$recipe.title}</h2>
      <a href="javascript:void(0);" on:click|preventDefault="{e => show = !show}">{show ? 'Скрыть' : 'Показать'}</a>
      {#if show}
        <p>{$recipe.description}</p>
      {/if}
      <button class="btn remove" on:click="{e => recipes.removeRecipe($recipe.id)}">Удалить</button>
    </div>
  {/if}
</div>

<script>
  import { recipes, current as recipe } from './../composition/recipes.js';

  let show = true;

  $: { show = $recipe == null; } // will set show to false on current recipe change
</script>

<style>
  .recipe {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .recipe p {
    font-size: .8rem;
    margin-bottom: .5rem;
  }

  .recipe a, .recipe h2 {
    margin-bottom: .5rem;
  }
</style>
