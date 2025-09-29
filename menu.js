        /**
         * Fungsi untuk menyuntikkan (inject) item menu navigasi ke dalam navbar.
         */
        function injectNavItems() {
            const navUl = document.getElementById('main-navbar-nav');
            if (!navUl) return;

            const menuItems = [
                { id: 'play-musik', text: 'PLAY MUSIK', active: true },
                { id: 'download-tiktok', text: 'DOWNLOAD TIKTOK', active: false },
                { id: 'download-capcut', text: 'DOWNLOAD CAPCUT', active: false },
                { id: 'download-pinterest', text: 'DOWNLOAD PINTEREST', active: false }
            ];

            let htmlContent = '';
            
            menuItems.forEach(item => {
                const activeClass = item.active ? ' active' : '';
                htmlContent += `
                    <li class="nav-item">
                        <a class="nav-link${activeClass}" href="#" 
                            data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                            onclick="showContent('${item.id}', this)">${item.text}</a>
                    </li>
                `;
            });

            navUl.innerHTML = htmlContent;
        }
