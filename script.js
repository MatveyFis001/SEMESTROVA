// Всплывающее сообщение при клике на кнопки "Грати"
document.querySelectorAll(".card button").forEach((button) => {
    button.addEventListener("click", () => {
        alert("Ви натиснули кнопку для гри! Удачі!");
    });
});

// Динамическое скрытие/показ меню (для мобильных устройств)
document.querySelector(".burger-menu").addEventListener("click", () => {
    const navMenu = document.querySelector(".nav ul");
    navMenu.classList.toggle("active");
});

// Динамическое добавление бонусов в раздел "Акції та бонуси"
const bonusesSection = document.querySelector(".bonuses");
if (bonusesSection) {
    const bonuses = [
        "100% бонус на перший депозит!",
        "Безкоштовні обертання у слотах!",
        "Повернення 10% програних коштів щоп'ятниці!"
    ];

    const bonusList = document.createElement("ul");
    bonuses.forEach((bonus) => {
        const li = document.createElement("li");
        li.textContent = bonus;
        bonusList.appendChild(li);
    });
    bonusesSection.appendChild(bonusList);
}
// Настройки цвета и размера текста
document.querySelector(".burger-menu").addEventListener("click", () => {
    const settingsModal = document.getElementById("settings-modal");
    settingsModal.classList.add("active");
});

document.getElementById("apply-settings").addEventListener("click", () => {
    const textColor = document.getElementById("text-color").value;
    const bgColor = document.getElementById("bg-color").value;
    const textSize = document.getElementById("text-size").value;

    document.body.style.color = textColor;
    document.body.style.backgroundColor = bgColor;
    document.body.style.fontSize = `${textSize}px`;

    document.getElementById("settings-modal").classList.remove("active");
});

// Закрытие модального окна при клике вне его содержимого
document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });
});

// Окно авторизации
document.getElementById("auth-button").addEventListener("click", () => {
    const authModal = document.getElementById("auth-modal");
    authModal.classList.add("active");
});

// Обработка формы авторизации
document.getElementById("auth-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;

    alert(`Логін: ${login}\nПароль: ${password}`);
    document.getElementById("auth-modal").classList.remove("active");
});
document.getElementById("toggle-password").addEventListener("click", () => {
    const passwordInput = document.getElementById("password");
    const icon = document.querySelector("#toggle-password i");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        passwordInput.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
});
