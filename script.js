document.addEventListener('DOMContentLoaded', function() {
    const dishes = document.querySelectorAll('.dish');

    dishes.forEach(dish => {
        dish.addEventListener('click', function() {
            const recipeId = this.getAttribute('data-recipe-id');
            const recipe = document.getElementById(recipeId);

            if (recipe.style.display === 'none' || recipe.style.display === '') {
                recipe.style.display = 'block';
            } else {
                recipe.style.display = 'none';
            }
        });
    });
});
