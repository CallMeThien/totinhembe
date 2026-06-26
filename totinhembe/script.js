document.addEventListener('DOMContentLoaded', () => {
    const screenWelcome = document.getElementById('screen-welcome');
    const screenProposal = document.getElementById('screen-proposal');
    const screenCelebration = document.getElementById('screen-celebration');
    const screenLetter = document.getElementById('screen-letter');
    const screenCertificate = document.getElementById('screen-certificate');

    const btnReady = document.getElementById('btn-ready');
    const btnYes = document.getElementById('btn-yes');
    const btnNo = document.getElementById('btn-no');
    const btnNotYet = document.getElementById('btn-not-yet');
    const btnAcceptProposal = document.getElementById('btn-accept-proposal');
    const btnConfirmCert = document.getElementById('btn-confirm-cert');
    const btnClearSig = document.getElementById('btn-clear-sig');
    
    const successOverlay = document.getElementById('success-overlay');
    const btnDownloadCert = document.getElementById('btn-download-cert');
    const btnClosePopup = document.getElementById('btn-close-popup');

    const heartContainer = document.getElementById('heart-container');
    const letterLinesContainer = document.getElementById('letter-lines-container');
    
    // Audio Player setup
    const bgMusic = document.getElementById('bg-music');
    const musicToggle = document.getElementById('music-toggle');
    let isMusicPlaying = false;

    // Base64 Signature of Thien (Injected by script)
    const thienSignatureBase64 = "data:image/jpeg;base64,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";

    // 1. HEART RAIN GENERATOR
    const heartEmojis = ['💖', '❤️', '💕', '🌸', '💝', '😻', '💓', '💗'];
    
    function createHeartParticle() {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerText = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        
        const randomX = Math.random() * 100;
        const randomSize = Math.random() * 20 + 15;
        const randomDuration = Math.random() * 4 + 4;
        const randomDelay = Math.random() * 2;
        
        heart.style.left = `${randomX}%`;
        heart.style.fontSize = `${randomSize}px`;
        heart.style.animationDuration = `${randomDuration}s`;
        heart.style.animationDelay = `${randomDelay}s`;
        heart.style.transform = `rotate(${Math.random() * 360}deg)`;

        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, (randomDuration + randomDelay) * 1000);
    }

    let heartRainInterval = setInterval(createHeartParticle, 400);

    // 2. SCREEN TRANSITIONS
    function transitionScreen(fromScreen, toScreen, callback) {
        fromScreen.style.opacity = '0';
        fromScreen.style.transform = 'scale(0.9) rotateY(10deg)';
        
        setTimeout(() => {
            fromScreen.classList.remove('active');
            fromScreen.classList.add('hidden');
            
            toScreen.classList.remove('hidden');
            toScreen.offsetHeight; // Reflow
            toScreen.classList.add('active');
            
            if (callback) callback();
        }, 500);
    }

    btnReady.addEventListener('click', () => {
        transitionScreen(screenWelcome, screenProposal);
    });

    btnYes.addEventListener('click', () => {
        transitionScreen(screenProposal, screenCelebration, () => {
            clearInterval(heartRainInterval);
            heartRainInterval = setInterval(createHeartParticle, 150);
            initConfetti();
        });
    });

    // 3. RUNAWAY NO BUTTON LOGIC
    function moveNoButton() {
        const btnNoRect = btnNo.getBoundingClientRect();
        const margin = 20;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        const maxX = viewportWidth - btnNoRect.width - margin;
        const maxY = viewportHeight - btnNoRect.height - margin;
        
        let newX = Math.random() * maxX;
        let newY = Math.random() * maxY;
        
        btnNo.style.position = 'fixed';
        btnNo.style.left = `${newX}px`;
        btnNo.style.top = `${newY}px`;
        btnNo.style.margin = '0';
    }

    btnNo.addEventListener('mouseover', moveNoButton);
    btnNo.addEventListener('mouseenter', moveNoButton);
    btnNo.addEventListener('touchstart', (e) => {
        e.preventDefault();
        moveNoButton();
    });
    btnNo.addEventListener('click', (e) => {
        e.preventDefault();
        moveNoButton();
    });

    // 4. HEARTFELT LETTER TYPING EFFECT
    const letterLines = [
        "Nhi à,...",
        "Anh xin lỗi vì làm điều này quá trễ, anh biết em bé đã rất mong chờ nó, xin lỗi vì làm em bé thất vọng.",
        "Anh luôn quên những điều mà em nói,",
        "Anh luôn hứa trước mà hong làm được,",
        "Anh không thể luôn ở bên để chăm sóc những lúc em bé cần,",
        "Anh cũng không thể an ủi những lúc em khóc,",
        "Anh cũng không thể chọc cho em cười,",
        "Anh hong giàu có,",
        "Anh bé cũng hong tinh tế,",
        "Nhưng mà...",
        "Anh bé yêu em thật lòng và luôn cố gắng để hoàn thiện và trở thành người mà em mong muốn...",
        "Anh sẽ note lại để không quên những gì em nói,",
        "Anh sẽ cố gắng hoàn thành toàn bộ lời hứa đã nói ra,",
        "Sau này, nếu được, hãy cho phép anh ở bên em để có thể chăm sóc cho em,",
        "Anh sẽ học hỏi những điều tốt để có thể an ủi em khi em cần, trở thành bờ vai của em,",
        "Chọc cho em bé cười hong khó, anh sẽ làm được,",
        "Anh sẽ chăm chỉ làm việc để kiếm thật nhìu tiền để nuôi em, cho em mua đồ mà hong cần nhìn giá,",
        "Anh sẽ tinh tế hơn, nghĩ tới em bé nhìu hơn,",
        "Em bé hãy cho anh một cơ hội để làm những điều này trong tương lai GẦN nhé!",
        "Em bé suy nghĩ thật kĩ và cho anh bé một cơ hội nhé ạ...",
        "Nếu đồng ý thì click vào đây đi mò"
    ];

    btnNotYet.addEventListener('click', () => {
        transitionScreen(screenCelebration, screenLetter, () => {
            // Start romance music
            playMusic();
            
            // Start displaying letter lines
            revealLetterLines();
        });
    });

    function playMusic() {
        bgMusic.play().then(() => {
            isMusicPlaying = true;
            musicToggle.classList.remove('muted');
            document.querySelector('.music-status-text').innerText = 'Đang phát nhạc...';
        }).catch(err => {
            console.log("Music autoplay prevented. Waiting for click.");
        });
    }

    musicToggle.addEventListener('click', () => {
        if (isMusicPlaying) {
            bgMusic.pause();
            isMusicPlaying = false;
            musicToggle.classList.add('muted');
            document.querySelector('.music-status-text').innerText = 'Đã tắt nhạc';
        } else {
            bgMusic.play();
            isMusicPlaying = true;
            musicToggle.classList.remove('muted');
            document.querySelector('.music-status-text').innerText = 'Đang phát nhạc...';
        }
    });

    function revealLetterLines() {
        letterLinesContainer.innerHTML = '';
        btnAcceptProposal.classList.add('hidden');
        
        let index = 0;
        
        function showNextLine() {
            if (index < letterLines.length) {
                const p = document.createElement('p');
                p.classList.add('letter-line');
                p.innerText = letterLines[index];
                
                // Highlight romantic turning points
                if (letterLines[index].startsWith("Nhưng mà...") || letterLines[index].includes("Yêu em bé") || letterLines[index].includes("đến vũ trụ") || letterLines[index].includes("cơ hội")) {
                    p.classList.add('highlight');
                }
                
                letterLinesContainer.appendChild(p);
                
                // Trigger transition
                setTimeout(() => {
                    p.classList.add('reveal');
                    letterLinesContainer.scrollTop = letterLinesContainer.scrollHeight;
                }, 50);
                
                // Set typing delay based on text length for a natural reading flow
                const textLength = letterLines[index].length;
                const baseDelay = 1500; // minimum reading delay
                const charDelay = textLength * 45; // 45ms per character
                const totalDelay = Math.min(5000, Math.max(2500, baseDelay + charDelay));
                
                index++;
                setTimeout(showNextLine, totalDelay);
            } else {
                // Finished typing all lines. Show the accept button!
                setTimeout(() => {
                    btnAcceptProposal.classList.remove('hidden');
                    btnAcceptProposal.scrollIntoView({ behavior: 'smooth' });
                }, 1000);
            }
        }
        
        setTimeout(showNextLine, 500);
    }

    // 5. SIGNATURE PAD AND CERTIFICATE SETUP
    const imgThienSig = document.getElementById('img-thien-sig');
    const canvasNhi = document.getElementById('nhi-signature-pad');
    const ctxNhi = canvasNhi.getContext('2d');

    btnAcceptProposal.addEventListener('click', () => {
        transitionScreen(screenLetter, screenCertificate, () => {
            initSignatures();
        });
    });

    function initSignatures() {
        // Setup Nhi's drawing pad
        setupDrawingPad(canvasNhi, ctxNhi);
    }

    function setupDrawingPad(canvas, ctx) {
        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;

        ctx.strokeStyle = '#222'; // Dark ink color
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = 2.5;

        function getMousePos(e) {
            const rect = canvas.getBoundingClientRect();
            // Handle touch
            if (e.touches && e.touches.length > 0) {
                return {
                    x: e.touches[0].clientX - rect.left,
                    y: e.touches[0].clientY - rect.top
                };
            }
            // Handle mouse
            return {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        }

        function startDrawing(e) {
            isDrawing = true;
            const pos = getMousePos(e);
            lastX = pos.x;
            lastY = pos.y;
        }

        function draw(e) {
            if (!isDrawing) return;
            const pos = getMousePos(e);
            
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
            
            lastX = pos.x;
            lastY = pos.y;
        }

        function stopDrawing() {
            isDrawing = false;
        }

        // Mouse Events
        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mouseleave', stopDrawing);

        // Touch Events (Mobile)
        canvas.addEventListener('touchstart', (e) => {
            startDrawing(e);
            // Prevent scrolling when drawing on touch screen
            if (e.target === canvas) {
                e.preventDefault();
            }
        }, { passive: false });
        canvas.addEventListener('touchmove', (e) => {
            draw(e);
            if (e.target === canvas) {
                e.preventDefault();
            }
        }, { passive: false });
        canvas.addEventListener('touchend', stopDrawing);
        
        // Clear signature button
        btnClearSig.addEventListener('click', () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        });
    }

    // Check if the canvas is blank
    function isCanvasBlank(canvas) {
        const context = canvas.getContext('2d');
        const buffer = new Uint32Array(
            context.getImageData(0, 0, canvas.width, canvas.height).data.buffer
        );
        return !buffer.some(color => color !== 0);
    }

    // Confirm certificate click
    btnConfirmCert.addEventListener('click', () => {
        if (isCanvasBlank(canvasNhi)) {
            alert('Em bé Nhi chưa ký tên vào đây nè 🌸 Hãy vẽ chữ ký vào ô ký tên của em nhé!');
            return;
        }
        
        // Active popup overlay
        successOverlay.classList.remove('hidden');
        successOverlay.offsetHeight;
        successOverlay.classList.add('active');
        
        // Trigger full screen celebration
        initConfetti();
    });

    btnClosePopup.addEventListener('click', () => {
        // Close success popup
        successOverlay.classList.remove('active');
        setTimeout(() => {
            successOverlay.classList.add('hidden');
            // Show final love confirmation question
            showFinalQuestion();
        }, 500);
    });

    // ── FINAL LOVE QUESTION LOGIC ──
    const finalQuestionOverlay = document.getElementById('final-question-overlay');
    const finalHappyOverlay    = document.getElementById('final-happy-overlay');
    const btnFinalYes          = document.getElementById('btn-final-yes');
    const btnFinalNo           = document.getElementById('btn-final-no');

    let noClickCount = 0;

    function showFinalQuestion() {
        finalQuestionOverlay.classList.remove('hidden');
        finalQuestionOverlay.offsetHeight;
        finalQuestionOverlay.classList.add('active');
    }

    btnFinalYes.addEventListener('click', () => {
        // Nhi đồng ý! Show happy screen
        finalQuestionOverlay.classList.remove('active');
        setTimeout(() => {
            finalQuestionOverlay.classList.add('hidden');
            finalHappyOverlay.classList.remove('hidden');
            finalHappyOverlay.offsetHeight;
            finalHappyOverlay.classList.add('active');
            // Extra heart rain for celebration
            clearInterval(heartRainInterval);
            heartRainInterval = setInterval(createHeartParticle, 100);
        }, 400);
    });

    btnFinalNo.addEventListener('click', () => {
        noClickCount++;

        if (noClickCount === 1) {
            // First "Không" → change to "em chắc chứ? 😢"
            btnFinalNo.textContent = 'em chắc chứ? 😢';
            btnFinalNo.style.borderColor = '#ffb3c6';
            btnFinalNo.style.color = '#ff477e';
        } else if (noClickCount === 2) {
            // Second click → show sad message, both buttons become "Có"
            btnFinalNo.textContent = 'Huhu anh bé thương em nhất thiệt mà 🥺';
            btnFinalNo.style.fontSize = '0.85rem';
            btnFinalNo.style.pointerEvents = 'none'; // Disable briefly
            btnFinalNo.style.opacity = '0.7';

            // After a short delay, both buttons become "Có"
            setTimeout(() => {
                btnFinalYes.textContent = 'Có ạ 💖';
                btnFinalNo.textContent = 'Có chứ! 💖';
                btnFinalNo.classList.remove('btn-secondary');
                btnFinalNo.classList.add('btn-primary', 'pulse-animation');
                btnFinalNo.style.pointerEvents = 'auto';
                btnFinalNo.style.opacity = '1';
                btnFinalNo.style.fontSize = '';
                btnFinalNo.style.color = '';

                // Now both buttons lead to happy screen
                btnFinalNo.addEventListener('click', () => {
                    btnFinalYes.click();
                }, { once: true });
            }, 1800);
        }
    });

    // 6. CERTIFICATE PNG DOWNLOAD RENDERER
    btnDownloadCert.addEventListener('click', () => {
        const dlCanvas = document.getElementById('download-render-canvas');
        const dlCtx = dlCanvas.getContext('2d');
        
        // --- Helper: word wrap text ---
        function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
            const words = text.split(' ');
            let line = '';
            let currentY = y;
            for (let i = 0; i < words.length; i++) {
                const testLine = line + words[i] + ' ';
                const metrics = ctx.measureText(testLine);
                if (metrics.width > maxWidth && i > 0) {
                    ctx.fillText(line.trim(), x, currentY);
                    line = words[i] + ' ';
                    currentY += lineHeight;
                } else {
                    line = testLine;
                }
            }
            ctx.fillText(line.trim(), x, currentY);
            return currentY + lineHeight;
        }

        // Size the download canvas high-res
        dlCanvas.width = 1200;
        dlCanvas.height = 960;
        
        // Draw background gradient
        const grad = dlCtx.createLinearGradient(0, 0, 1200, 960);
        grad.addColorStop(0, '#ffe5ec');
        grad.addColorStop(0.5, '#ffc2d1');
        grad.addColorStop(1, '#ffb3c6');
        dlCtx.fillStyle = grad;
        dlCtx.fillRect(0, 0, 1200, 960);
        
        // Draw white card background
        dlCtx.fillStyle = '#ffffff';
        drawRoundedRect(dlCtx, 50, 50, 1100, 860, 30);
        dlCtx.fill();
        
        // Double border
        dlCtx.strokeStyle = '#ff7096';
        dlCtx.lineWidth = 12;
        drawRoundedRect(dlCtx, 65, 65, 1070, 830, 22);
        dlCtx.stroke();
        
        dlCtx.strokeStyle = '#ffb3c6';
        dlCtx.lineWidth = 3;
        drawRoundedRect(dlCtx, 85, 85, 1030, 790, 15);
        dlCtx.stroke();
        
        // Header
        dlCtx.textAlign = 'center';
        dlCtx.fillStyle = '#ff477e';
        dlCtx.font = 'bold 44px "Playfair Display", serif';
        dlCtx.fillText('BẢN MINH CHỨNG TÌNH YÊU', 600, 165);
        
        dlCtx.fillStyle = '#855861';
        dlCtx.font = 'italic 22px "Fredoka", sans-serif';
        dlCtx.fillText('Ghi nhận cam kết tình yêu vĩnh cửu và ngọt ngào', 600, 208);
        
        // Date
        dlCtx.fillStyle = '#ff477e';
        dlCtx.font = 'bold 22px "Fredoka", sans-serif';
        dlCtx.fillText('Hôm nay, ngày 27 tháng 06 năm 2026', 600, 268);
        
        // Couple Names
        dlCtx.fillStyle = '#4a282f';
        dlCtx.font = 'bold 36px "Playfair Display", serif';
        dlCtx.fillText('Đỗ Đức Thiện   ❤️   Trương Hồ Thảo Nhi', 600, 330);
        
        // Rules Card Background
        dlCtx.fillStyle = '#fff5f7';
        drawRoundedRect(dlCtx, 130, 370, 940, 230, 15);
        dlCtx.fill();
        dlCtx.strokeStyle = '#ffb3c6';
        dlCtx.lineWidth = 2;
        dlCtx.stroke();
        
        // Rules content (max width = 880px from x=160)
        const maxRuleWidth = 880;
        dlCtx.textAlign = 'left';
        dlCtx.fillStyle = '#ff477e';
        dlCtx.font = 'bold 20px "Fredoka", sans-serif';
        dlCtx.fillText('Các điều khoản tình yêu:', 160, 408);
        
        dlCtx.fillStyle = '#4a282f';
        dlCtx.font = '17px "Fredoka", sans-serif';
        
        let ruleY = 440;
        ruleY = wrapText(dlCtx, '🌸 Điều 1: Anh bé (Thiện) hứa sẽ note lại để không quên những gì em bé nói, hoàn thành toàn bộ lời hứa, nỗ lực kiếm tiền nuôi em, và luôn chăm sóc em bé mỗi ngày.', 160, ruleY, maxRuleWidth, 26);
        ruleY = wrapText(dlCtx, '🌸 Điều 2: Em bé Nhi đồng ý cho Anh bé cơ hội được che chở, yêu thương, dỗ dành mỗi khi khóc, và mang lại nụ cười cho em bé.', 160, ruleY + 4, maxRuleWidth, 26);
        wrapText(dlCtx, '🌸 Điều 3: Hai bên cam kết nắm tay nhau đi qua mọi giông bão, chia sẻ ngọt bùi và cùng nhau xây dựng tương lai hạnh phúc.', 160, ruleY + 4, maxRuleWidth, 26);
        
        // ── Signatures (clearly below the rules box which ends at y=600) ──
        const sigLabelY = 645;
        const sigImgY   = 665;
        const sigImgH   = 90;
        const sigNameY  = 775;

        // Side A: Thien
        dlCtx.textAlign = 'center';
        dlCtx.fillStyle = '#855861';
        dlCtx.font = 'bold 18px "Fredoka", sans-serif';
        dlCtx.fillText('Bên A (Anh bé)', 340, sigLabelY);
        
        // Draw a thin separator line above signature
        dlCtx.strokeStyle = '#ffb3c6';
        dlCtx.lineWidth = 1;
        dlCtx.beginPath();
        dlCtx.moveTo(215, sigLabelY - 8);
        dlCtx.lineTo(465, sigLabelY - 8);
        dlCtx.stroke();
        
        // Draw Thien's signature keeping full aspect ratio (659x534 → fit in 250x sigImgH)
        const thienAspect = 659 / 534;
        const thienDrawH = sigImgH;
        const thienDrawW = Math.round(thienDrawH * thienAspect);
        dlCtx.drawImage(imgThienSig, 20, 80, 620, 420, 340 - thienDrawW / 2, sigImgY, thienDrawW, thienDrawH);
        
        dlCtx.fillStyle = '#ff477e';
        dlCtx.font = '26px "Pacifico", cursive';
        dlCtx.fillText('Đỗ Đức Thiện', 340, sigNameY);
        
        // Side B: Nhi
        // Get canvas size for aspect ratio
        const nhiW = canvasNhi.width;
        const nhiH = canvasNhi.height;
        const nhiAspect = nhiW / nhiH;
        const nhiDrawH = sigImgH;
        const nhiDrawW = Math.round(nhiDrawH * nhiAspect);

        dlCtx.fillStyle = '#855861';
        dlCtx.font = 'bold 18px "Fredoka", sans-serif';
        dlCtx.fillText('Bên B (Em bé)', 860, sigLabelY);
        
        dlCtx.strokeStyle = '#ffb3c6';
        dlCtx.lineWidth = 1;
        dlCtx.beginPath();
        dlCtx.moveTo(735, sigLabelY - 8);
        dlCtx.lineTo(985, sigLabelY - 8);
        dlCtx.stroke();
        
        dlCtx.drawImage(canvasNhi, 860 - nhiDrawW / 2, sigImgY, nhiDrawW, nhiDrawH);
        
        dlCtx.fillStyle = '#ff477e';
        dlCtx.font = '26px "Pacifico", cursive';
        dlCtx.fillText('Trương Hồ Thảo Nhi', 860, sigNameY);
        
        // Trigger download
        try {
            const dataURL = dlCanvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = 'chung_nhan_tinh_yeu_thien_nhi.png';
            link.href = dataURL;
            link.click();
        } catch (err) {
            console.error(err);
            alert('Bé hãy chụp màn hình lại chứng nhận nhé! 💖 Trình duyệt bị giới hạn tải ảnh offline.');
        }
    });

    // Helper to draw rounded rectangle in Canvas
    function drawRoundedRect(ctx, x, y, width, height, radius) {
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
    }

    // 4. CONFETTI EFFECT
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    
    let confettiParticles = [];
    const colors = ['#ff477e', '#ff7096', '#ffb3c6', '#ffd166', '#06d6a0', '#118ab2'];

    function resizeCanvas() {
        const cardRect = screenCelebration.getBoundingClientRect();
        canvas.width = cardRect.width;
        canvas.height = cardRect.height;
    }

    class Confetti {
        constructor() {
            this.x = canvas.width / 2;
            this.y = canvas.height - 20;
            this.size = Math.random() * 8 + 5;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            
            const angle = Math.random() * Math.PI - Math.PI; 
            const speed = Math.random() * 12 + 8;
            this.vx = Math.cos(angle) * speed;
            this.vy = Math.sin(angle) * speed;
            
            this.gravity = 0.35;
            this.opacity = 1;
            this.fade = Math.random() * 0.015 + 0.01;
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 10 - 5;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.vy += this.gravity;
            this.vx *= 0.98;
            this.opacity -= this.fade;
            this.rotation += this.rotationSpeed;
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate((this.rotation * Math.PI) / 180);
            ctx.globalAlpha = Math.max(0, this.opacity);
            ctx.fillStyle = this.color;
            
            if (Math.random() > 0.5) {
                ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            } else {
                ctx.beginPath();
                ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.restore();
        }
    }

    let confettiAnimationId;
    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        if (confettiParticles.length < 150 && Math.random() < 0.4) {
            confettiParticles.push(new Confetti());
        }

        confettiParticles = confettiParticles.filter(p => p.opacity > 0);

        confettiParticles.forEach(p => {
            p.update();
            p.draw();
        });

        confettiAnimationId = requestAnimationFrame(animateConfetti);
    }

    function initConfetti() {
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        for (let i = 0; i < 80; i++) {
            confettiParticles.push(new Confetti());
        }
        
        if (!confettiAnimationId) {
            animateConfetti();
        }
    }
});
