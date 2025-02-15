document.addEventListener('DOMContentLoaded', function() {
    const colorDivs = document.querySelectorAll('[class^="card-color-"]');
    const aboutCard = document.querySelector('.about');
    const passionsCard = document.querySelector('.passions');

    colorDivs.forEach(div => {
        div.addEventListener('click', function() {
            const selectedColor = window.getComputedStyle(div).backgroundColor;
            
            aboutCard.style.backgroundColor = selectedColor;
            passionsCard.style.backgroundColor = selectedColor;
            
            let textColor;
            if (selectedColor === 'rgb(54, 169, 54)') { // Vert
                textColor = '#ffffff';
            } else if (selectedColor === 'rgb(32, 88, 144)') { // Bleu
                textColor = '#ffffff';
            } else if (selectedColor === 'rgb(255, 215, 0)') { // Jaune
                textColor = '#000000';
            } else if (selectedColor === 'rgb(255, 0, 0)') { // Rouge
                textColor = '#ffffff';
            } else if (selectedColor === 'rgb(255, 165, 0)') { // Orange
                textColor = '#000000';
            }

            aboutCard.style.color = textColor;
            passionsCard.style.color = textColor;

            const boldTexts = document.querySelectorAll('b');
            boldTexts.forEach(boldText => {
                boldText.style.color = textColor;
            });
        });
        
        div.style.cursor = 'pointer';
    });
});