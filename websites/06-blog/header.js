const template = document.createElement("template");

template.innerHTML=`
<header>
    <div class="sidebar">
        <img class="sidebar-cover" src="img/desk-laptop-img.jpg" alt="Ноутбук на столе">
        <div class="sidebar-profile">
            <a href="profile.html">
                <img class="sidebar-avatar" src="img/avatar.jpg" alt="Аватар пользователя">
            </a>
            <p class="sidebar-name">Majestic Art</p>
            <p class="sidebar-occupation">Веб-разработчик</p>
            <div class="sidebar-social">
                <a href="#"><img src="img/icons/instagram-icon.svg" alt="Instagram"></a>
                <a href="#"><img src="img/icons/telegram-icon.svg" alt="Telegram"></a>
            </div>
            <p class="sidebar-about">Веб-разработчик. Занимаюсь версткой сайтов. Работаю в профессии с 2016 года. Работал в нескольких ИТ компаниях и наработал более 10 000 часов в создании сайтов различной сложности.</p>
            <div class="sidebar-buttons">
                <a href="works.html">Мои работы</a>
                <a href="javascript:void(0)" onclick="openModalContactMe()">Написать мне</a>
            </div>
        </div>
    </div>

    <nav class="navigation">
        <a class="btn-menu" href="javascript:void(0)" onclick="openMobileMenu()"> <img src="img/icons/burger-menu-icon.svg"> </a>
        <div class="nav-links" id="id-navMenuLinks">
            <a href="index.html">Главная</a>
            <a href="search-result.html">Поиск по сайту</a>
            <a href="signup.html">Регистрация / Вход</a>
        </div>
    </nav>

    <!-- Модальные окна -->

    <div class="overlay" id="overlayContactMe">
        <div class="contactme-wrap">
            <a href="javascript:void(0)">
                <img class="overlay-close-btn" src="/img/icons/close-icon.svg" alt="" onclick="closeModalContactMe()">
            </a>
            <form class="contactme-form" action="" method="POST">
                <input type="text" name="profile-name" placeholder="Имя">
                <input type="email" name="profile-email" placeholder="Email">
                <input type="text" name="profile-message" placeholder="Сообщение">
                <button class="btn-primary">Отправить</button>
            </form>
            <div class="contactme-links">
                <a href="#">e-mail: info@mywebsite.ru</a>
                <a href="#">тел: +943-232-856-22</a>
            </div>
        </div>
    </div>

</header>
`

document.body.appendChild(template.content);

function openMobileMenu() {
    let x = document.getElementById("id-navMenuLinks");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}