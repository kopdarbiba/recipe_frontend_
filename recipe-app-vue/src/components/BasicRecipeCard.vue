<script setup>
import { ref } from 'vue';
const props = defineProps({
    RecipeID: { type: String, required: true }
})

const recipe = ref({});

fetch(`http://127.0.0.1:8000/api/recipes/${props.RecipeID}`).then(async (res) => {
    const data = await res.json()
    recipe.value = data
})
</script>

<template>
    <div v-if="RecipeID && Object.keys(recipe).length > 0" class="shadows-xl card card-side bg-base-100">
        <pre>Recipe Title: {{ recipe.title }}</pre>
    <p>Recipe ID: {{ recipe.id }}</p>
    <div class="recipe-image">
        <!-- <figure>
            <img
            src="https://bildes-receptem.s3.amazonaws.com/recipe_images/originals/database.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIATZWEGO4GE6AA2V5C%2F20240506%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20240506T123731Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=088ee64edd3716272fad77333c7918546599cd5afa64fcc51948872dc696dc95"
            alt="Recipe"
            />   
        </figure> -->
        <div class="card-body">
            <h2 class="recipe-id">Cooking time = {{ recipe.cooking_time }} Minutes</h2>
            <!-- <p>Click on the link to see the full recipe</p> -->
            <div class="justify-end card-actions">
                 <a :href="recipe.images[1].image_url" class="btn btn-primary">See more details</a >
            </div>
        </div>
    </div>
    </div>
</template>

