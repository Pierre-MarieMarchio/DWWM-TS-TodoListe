const postitBoxes = document.querySelectorAll('.postit-box');

// Boucle sur chaque élément .postit-box
postitBoxes.forEach((postitBox) => {
  // Vérification si la classe ismodified est présente
  if (postitBox.classList.contains('ismodified')) {
    // Sélection de la case à cocher dans l'élément courant
    const checkbox = postitBox.querySelector('.check-box');
    // Désactivation de la case à cocher
    checkbox.disabled = true;
  }
});