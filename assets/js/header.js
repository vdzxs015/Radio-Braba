// Script para controlar o menu mobile
document.addEventListener('DOMContentLoaded', function() {
    // Selecionar elementos
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    // Verificar se os elementos existem
    if (menuToggle && mobileMenu) {
        // Adicionar evento de clique ao botão do menu
        menuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            mobileMenu.classList.toggle('active');
            
            // Mudar o ícone dependendo do estado do menu
            const icon = menuToggle.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.classList.remove('fa-stream');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-stream');
            }
        });
        
        // Fechar o menu quando clicar em um link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-stream');
            });
        });
        
        // Fechar o menu ao clicar fora dele
        document.addEventListener('click', function(e) {
            // Verificar se o clique foi fora do menu e do botão do menu
            if (!mobileMenu.contains(e.target) && e.target !== menuToggle && !menuToggle.contains(e.target)) {
                mobileMenu.classList.remove('active');
                
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-stream');
            }
        });
    }
    
    // Manipular eventos de rolagem para o header
    const topBar = document.querySelector('.top-bar');
    const mobileBar = document.querySelector('.mobile-bar');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        // Para desktop
        if (topBar) {
            if (currentScrollY > 100) {
                topBar.style.backgroundColor = 'rgba(14, 16, 21, 1)';
                
                // Ocultar header ao rolar para baixo, mostrar ao rolar para cima
                if (currentScrollY > lastScrollY) {
                    topBar.style.transform = 'translateY(-100%)';
                } else {
                    topBar.style.transform = 'translateY(0)';
                }
            } else {
                topBar.style.backgroundColor = 'rgba(14, 16, 21, 0.9)';
                topBar.style.transform = 'translateY(0)';
            }
        }
        
        // Para mobile
        if (mobileBar) {
            if (currentScrollY > 50) {
                mobileBar.style.backgroundColor = 'rgba(14, 16, 21, 1)';
            } else {
                mobileBar.style.backgroundColor = 'rgba(14, 16, 21, 0.9)';
            }
        }
        
        lastScrollY = currentScrollY;
    });
    
    // Iniciar o player da rádio
    const radioPlayerInit = function() {
        if (window.lunaRadio) {
            window.lunaRadio("lunaradio", { 
                token: "XVtlZVhfIFtWKVVeW1dgZldlIFVhXyBUZA==",
                userinterface: "small",
                backgroundcolor: "rgba(14,16,21,0.5)",
                fontcolor: "#ffffff",
                hightlightcolor: "#fa225b",
                fontname: "",
                googlefont: "",
                fontratio: "0.4",
                radioname: "Kiss FM 92.9 - Rio de Janeiro",
                offlinetext: "Radio is offline",
                scroll: "true",
                scrollradioname: "left",
                scrolltitle: "right",
                scrollradionamespeed: "0.25",
                scrolltitlespeed: "0.25",
                coverimage: "assets/logo-kiss-border.svg",
                onlycoverimage: "false",
                coverstyle: "circle",
                usevisualizer: "real",
                visualizertype: "5",
                multicolorvisualizer: "false",
                color1: "#e66c35",
                color2: "#d04345",
                color3: "#85a752",
                color4: "#067dcc",
                visualizeropacity: "0.9",
                visualizerghost: "0.0",
                visualizerblur: "0",
                visualizerghostblur: "0",
                itunestoken: "1000lIPN",
                metadatatechnic: "directly",
                ownmetadataurl: "",
                streamurl: "https://cloud1.cdnseguro.com:9758",
                streamtype: "icecast2",
                icecastmountpoint: "/stream",
                radionomyid: "",
                radionomyapikey: "",
                radiojarid: "",
                radiocoid: "",
                shoutcastpath: "/stream",
                shoutcastid: "1",
                streamsuffix: "",
                metadatainterval: "20000",
                volume: "90",
                debug: "false",
                uselocalstorage: "false",
                autoplay: "false",
                displayliveicon: "true",
                displayvisualizericon: "true",
                usestreamcorsproxy: "false", 
                corsproxy: "",
            });
        }
    };
    
    // Verificar se o script do player da rádio já foi carregado
    if (window.lunaRadio) {
        radioPlayerInit();
    } else {
        // O script pode ser carregado dinamicamente se necessário
        const radioPlayerScript = document.createElement('script');
        radioPlayerScript.src = 'path/to/lunaradio.js'; // Substituir pelo caminho correto
        radioPlayerScript.onload = radioPlayerInit;
        document.head.appendChild(radioPlayerScript);
    }
});

// Footer functionality and animations

document.addEventListener('DOMContentLoaded', function() {
    // WhatsApp button animation
    const whatsappButton = document.querySelector('.whatsapp-button');
    
    if (whatsappButton) {
        // Add pulse animation
        function addPulseAnimation() {
            whatsappButton.classList.add('pulse');
            setTimeout(() => {
                whatsappButton.classList.remove('pulse');
            }, 1000);
        }
        
        // Run animation every 5 seconds
        setInterval(addPulseAnimation, 5000);
        
        // Add CSS for pulse animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse {
                0% {
                    transform: scale(1);
                    box-shadow: 0 0 0 0 rgba(184, 13, 13, 0.7);
                }
                
                70% {
                    transform: scale(1.1);
                    box-shadow: 0 0 0 10px rgba(184, 13, 13, 0);
                }
                
                100% {
                    transform: scale(1);
                    box-shadow: 0 0 0 0 rgba(184, 13, 13, 0);
                }
            }
            
            .whatsapp-button.pulse img {
                animation: pulse 1s;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Footer navigation animation on hover
    const footerLinks = document.querySelectorAll('.footer-nav a');
    
    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transition = 'color 0.3s ease, transform 0.3s ease';
            this.style.transform = 'translateX(5px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Social icons hover effect
    const socialIcons = document.querySelectorAll('.social-icons a');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease';
            this.style.transform = 'translateY(-5px)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Current year for copyright
    const yearElement = document.querySelector('.current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Back to top functionality
    const createBackToTopButton = () => {
        const backToTopBtn = document.createElement('div');
        backToTopBtn.classList.add('back-to-top');
        backToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
        document.body.appendChild(backToTopBtn);
        
        // Add CSS for back to top button
        const style = document.createElement('style');
        style.textContent = `
            .back-to-top {
                position: fixed;
                bottom: 20px;
                left: 20px;
                width: 40px;
                height: 40px;
                background-color: #B80D0D;
                color: #fff;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                opacity: 0;
                transition: opacity 0.3s ease, transform 0.3s ease;
                z-index: 99;
                transform: translateY(20px);
            }
            
            .back-to-top.visible {
                opacity: 1;
                transform: translateY(0);
            }
            
            .back-to-top:hover {
                transform: translateY(-5px);
            }
        `;
        document.head.appendChild(style);
        
        // Show/hide based on scroll position
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        // Scroll to top on click
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    };
    
    createBackToTopButton();
    
    // Initialize any third-party plugins for footer if needed
    // For example, if you're using a newsletter subscription plugin
    if (typeof initNewsletterForm === 'function') {
        initNewsletterForm();
    }
    
    // Handle station links hover effect
    const stationLinks = document.querySelectorAll('.station-item a');
    
    stationLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
            this.style.color = '#B80D0D';
            this.style.fontWeight = '600';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.color = '';
            this.style.fontWeight = '';
        });
    });
});