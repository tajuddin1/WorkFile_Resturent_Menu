document.addEventListener("DOMContentLoaded", function() {
    
    const toggleButtons = document.querySelectorAll('.menu-header');
    
    // Fonction pour fermer tous les menus
    function closeAllMenus() {
        toggleButtons.forEach(function(toggleButton) {
            const toggleIcon = toggleButton.querySelector('.toggle-btn');
            const content = document.getElementById(toggleButton.getAttribute('data-target'));
            
            if (content.style.display === 'grid') {
                content.style.display = 'none';
                toggleIcon.classList.remove('open');
                toggleIcon.classList.add('closed');
            }
        });
    }
    
    // Initialisation de la visibilité des menus
    toggleButtons.forEach(function(toggleButton) {
        const toggleIcon = toggleButton.querySelector('.toggle-btn');
        const targetId = toggleButton.getAttribute('data-target');
        const content = document.getElementById(targetId);
        
        // S'assurer que le contenu est caché au démarrage
        content.style.display = 'none';
        toggleIcon.classList.add('closed'); // Par défaut, la flèche est vers le bas
        
        toggleButton.addEventListener('click', function() {
            const isVisible = content.style.display === 'grid';
            
            // Fermer tous les autres menus
            closeAllMenus();
            
            // Ouvrir ou fermer le menu actuel
            if (isVisible) {
                content.style.display = 'none';
                toggleIcon.classList.remove('open');
                toggleIcon.classList.add('closed');
            } else {
                content.style.display = 'grid';
                toggleIcon.classList.remove('closed');
                toggleIcon.classList.add('open');

                // Faire défiler jusqu'en haut (ou une position spécifique)
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });
    
    const btnMenu = document.getElementById('btn-menu');
    const btnDrink = document.getElementById('btn-boissons');
    const menu = document.getElementById('menu');
    const drink = document.getElementById('boissons');
    
    // Gestion du bouton Menu
    btnMenu.addEventListener('click', () => {
        btnMenu.style.backgroundColor = 'black';
        btnMenu.style.color = 'white';
        btnMenu.style.borderRadius = '3vw';
        
        btnDrink.style.backgroundColor = 'transparent';
        btnDrink.style.color = 'black';
        btnDrink.style.borderRadius = 'none';
        
        // Fermer toutes les catégories ouvertes dans le menu
        closeAllMenus();
        
        // Afficher la section Menu
        drink.style.display = 'none';
        menu.style.display = 'flex';
    });
    
    // Gestion du bouton Boissons
    btnDrink.addEventListener('click', () => {
        btnDrink.style.backgroundColor = 'black';
        btnDrink.style.color = 'white';
        btnDrink.style.borderRadius = '3vw';
        
        btnMenu.style.backgroundColor = 'transparent';
        btnMenu.style.color = 'black';
        btnMenu.style.borderRadius = 'none';
        
        // Fermer toutes les catégories ouvertes dans le menu
        closeAllMenus();
        
        // Afficher la section Boissons
        menu.style.display = 'none';
        drink.style.display = 'flex';
    });
});
//------------------------------------------------------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.getElementById('languageSwitcher');
    const elementsToTranslate = document.querySelectorAll('[data-translate]');

    // Function to update the text content based on selected language
    function updateLanguage(lang) {
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-translate');
            element.textContent = translations[lang][key];
        });
    }
    

    // Event listener for the language switcher
    languageSwitcher.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        updateLanguage(selectedLang);
    });

    // Initial language setting
    updateLanguage('fr');
});
//------------------------------------------------------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const languageSwitcher = document.getElementById('languageSwitcher');

    // Mise à jour du drapeau dans le sélecteur en fonction de la sélection
    function updateFlag() {
        const selectedLang = languageSwitcher.value;
        let flagUrl;

        switch (selectedLang) {
            case 'fr':
                flagUrl = 'image/france.png';
                break;
            case 'en':
                flagUrl = 'image/anglais.png';
                break;
            case 'es':
                flagUrl = 'image/espange.png';
                break;
            case 'de':
                flagUrl = 'image/allemagne.svg';
                break;
        }

        languageSwitcher.style.backgroundImage = `url('${flagUrl}')`;
    }

    // Applique le drapeau correspondant à la langue sélectionnée lors du chargement
    updateFlag();

    // Change le drapeau lorsque l'utilisateur change la langue
    languageSwitcher.addEventListener('change', updateFlag);
});

//------------------------------------------------------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const openBtns = document.querySelectorAll('.add-btn');
    const modal = document.getElementById('modal');
    // const closeBtn = document.querySelector('.close-btn');
    const allergenBtn = document.getElementById('modal-allergen-btn');
    const allergenList = document.getElementById('modal-allergen-list');
    const allergenItems = document.getElementById('allergen-items');

    // Gestion de l'ouverture du modale
    openBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.dropdown-item');
            // const title = item.getAttribute('data-title');
            // const description = item.getAttribute('data-description');
            // const price = item.getAttribute('data-price');
            // const image = item.getAttribute('data-image');
            const allergens = item.getAttribute('data-allergens').split(','); // Liste des allergènes
            

            // document.getElementById('modal-title').textContent = title;
            // document.getElementById('modal-description').textContent = description;
            // document.getElementById('modal-price').textContent = price;
            // document.getElementById('modal-image').src = image;
    
            // Remplit la liste des allergènes
            allergenItems.innerHTML = '';
            allergens.forEach(allergen => {
                const li = document.createElement('li');
                li.textContent = allergen.trim();
                allergenItems.appendChild(li);
            });


            // Affiche le modale
            modal.style.display = 'flex';
            allergenList.style.display = 'none'; // Caché par défaut
        });
    });

    // Gestion de la fermeture du modale
    // closeBtn.addEventListener('click', () => {
    //     modal.style.display = 'none';
    // });

    // modal.addEventListener('click', (e) => {
    //     if (e.target === modal) {
    //         modal.style.display = 'none';
    //     }
    // });

    // Gestion du bouton allergènes
    allergenBtn.addEventListener('click', () => {
        if (allergenList.style.display === 'none' || allergenList.style.display === '') {
            allergenList.style.display = 'block';
        } else {
            allergenList.style.display = 'none';
        }
    });
});


// New Code Added From Yasmin 

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-btn');
    
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', function() {
            // Get details from the clicked item
            const title = this.querySelector('h4').textContent;
            const description = this.querySelector('p').textContent;
            const price = this.querySelector('.price').textContent;
            const image = this.querySelector('.menu-image').src;

            // Update modal content
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalDescription').textContent = description;
            document.getElementById('modalPrice').textContent = price;
            document.getElementById('modal-image').src = image;
            // Display the modal
            modal.style.display = 'flex';
        });
    });

    // Close the modal when clicking on the close button
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside of the modal content
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
