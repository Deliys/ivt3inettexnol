// Шаг 1: Копирование текста всех пунктов меню в конец абзаца при нажатии на кнопку
document.getElementById('copyButton').addEventListener('click', function() {
    let menuItems = document.querySelectorAll('#menu li');
    let outputParagraph = document.getElementById('output');
    
    menuItems.forEach(item => {
        outputParagraph.textContent += item.textContent + ' ';
    });
});

// Шаг 2: Изменение определенного стиля всех элементов одного класса при нажатии на кнопку
document.getElementById('changeStyleButton').addEventListener('click', function() {
    let menuItems = document.querySelectorAll('#menu li');
    
    menuItems.forEach(item => {
        item.style.color = 'blue';
        item.style.fontWeight = 'bold';
    });
});
document.getElementById('changeStyleButton2').addEventListener('click', function() {
    let menuItems = document.querySelectorAll('#menu li');
    
    menuItems.forEach(item => {
        item.style.color = 'red';
        item.style.fontWeight = 'bold';
    });
});

// Шаг 3: Поиск строки в пунктах меню с подсветкой найденных результатов
document.getElementById('searchInput').addEventListener('input', function() {
    let searchValue = this.value.toLowerCase();
    let menuItems = document.querySelectorAll('#menu li');
    
    menuItems.forEach(item => {
        let itemText = item.textContent.toLowerCase();
        if (itemText.includes(searchValue)) {
            item.style.backgroundColor = 'yellow';
        } else {
            item.style.backgroundColor = 'transparent';
        }
    });
});