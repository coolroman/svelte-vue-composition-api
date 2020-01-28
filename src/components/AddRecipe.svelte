<form class="form" on:submit|preventDefault="{onSubmit}">
  <h1>Добавить рецепт</h1>
  {#if show}
      <div class="input">
        <input type="text" placeholder="Название рецепта" bind:value="{title}">
      </div>
      <div class="input">
        <input type="text" placeholder="Описание рецепта" bind:value="{description}">
      </div>
  {/if}

  <div class="buttons">
    <button class="btn" type="submit" disabled="{!valid}">Создать</button>
    <button class="btn secondary" type="button" on:click="{e => show = !show}">
      {show ? 'Убрать' : 'Показать'} форму
    </button>
  </div>
</form>

<script>
  import { recipes } from './../composition/recipes.js';

  let show = true;

  let title = '';
  let description = '';

  $: valid = title.trim() && description.trim();

  function onSubmit() {
    const recipe = {
      title: title.trim(),
      description: description.trim(),
      id: Date.now().toString()
    };

    title = description = '';

    recipes.addRecipe(recipe);
  }
</script>

<style>
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border: 1px solid #eee;
    margin-bottom: 1rem;
  }

  .form h1 {
    margin: 0;
    margin-bottom: 1rem;
  }

  .input {
    margin-bottom: 1rem;
  }

  .input input {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 8px;
    width: 400px;
  }

  .buttons {
    width: 400px;
    display: flex;
    justify-content: space-around;
  }
</style>
