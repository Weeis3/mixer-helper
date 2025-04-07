// Effect data for mixables and ingredients
const mixables =  {
    "OG Kush": {
        img: "mixables/og-kush.png",
        basePrice: 35,
        effects: ["Calming"]
    },
    "Sour Diesel": {
        img: "mixables/sour-diesel.png",
        basePrice: 35,
        effects: ["Refreshing"]
    },
    "Green Crack": {
        img: "mixables/green-crack.png",
        basePrice: 35,
        effects: ["Thought-Provoking"]
    },
    "Grandaddy Purple": {
        img: "mixables/grandaddy-purple.png",
        basePrice: 35,
        effects: ["Sedating"]
    },
    "Meth": {
        img: "mixables/meth.png",
        basePrice: 70,
        effects: []
    },
    "Cocaine": {
        img: "mixables/cocaine.png",
        effects: []
    }
};

const effectValues = {
    "Anti-Gravity": 0.54,
    "Athletic": 0.32,
    "Balding": 0.30,
    "Bright-Eyed": 0.40,
    "Calming": 0.10,
    "Calorie-Dense": 0.28,
    "Cyclopean": 0.56,
    "Disorienting": 0.00,
    "Electrifying": 0.50,
    "Energizing": 0.22,
    "Euphoric": 0.18,
    "Explosive": 0.00,
    "Focused": 0.16,
    "Foggy": 0.36,
    "Gingeritis": 0.20,
    "Glowing": 0.48,
    "Jennerising": 0.42,
    "Lethal": 0.00,
    "Long Faced": 0.52,
    "Munchies": 0.12,
    "Paranoia": 0.00,
    "Refreshing": 0.14,
    "Schizophrenia": 0.00,
    "Sedating": 0.26,
    "Shrinking": 0.60,
    "Seizure-Inducing": 0.00,
    "Slippery": 0.34,
    "Sneaky": 0.24,
    "Spicy": 0.38,
    "Sticky": 0.00,
    "Thought-Provoking": 0.44,
    "Toxic": 0.00,
    "Tropic Thunder": 0.46,
    "Zombifying": 0.58,
};


const ingredients = {
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
    "Bean": {
        img: "ingrediants/bean.png",
        effects: ["Foggy"],
        replacements: {
            "Energizing": "Cyclopean",
            "Calming": "Glowing",
            "Sneaky": "Calming",
            "Jennerising": "Paranoia",
            "Athletic": "Laxative",
            "Slippery": "Toxic",
            "Thought-Provoking": "Energizing",
            "Seizure-Inducing": "Focused",
            "Focused": "Disorienting",
            "Thought-Provoking": "Cyclopean",
            "Shrinking": "Electrifying"
        }
    },
    "Addy": {
        img: "ingrediants/addy.png",
        effects: ["Thought-Provoking"],
        replacements: {
            "Sedating": "Gingeritis",
            "Long Faced": "Electrifying",
            "Glowing": "Refreshing",
            "Foggy": "Energizing",
            "Explosive": "Euphoric"
        }
    },
    "battery": {
        img: "ingrediants/battery.png",
        effects: ["Thought-Provoking"],
        replacements: {
            "Munchies": "Tropic Thunder",
            "Euphoric": "Zombifying",
            "Electrifying": "Euphoric",
            "Laxative": "Calorie-Dense",
            "Electrifying": "Euphoric",
            "Cyclopean": "Glowing",
            "Shrinking": "Munchies"
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
};
document.addEventListener('DOMContentLoaded', function() {
// Store selected items
const selectedItems = {
    mixable: null,
    ingredients: [] // Now stores objects with {name, img, count}
};

// Track which ingredients have had their replacements applied
const appliedReplacements = new Set();
var effects = []
// Get DOM elements
const loadingOverlay = document.getElementById('loading-overlay');
const mixablesContainer = document.getElementById('mixables-container');
const mixablesDropdown = document.getElementById('mixables-dropdown');
const ingredientsContainer = document.getElementById('ingredients-container');
const ingredientsDropdown = document.getElementById('ingredients-dropdown');
const selectedIngredientsDiv = document.getElementById('selected-ingredients');

// Populate mixables dropdown
Object.entries(mixables).forEach(([name, data]) => {
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
Object.entries(ingredients).forEach(([name, data]) => {
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
  // Function to calculate sell price
  function calculatePrice() {
    if (!selectedItems.mixable) return 0;
  
    // 1. Get base price of the mixable
    const basePrice = effectData.mixables[selectedItems.mixable.name].basePrice;
  
    // 2. Get all active effects (after replacements)
    let allEffects = [...effectData.mixables[selectedItems.mixable.name].effects];
    
    selectedItems.ingredients.forEach(ing => {
      allEffects = [...allEffects, ...effectData.ingredients[ing.name].effects];
      if (effectData.ingredients[ing.name].replacements) {
        allEffects = applyReplacements(allEffects, ing.name);
      }
    });
  
    // 3. Sum the prices of all UNIQUE effects
    const uniqueEffects = [...new Set(allEffects)];
    const effectsPriceSum = uniqueEffects.reduce((sum, effect) => {
      return sum + (effectData.effectPrices[effect] || 0);
    }, 0);
  
    // 4. Apply formula: round(basePrice * (1 + effectsPriceSum))
    const sellPrice = Math.round(basePrice * (1 + effectsPriceSum));
    
    price.textContent = `$${sellPrice}`;
  }
// Function to update the outcome display
function updateOutcome() {
    const outcomeDisplay = document.getElementById('outcome-display');
    const combinedEffectsDiv = document.getElementById('combined-effects');
    const PriceText = document.getElementById("price");
    if (selectedItems.mixable) {
        let outcomeText = `Base: ${selectedItems.mixable.name}`;
       
        if (selectedItems.ingredients.length > 0) {
            const totalIngredients = selectedItems.ingredients.length;
            outcomeText += ` + ${totalIngredients} ingredient`;
            if (totalIngredients > 1) outcomeText += 's';
        }
        
        outcomeDisplay.textContent = outcomeText;
        combinedEffectsDiv.classList.remove('hidden');
        calculateCombinedEffects();
        var price = `$${calculatePrice(selectedItems.mixable.name, effects, mixables[selectedItems.mixable.name].basePrice)}`;
        PriceText.textContent = price;
    } else {
        outcomeDisplay.textContent = 'Select mixables and ingredients';
        combinedEffectsDiv.classList.add('hidden');
    }
}


function applyReplacements(ingredientName, currentEffects) {
    const ingredient = ingredients[ingredientName];
    if (!ingredient) return [...currentEffects]; // Return copy of original effects if invalid ingredient

    // Create a new array to avoid mutating the original
    let updatedEffects = [...currentEffects];

    // Process each replacement rule
    for (const [originalEffect, newEffect] of Object.entries(ingredient.replacements)) {
        const effectIndex = updatedEffects.indexOf(originalEffect);
        
        if (effectIndex !== -1) { // If the effect exists in current effects
            // Replace it only if new effect isn't already present
            if (!updatedEffects.includes(newEffect)) {
                updatedEffects[effectIndex] = newEffect;
            } else {
                // Remove the original if new effect already exists
                updatedEffects.splice(effectIndex, 1);
            }
        }
    }

    // Add the ingredient's base effects if not already present
    ingredient.effects.forEach(effect => {
        if (!updatedEffects.includes(effect)) {
            updatedEffects.push(effect);
        }
    });

    return updatedEffects.slice(0, 8); // Enforce max 8 effects
}

function calculateCombinedEffects() {
    if (!selectedItems.mixable) return;
    
    const effectsList = document.getElementById('combined-effects-list');
    effectsList.innerHTML = '';

    // Start with base effects
    let currentEffects = [...mixables[selectedItems.mixable.name].effects] || [];

    // Process each ingredient in exact click order
    selectedItems.ingredients.forEach(ingredient => {
        const ingredientName = ingredient.name;
        currentEffects = applyReplacements(ingredientName, currentEffects);
    });

    // Get unique effects while preserving order
    effects = [];
    const seen = new Set();
    currentEffects.forEach(effect => {
        if (!seen.has(effect)) {
            seen.add(effect);
            effects.push(effect);
        }
    });

    // Display effects
    effects.forEach(effectName => {
        const effectDiv = document.createElement('div');
        effectDiv.className = 'effect-item';
        effectDiv.textContent = effectName;
        effectsList.appendChild(effectDiv);
    });

    // Update price display
    const PriceText = document.getElementById("price");
    const price = `$${calculatePrice(
        selectedItems.mixable.name, 
        effects, 
        mixables[selectedItems.mixable.name].basePrice
    )}`;
    PriceText.textContent = price;
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
    const effects = mixables[mixableName].effects;
    
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
        const data = mixables[name];
        
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
// Modify the ingredient selection handler
ingredientsDropdown.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', async function() {
        const name = item.getAttribute('data-name');
        const data = ingredients[name];
        
        // Show loading overlay
        showLoading();
        
        // Random delay
        await new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
        
        // Add new ingredient instance (no counting)
        selectedItems.ingredients.push({ 
            img: data.img, 
            name: name
        });
        
        updateIngredientsList();
        updateOutcome();
        
        // Hide loading overlay
        hideLoading();
        
        // Close dropdown
        ingredientsDropdown.style.display = 'none';
    });
});

// Simplify updateIngredientsList
function updateIngredientsList() {
    selectedIngredientsDiv.innerHTML = '';
    
    // Display each ingredient in order
    selectedItems.ingredients.forEach((ing, index) => {
        const ingDiv = document.createElement('div');
        ingDiv.className = 'ingredient-item flex items-center justify-between p-2 bg-gray-700 rounded mb-2';
        ingDiv.innerHTML = `
            <div class="flex items-center">
                <img src="${ing.img}" alt="${ing.name}" class="w-6 h-6 mr-2">
                <span>${ing.name}</span>
            </div>
            <button class="remove-single p-1 text-red-400 hover:text-red-300" 
                    data-index="${index}">
                <i class="fas fa-times"></i>
            </button>
        `;
        selectedIngredientsDiv.appendChild(ingDiv);
    });

    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-single').forEach(button => {
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
