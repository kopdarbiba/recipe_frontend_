<template>
    <header>
      <h1>New Recipe</h1>
    </header>
    <form>
        <p>Title:<br><input name="title" placeholder="Recipe title goes here.." type="text"></p>
        <p>Description:<br><textarea name="description" rows="10" cols="30"></textarea></p>
        <br>
        <label for="cuisines">Cuisines: </label>
            <select id="cuisines" name="cuisines">
            <option value="latvian">Latvian</option>
            <option value="russian">Russian</option>
            <option value="italian">Italian</option>
            <option value="chinese">Chinese</option>
            </select>
        <br><br>
        <label for="meals">Meals: </label>
            <select id="meals" name="meals" multiple>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
            </select>
        <!-- <p>Cooking Time:<br><input name="cooking time" type="range" min="0" max="600"></p> -->
        <p>Cooking Time:<br><input name="cooking-time" id="cooking-time-input" type="range" min="0" max="600" oninput="updateCookingTime(this.value)"> <span id="cooking-time-display">0</span> minutes</p>


        <p>Servings:<br><input name="servings" type="number"></p>
        <p>Dietary Preference:<br>
            <input type="radio" id="keto" name="dietary preference" value="keto"><label for="dietary preference">Keto</label><br>
            <input type="radio" id="vegetarian" name="dietary preference" value="vegetarian"><label for="dietary preference">Vegetarian</label><br>
            <input type="radio" id="pescatarian" name="dietary preference" value="pescatarian"><label for="dietary preference">Pescatarian</label><br>
        </p>
        <p>Equipment:<br>
            <input type="checkbox" id="pan" name="equipment" value="pan"><label for="equipment">Pan</label><br>
            <input type="checkbox" id="stove" name="equipment" value="stove"><label for="equipment">Stove</label><br>
            <input type="checkbox" id="cutting board" name="equipment" value="cutting board"><label for="equipment">Cutting board</label><br>
        </p>
        <!-- Add ingredients with an add button -->
        <p>Ingredients:<br><input name="ingredinets"></p>
        <!-- Add cooking steps with an add button -->
        <p>Cooking Steps:<br><input name="cooking steps"></p>
        <p>Images:<br><input name="images" type="file"></p>
        <button type="submit">Save</button>
    </form>
  </template>


<script>
export default {
  name: 'Custom'
};

function updateCookingTime(value) {
    document.getElementById("cooking-time-display").textContent = value + " minutes";
}

</script>