        /**
         * Fungsi untuk menyuntikkan (inject) tombol WhatsApp ke dalam DOM.
         */
        function injectWhatsAppButton() {
            const container = document.getElementById('whatsapp-container');
            if (!container) return;

            const waLink = "https://wa.me/6285711374861?text=Halo%2C%20saya%20tertarik%20dengan%20info%20script%20downloader%20ini.";
            
            const buttonHtml = `
                <div class="whatsapp-fixed-btn">
                    <a href="${waLink}" 
                       class="btn btn-whatsapp-custom" 
                       target="_blank" 
                       rel="noopener noreferrer">
                        <i class="fab fa-whatsapp me-2"></i> info script html
                    </a>
                </div>
            `;
            
            container.innerHTML = buttonHtml;
        }

        // Fungsi ini dipanggil di atribut onload pada tag <body>
