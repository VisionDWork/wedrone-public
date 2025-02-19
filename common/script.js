// Render Navbar and Footer after the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Render Navbar
    const navbarUrl = window.location.pathname.endsWith('inicio.html') ? './common/navbar.html' : '../common/navbar.html';
    fetch(navbarUrl)
        .then(res => res.text())
        .then(html => {
            document.getElementById("navbar-container").innerHTML = html;

            // Now the navbar is in the DOM, we can safely reference it
            const navbarEle = document.getElementById("navbar");
            let currentLang = localStorage.getItem('language') || 'pt';
            document.getElementById(currentLang).classList.add('active');
            let lastScrollTop = window.scrollY;

            function changeBackground() {
                if (navbarEle.classList.contains("open")) {
                    navbarEle.classList.remove("open");
                }
                if (window.screen.width > 800) {
                    if (window.scrollY < lastScrollTop || window.scrollY < 500) {
                        navbarEle.classList.remove("navbar-disappear");
                    } else {
                        navbarEle.classList.add("navbar-disappear");
                    }
                }
                lastScrollTop = window.scrollY;
                if (window.scrollY >= 80) {
                    navbarEle.classList.add("active");
                } else {
                    navbarEle.classList.remove("active");
                }
                document.getElementById('navbar-menu').classList.remove('open');
                document.getElementById('navbar-menu-btn').classList.remove('open');
            }

            function openMenu() {
                let menuBtn = document.getElementById('navbar-menu-btn');
                let menu = document.getElementById('navbar-menu');
                menuBtn.classList.toggle('open');
                menu.classList.toggle('open');
            }

            // Attach event listeners
            window.addEventListener('scroll', changeBackground);

            const currentPath = window.location.pathname;
            const menuLinks = document.querySelectorAll('#navbar-menu a');
            menuLinks.forEach(link => {
                if (link.getAttribute('href') === currentPath) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });

            // Make openMenu available globally if needed
            window.openMenu = openMenu;
        });

    // Render Footer
    const footerUrl = window.location.pathname.endsWith('inicio.html') ? './common/footer.html' : '../common/footer.html';
    fetch(footerUrl)
        .then(res => res.text())
        .then(html => {
            document.getElementById("footer-container").innerHTML = html;
        });

    // Render Pop up
    const popupUrl = window.location.pathname.endsWith('inicio.html') ? './common/cookies.html' : '../common/cookies.html';
    fetch(popupUrl)
        .then(res => res.text())
        .then(html => {
            const popup = document.getElementById('cookies');
            if (!popup) return;
            popup.innerHTML = html;

            const acceptBtn = document.getElementById('accept-cookies');
            const ignoreBtn = document.getElementById('ignore-cookies');

            if (!localStorage.getItem('cookiesAccepted')) {
                popup.style.display = 'block';
            }

            if (acceptBtn) {
                acceptBtn.addEventListener('click', () => {
                    localStorage.setItem('cookiesAccepted', 'true');
                    popup.style.display = 'none';
                });
            }

            if (ignoreBtn) {
                ignoreBtn.addEventListener('click', () => {
                    popup.style.display = 'none';
                });
            }
        });
});

window.addEventListener('scroll', reveal);
window.addEventListener('DOMContentLoaded', () => {
    let currentLang = localStorage.getItem('language') || 'pt';
    applyTranslations(currentLang);
});


function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}

function goToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

function setLanguage(lang) {
    document.getElementById("pt").classList.remove('active');
    document.getElementById("en").classList.remove('active');
    document.getElementById("de").classList.remove('active');
    document.getElementById(lang).classList.add('active');
    localStorage.setItem('language', lang);
    applyTranslations(lang);
}

function applyTranslations(lang) {
    const copywriteUrl = window.location.pathname.endsWith('inicio.html') ? './common/copywrite.json' : '../common/copywrite.json';
    fetch(copywriteUrl)
        .then(res => res.json())
        .then(data => {
            translations = data;

            // NAVBAR
            if (document.getElementById('nav_about')) {
                document.getElementById('nav_about').textContent = translations[lang].navbar.about;
                document.getElementById('nav_products').textContent = translations[lang].navbar.products;
                document.getElementById('nav_clients').textContent = translations[lang].navbar.clients;
                document.getElementById('nav_contact').textContent = translations[lang].navbar.contact;
            }

            // HOME PAGE 
            if (document.getElementById('header_subtitle')) {
                document.getElementById('header_subtitle').textContent = translations[lang].home.header_subtitle;
            }
            if (document.getElementById('header_text')) {
                document.getElementById('header_text').innerHTML = translations[lang].home.header_text;
            }
            if (document.getElementById('header_button')) {
                document.getElementById('header_button').textContent = translations[lang].home.header_button;
            }
            if (document.getElementById('about_numbers_title')) {
                document.getElementById('about_numbers_title').textContent = translations[lang].home.about_numbers_title;
                document.getElementById('about_numbers_colaboradores').textContent = translations[lang].home.about_numbers.colaboradores;
                document.getElementById('about_numbers_fornos').textContent = translations[lang].home.about_numbers.fornos;
                document.getElementById('about_numbers_celulas').textContent = translations[lang].home.about_numbers.celulas;
                document.getElementById('about_numbers_centros').textContent = translations[lang].home.about_numbers.centros;
            }
            if (document.getElementById('vision_button')) {
                document.getElementById('vision_button').textContent = translations[lang].home.vision_button;
                document.getElementById('mission_button').textContent = translations[lang].home.mission_button;
                document.getElementById('values_button').textContent = translations[lang].home.values_button;
            }
            if (document.getElementById('vision_text')) {
                document.getElementById('vision_text').textContent = translations[lang].home.vision_text;
                document.getElementById('mission_text').textContent = translations[lang].home.mission_text;
                document.getElementById('value_1').textContent = translations[lang].home.values_list[0];
                document.getElementById('value_2').textContent = translations[lang].home.values_list[1];
                document.getElementById('value_3').textContent = translations[lang].home.values_list[2];
                document.getElementById('value_4').textContent = translations[lang].home.values_list[3];
            }
            if (document.getElementById('where_we_are_title')) {
                document.getElementById('where_we_are_title').textContent = translations[lang].home.where_we_are_title;
                document.getElementById('where_we_are_location').innerHTML = translations[lang].home.where_we_are_location;
                document.getElementById('partners_title').textContent = translations[lang].home.partners_title;
            }

            // ABOUT PAGE
            if (document.getElementById('about_header_title')) {
                document.getElementById('about_header_title').textContent = translations[lang].about.header_title;
            }
            if (document.getElementById('about_header_text_part1')) {
                document.getElementById('about_header_text_part1').innerHTML = translations[lang].about.header_text_part1;
            }
            if (document.getElementById('header-btn')) {
                document.getElementById('header-btn').textContent = translations[lang].about.header_button;
            }
            if (document.getElementById('about_section2_text')) {
                document.getElementById('about_section2_text').textContent = translations[lang].about.section2_text;
            }
            if (document.getElementById('about_section3_text1')) {
                document.getElementById('about_section3_text1').textContent = translations[lang].about.section3_text1;
            }
            if (document.getElementById('about_section3_text2')) {
                document.getElementById('about_section3_text2').textContent = translations[lang].about.section3_text2;
            }

            // PRODUCTS PAGE
            if (document.getElementById('products_header_title')) {
                document.getElementById('products_header_title').textContent = translations[lang].products.header_title;
                document.getElementById('products_header_text1').textContent = translations[lang].products.header_text1;
                document.getElementById('products_header_text2').innerHTML = translations[lang].products.header_text2;
                document.getElementById('header-btn').textContent = translations[lang].products.header_button;
            }

            if (document.getElementById('products_we_produce_title')) {
                document.getElementById('products_we_produce_title').textContent = translations[lang].products.we_produce_title;
                document.getElementById('products_we_produce_subtitle').textContent = translations[lang].products.we_produce_subtitle;
                document.getElementById('produce_example_1').textContent = translations[lang].products.we_produce_list[0];
                document.getElementById('produce_example_2').textContent = translations[lang].products.we_produce_list[1];
                document.getElementById('produce_example_3').textContent = translations[lang].products.we_produce_list[2];
                document.getElementById('produce_example_4').textContent = translations[lang].products.we_produce_list[3];
                document.getElementById('produce_example_5').textContent = translations[lang].products.we_produce_list[4];
            }

            if (document.getElementById('mobility_title')) {
                document.getElementById('mobility_title').textContent = translations[lang].products.e_mobility_title;
                document.getElementById('mobility_subtitle').textContent = translations[lang].products.e_mobility_subtitle;
                document.getElementById('mobility_application_1').textContent = translations[lang].products.e_mobility_list[0];
                document.getElementById('mobility_application_2').textContent = translations[lang].products.e_mobility_list[1];
                document.getElementById('mobility_application_3').textContent = translations[lang].products.e_mobility_list[2];
                document.getElementById('mobility_application_4').textContent = translations[lang].products.e_mobility_list[3];
            }

            if (document.getElementById('engineering_title')) {
                document.getElementById('engineering_title').textContent = translations[lang].products.engineering_title;
                document.getElementById('engineering_text').textContent = translations[lang].products.engineering_text;
            }

            if (document.getElementById('production_title')) {
                document.getElementById('production_title').textContent = translations[lang].products.production_title;
                document.getElementById('production_description').innerHTML = translations[lang].products.production_description;

                document.getElementById('galery_text_1').textContent = translations[lang].products.galery_texts[0];
                document.getElementById('galery_text_2').textContent = translations[lang].products.galery_texts[1];
                document.getElementById('galery_text_3').textContent = translations[lang].products.galery_texts[2];
            }


            // CLIENT PAGE
            if (document.getElementById('clients_header_title')) {
                document.getElementById('clients_header_title').textContent = translations[lang].clients.header_title;
                document.getElementById('clients_header_text').textContent = translations[lang].clients.header_text;
            }

            // SUSTAINABILITY PAGE
            if (document.getElementById("sustainability_goals_title")) {
                document.getElementById("sustainability_goals_title").textContent = translations[lang].sustainability.goals_title

                // Work Accidents
                document.getElementById("work_accidents_title").textContent = translations[lang].sustainability.work_accidents.title
                document.getElementById("zero_accidents").textContent =
                    translations[lang].sustainability.work_accidents.zero_accidents
                document.getElementById("legal_indicators").textContent =
                    translations[lang].sustainability.work_accidents.legal_indicators
                document.getElementById("frequency_index").textContent = translations[lang].sustainability.work_accidents.frequency
                document.getElementById("absenteeism").textContent = translations[lang].sustainability.work_accidents.absenteeism

                // Resource Management
                document.getElementById("resource_title").textContent = translations[lang].sustainability.resource_management.title
                document.getElementById("water_consumption").textContent =
                    translations[lang].sustainability.resource_management.water
                document.getElementById("waste_reduction").textContent = translations[lang].sustainability.resource_management.waste

                // Carbon Footprint
                document.getElementById("carbon_title").textContent = translations[lang].sustainability.carbon_footprint.title
                document.getElementById("scope1_reduction").textContent = translations[lang].sustainability.carbon_footprint.scope1
                document.getElementById("scope2_reduction").textContent = translations[lang].sustainability.carbon_footprint.scope2
                document.getElementById("scope3_reduction").textContent = translations[lang].sustainability.carbon_footprint.scope3
                document.getElementById("cfp_zero").textContent = translations[lang].sustainability.carbon_footprint.cfp
                document.getElementById("energy_efficiency").textContent = translations[lang].sustainability.carbon_footprint.energy

                // Supply Chain
                document.getElementById("supply_chain_title").textContent = translations[lang].sustainability.supply_chain.title
                document.getElementById("conflict_minerals").textContent = translations[lang].sustainability.supply_chain.minerals
                // SDG Section
                if (document.getElementById("sdg_8_content")) {
                    document.getElementById("sdg_8_content").textContent = translations[lang].sustainability.sdg_8
                    document.getElementById("sdg_12_content").textContent = translations[lang].sustainability.sdg_12
                    document.getElementById("sdg_13_content").textContent = translations[lang].sustainability.sdg_13
                    document.getElementById("sdg_16_content").textContent = translations[lang].sustainability.sdg_16
                }
            }

            // CONTACT PAGE
            if (document.getElementById('contact_header_title')) {
                document.getElementById('contact_header_title').textContent = translations[lang].contact.header_title;
                document.getElementById('contact_header_text').innerHTML = translations[lang].contact.header_text;
                document.getElementById('contact_header_email').textContent = translations[lang].contact.header_email;
                document.getElementById('contact_header_email').href = "mailto: " + translations[lang].contact.header_email;

                if (document.getElementById('name')) {
                    document.getElementById('name').setAttribute('placeholder', translations[lang].contact.form_name_placeholder);
                }
                if (document.getElementById('email')) {
                    document.getElementById('email').setAttribute('placeholder', translations[lang].contact.form_email_placeholder);
                }
                if (document.getElementById('subject')) {
                    document.getElementById('subject').setAttribute('placeholder', translations[lang].contact.form_subject_placeholder);
                }
                if (document.getElementById('message')) {
                    document.getElementById('message').setAttribute('placeholder', translations[lang].contact.form_message_placeholder);
                }
                if (document.getElementById('btn')) {
                    document.getElementById('btn').textContent = translations[lang].contact.form_button;
                }
                if (document.getElementById('form_success_message')) {
                    document.getElementById('form_success_message').textContent = translations[lang].contact.form_success_message;
                }
            }


            // FOOTER
            if (document.getElementById('footer_contacts_title')) {
                document.getElementById('footer_contacts_title').textContent = translations[lang].footer.contacts_title;
                document.getElementById('footer_contacts_address').innerHTML = translations[lang].footer.contacts_address;
                document.getElementById('footer_contacts_email_label').textContent = translations[lang].footer.contacts_email_label;
                document.getElementById('footer_contacts_phone').textContent = translations[lang].footer.contacts_phone;
                document.getElementById('footer_contacts_linkedin').textContent = translations[lang].footer.contacts_linkedin;

                document.getElementById('footer_menu_title').textContent = translations[lang].footer.footer_menu_title;
                document.getElementById('footer_menu_about').textContent = translations[lang].footer.footer_menu_about;
                document.getElementById('footer_menu_products').textContent = translations[lang].footer.footer_menu_products;
                document.getElementById('footer_menu_clients').textContent = translations[lang].footer.footer_menu_clients;
                document.getElementById('footer_menu_contact').textContent = translations[lang].footer.footer_menu_contact;

                document.getElementById('footer_powered_by').innerHTML = translations[lang].footer.powered_by;
                document.getElementById('footer_rights_reserved').textContent = translations[lang].footer.rights_reserved;
            }

            // COOKIES
            // Update cookie popup text dynamically
            document.getElementById('cookie-title').innerHTML = translations[lang].cookie_popup.title;
            document.getElementById('cookie-description').innerHTML = translations[lang].cookie_popup.description;
            document.getElementById('cookie-provider-title').innerHTML = translations[lang].cookie_popup.provider_title;
            document.getElementById('cookie-provider-text').innerHTML = translations[lang].cookie_popup.provider_text;
            document.getElementById('cookie-more-info').innerHTML = translations[lang].cookie_popup.more_info;
            document.getElementById('accept-cookies').textContent = translations[lang].cookie_popup.accept_button;
            document.getElementById('ignore-cookies').textContent = translations[lang].cookie_popup.ignore_button;
        })
        .catch(err => console.error('Error loading translations:', err));
}
