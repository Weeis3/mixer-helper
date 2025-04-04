// Effect data for mixables and ingredients
const effectData = {
mixables: {
    "OG Kush": {
        img: "mixables/og-kush.png",
        effects: ["Calming"]
    },
    "Sour Diesel": {
        img: "mixables/sour-diesel.png",
        effects: ["Refreshing"]
    },
    "Green Crack": {
        img: "mixables/green-crack.png",
        effects: ["Thought-Provoking"]
    },
    "Grandaddy Purple": {
        img: "mixables/grandaddy-purple.png",
        effects: ["Sedating"]
    },
    "Meth": {
        img: "mixables/meth.png",
    },
    "Cocaine": {
        img: "mixables/cocaine.png",
        effects: ["Energy", "Confidence", "Euphoria", "Anxiety", "Addiction Risk"]
    }
},
ingredients: {
    "Banana": {
        img: "ingrediants/banana.png",
        effects: ["Gingeritis"],
        replacements: {
            "Energizing": "Thought-Provoking",
            "Calming": "Sneaky",
            "Toxic": "Smelly",
            "Long Faced": "Refreshing",
            "Cyclopean": "Thought-Provoking",
            "Disorienting": "Focused",
            "Paranoia": "Jennerising",
            "Smelly": "Anti-Gravity"
        }
    },
    "Chili": {
        img: "ingrediants/chili.png",
        effects: ["Spicy"],
        replacements: {
            "Athletic": "Euphoric",
            "Anti-Gravity": "Tropic Thunder",
            "Sneaky": "Bright-Eyed",
            "Munchies": "Toxic",
            "Laxative": "Long Faced",
            "Shrinking": "Refreshing"
        }
    },
    "Cuke": {
        img: "ingrediants/cuke.png",
        effects: ["Energizing"],
        replacements: {
            "Toxic": "Euphoric",
            "Slippery": "Munchies",
            "Sneaky": "Paranoia",
            "Foggy": "Cyclopean",
            "Gingeritis": "Thought-Provoking",
            "Munchies": "Athletic",
            "Euphoric": "Laxative"
        }
    },
    "Donut": {
        img: "ingrediants/donut.png",
        effects: ["Calorie-Dense"],
        replacements: {
            "Calorie-Dense": "Explosive",
            "Munchies": "Calming",
            "Balding": "Sneaky",
            "Anti-Gravity": "Slippery",
            "Jennerising": "Gingeritis",
            "Focused": "Euphoric",
            "Shrinking": "Energizing"
        }
    },
    "Flu Medicine": {
        img: "ingrediants/flu-medicine.png",
        effects: ["Sedating"],
        replacements: {
            "Calming": "Bright-Eyed",
            "Athletic": "Munchies",
            "Thought-Provoking": "Gingeritis",
            "Cyclopean": "Foggy",
            "Munchies": "Slippery",
            "Laxative": "Euphoric",
            "Euphoric": "Toxic",
            "Focused": "Calming",
            "Electrifying": "Refreshing",
            "Shrinking": "Paranoia"
        }
    },
    "Gasoline": {
        img: "ingrediants/gasoline.png",
        effects: ["Toxic"],
        replacements: {
            "Gingeritis": "Smelly",
            "Jennerising": "Sneaky",
            "Munchies": "Sedating",
            "Energizing": "Spicy",
            "Euphoric": "Energizing",
            "Laxative": "Foggy",
            "Disorienting": "Glowing",
            "Paranoia": "Calming",
            "Electrifying": "Disorienting",
            "Shrinking": "Focused"
        }
    },
    "Iodine": {
        img: "ingrediants/iodine.png",
        effects: ["Jennerising"],
        replacements: {
            "Calming": "Balding",
            "Toxic": "Sneaky",
            "Foggy": "Paranoia",
            "Calorie-Dense": "Gingeritis",
            "Euphoric": "Seizure-Inducing",
            "Refreshing": "Thought-Provoking"
        }
    },
    "Mouthwash": {
        img: "ingrediants/mouthwash.png",
        effects: ["Balding"],
        replacements: {
            "Calming": "Anti-Gravity",
            "Calorie-Dense": "Sneaky",
            "Explosive": "Sedating",
            "Focused": "Jennerising"
        }
    },
    "Motor oil": {
        img: "ingrediants/oil.png",
        effects: ["Slippery"],
        replacements: {
            "Energizing": "Munchies",
            "Foggy": "Toxic",
            "Euphoric": "Sedating",
            "Paranoia": "Anti-Gravity",
            "Munchies": "Schizophrenia"
        }
    },
    "Paracetamol": {
        img: "ingrediants/paracetamol.png",
        effects: ["Sneaky"],
        replacements: {
            "Energizing": "Paranoia",
            "Calming": "Slippery",
            "Toxic": "Tropic Thunder",
            "Spicy": "Bright-Eyed",
            "Glowing": "Toxic",
            "Foggy": "Calming",
            "Munchies": "Anti-Gravity",
            "Paranoia": "Balding",
            "Electrifying": "Athletic",
            "Focused": "Gingeritis"
        }
    },
    "Energy Drink": {
        img: "ingrediants/redbull.png",
        effects: ["Athletic"], 
        replacements: {
            "Sedating": "Munchies",
            "Euphoric": "Energizing",
            "Spicy": "Euphoric",
            "Tropic Thunder": "Sneaky",
            "Glowing": "Disorienting",
            "Schizophrenia": "Balding",
            "Focused": "Shrinking"
        }
    },
    "Horse Semen": {
        img: "ingrediants/semen.png",
        effects: ["Long Faced"],
        replacements:  {
            "Anti-Gravity": "Calming",
            "Gingeritis": "Refreshing",
            "Thought-Provoking": "Electrifying"
        }
    },
    "Viagra": {
        img: "ingrediants/viagra.png",
        effects: ["Tropic Thunder"],
        replacements: {
            "Athletic": "Sneaky",
            "Euphoric": "Bright-Eyed",
            "Laxative": "Calming",
            "Disorienting": "Toxic"
        }
    }
}
};

document.addEventListener('DOMContentLoaded', function() {
// Store selected items
const selectedItems = {
    mixable: null,
    ingredients: [] // Now stores objects with {name, img, count}
};

// Track which ingredients have had their replacements applied
const appliedReplacements = new Set();

// Get DOM elements
const loadingOverlay = document.getElementById('loading-overlay');
const mixablesContainer = document.getElementById('mixables-container');
const mixablesDropdown = document.getElementById('mixables-dropdown');
const ingredientsContainer = document.getElementById('ingredients-container');
const ingredientsDropdown = document.getElementById('ingredients-dropdown');
const selectedIngredientsDiv = document.getElementById('selected-ingredients');

// Populate mixables dropdown
Object.entries(effectData.mixables).forEach(([name, data]) => {
    const item = document.createElement('div');
    item.className = 'dropdown-item flex items-center';
    item.setAttribute('data-name', name);
    item.innerHTML = `
        <img src="${data.img}" alt="${name}" class="w-6 h-6 mr-3">
        <span>${name}</span>
    `;
    mixablesDropdown.appendChild(item);
});

// Populate ingredients dropdown
Object.entries(effectData.ingredients).forEach(([name, data]) => {
    const item = document.createElement('div');
    item.className = 'dropdown-item flex items-center';
    item.setAttribute('data-name', name);
    item.innerHTML = `
        <img src="${data.img}" alt="${name}" class="w-6 h-6 mr-3">
        <span>${name}</span>
    `;
    ingredientsDropdown.appendChild(item);
});

// Function to show loading overlay
function showLoading() {
    loadingOverlay.classList.remove('hidden');
}

// Function to hide loading overlay
function hideLoading() {
    loadingOverlay.classList.add('hidden');
}

// Function to clear all ingredients
function clearIngredients() {
    selectedItems.ingredients = [];
    updateIngredientsList();
    updateOutcome();
}

// Function to update the outcome display
function updateOutcome() {
    const outcomeDisplay = document.getElementById('outcome-display');
    const combinedEffectsDiv = document.getElementById('combined-effects');
    
    if (selectedItems.mixable) {
        let outcomeText = `Base: ${selectedItems.mixable.name}`;
        
        if (selectedItems.ingredients.length > 0) {
            const totalIngredients = selectedItems.ingredients.reduce((sum, ing) => sum + ing.count, 0);
            outcomeText += ` + ${totalIngredients} ingredient`;
            if (totalIngredients > 1) outcomeText += 's';
        }
        
        outcomeDisplay.textContent = outcomeText;
        combinedEffectsDiv.classList.remove('hidden');
        calculateCombinedEffects();
    } else {
        outcomeDisplay.textContent = 'Select mixables and ingredients';
        combinedEffectsDiv.classList.add('hidden');
    }
}

// Function to apply effect replacements
function applyReplacements(effects, ingredientName) {
    const ingredient = effectData.ingredients[ingredientName];
    if (!ingredient.replacements) return effects;
    
    return effects.map(effect => {
        return ingredient.replacements[effect] || effect;
    });
}

// Function to calculate and display combined effects
function calculateCombinedEffects() {
    if (!selectedItems.mixable) return;
    
    const effectsList = document.getElementById('combined-effects-list');
    effectsList.innerHTML = '';
    
    // Get base effects
    let allEffects = [...effectData.mixables[selectedItems.mixable.name].effects];
    
    // Process each ingredient
    selectedItems.ingredients.forEach(ing => {
        // Add the ingredient's own effects
        allEffects = [...allEffects, ...effectData.ingredients[ing.name].effects];
        
        // Apply replacements only if we have enough of this ingredient
        if (effectData.ingredients[ing.name].replacements) {
            // For Donut, we need at least 2 to get Explosive
            if (ing.name === "Donut" && ing.count >= 2) {
                allEffects = applyReplacements(allEffects, ing.name);
            }
            // For other ingredients, apply replacements as before
            else if (ing.name !== "Donut") {
                allEffects = applyReplacements(allEffects, ing.name);
            }
        }
    });
    
    // Get unique effects
    const uniqueEffects = [...new Set(allEffects)];
    
    // Display each effect
    uniqueEffects.forEach(effectName => {
        const effectDiv = document.createElement('div');
        effectDiv.className = 'effect-item';
        effectDiv.textContent = effectName;
        effectsList.appendChild(effectDiv);
    });
}
// Function to show mixable effects
function showMixableEffects(mixableName) {
    const effectsDiv = document.getElementById('mixable-effects');
    const effectsList = document.getElementById('mixable-effects-list');
    
    if (!mixableName) {
        effectsDiv.classList.add('hidden');
        return;
    }
    
    effectsList.innerHTML = '';
    const effects = effectData.mixables[mixableName].effects;
    
    effects.forEach(effect => {
        const effectDiv = document.createElement('div');
        effectDiv.className = 'effect-item';
        effectDiv.textContent = effect;
        effectsList.appendChild(effectDiv);
    });
    
    effectsDiv.classList.remove('hidden');
}

// Handle mixables selection
mixablesContainer.addEventListener('click', function(e) {
    e.stopPropagation();
    document.querySelectorAll('.dropdown').forEach(d => {
        if (d !== mixablesDropdown) d.style.display = 'none';
    });
    mixablesDropdown.style.display = mixablesDropdown.style.display === 'block' ? 'none' : 'block';
});

mixablesDropdown.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function() {
        const name = item.getAttribute('data-name');
        const data = effectData.mixables[name];
        
        // Update the container with selected item
        mixablesContainer.innerHTML = `
            <div class="selected-item">
                <img src="${data.img}" alt="${name}" class="w-8 h-8">
                <span>${name}</span>
            </div>
        `;
        
        // Store the selected item and clear ingredients
        selectedItems.mixable = { img: data.img, name: name };
        clearIngredients();
        showMixableEffects(name);
        updateOutcome();
        
        // Close dropdown
        mixablesDropdown.style.display = 'none';
    });
});

// Handle ingredients selection
ingredientsContainer.addEventListener('click', function(e) {
    e.stopPropagation();
    document.querySelectorAll('.dropdown').forEach(d => {
        if (d !== ingredientsDropdown) d.style.display = 'none';
    });
    ingredientsDropdown.style.display = ingredientsDropdown.style.display === 'block' ? 'none' : 'block';
});

ingredientsDropdown.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', async function() {
        const name = item.getAttribute('data-name');
        const data = effectData.ingredients[name];
        
        // Show loading overlay
        showLoading();
        
        // Random delay between 2-5 seconds
        const delay = Math.random() * 3000 + 2000;
        
        // Wait for the delay
        await new Promise(resolve => setTimeout(resolve, delay));
        
        // Check if ingredient already exists in selection
        const existingIng = selectedItems.ingredients.find(ing => ing.name === name);
        
        if (existingIng) {
            // Increment count if already exists
            existingIng.count++;
        } else {
            // Add new ingredient with count 1
            selectedItems.ingredients.push({ 
                img: data.img, 
                name: name,
                count: 1
            });
        }
        
        updateIngredientsList();
        updateOutcome();
        
        // Hide loading overlay
        hideLoading();
        
        // Close dropdown
        ingredientsDropdown.style.display = 'none';
    });
});

// Function to update the selected ingredients list
function updateIngredientsList() {
    selectedIngredientsDiv.innerHTML = '';
    
    selectedItems.ingredients.forEach((ing, index) => {
        const ingDiv = document.createElement('div');
        ingDiv.className = 'ingredient-item';
        ingDiv.innerHTML = `
            <img src="${ing.img}" alt="${ing.name}" class="w-6 h-6">
            <span>${ing.name}</span>
            <span class="ingredient-count">${ing.count}</span>
            <div class="flex gap-1">
                <button class="remove-one" data-index="${index}">
                    <i class="fas fa-minus"></i>
                </button>
                <button class="remove-all" data-index="${index}">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        selectedIngredientsDiv.appendChild(ingDiv);
    });
    
    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-one').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const index = parseInt(button.getAttribute('data-index'));
            selectedItems.ingredients[index].count--;
            
            if (selectedItems.ingredients[index].count <= 0) {
                selectedItems.ingredients.splice(index, 1);
            }
            
            updateIngredientsList();
            updateOutcome();
        });
    });
    
    document.querySelectorAll('.remove-all').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const index = parseInt(button.getAttribute('data-index'));
            selectedItems.ingredients.splice(index, 1);
            updateIngredientsList();
            updateOutcome();
        });
    });
}

// Close dropdowns when clicking anywhere else
document.addEventListener('click', function() {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.style.display = 'none';
    });
});
});