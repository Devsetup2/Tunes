document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const musicContainer = document.querySelector('.music-container');
    const musicCard = document.querySelector('.music-card');
    const musicImage = document.querySelector('.music-image');
    const songTitle = document.querySelector('.song-title');
    const artist = document.querySelector('.artist');
    const year = document.querySelector('.year');
    const playPauseBtn = document.querySelector('.play-pause');
    const likeBtn = document.querySelector('.like');
    const dislikeBtn = document.querySelector('.dislike');
    const audioPlayer = document.getElementById('audio-player');
    const themeToggle = document.querySelector('.theme-toggle');
    const favoritesBtn = document.querySelector('.favorites-btn');
    const favoritesCount = document.querySelector('.favorites-count');
    const favoritesSidebar = document.querySelector('.favorites-sidebar');
    const closeSidebar = document.querySelector('.close-sidebar');
    const favoritesList = document.querySelector('.favorites-list');
    const overlay = document.querySelector('.overlay');
    const body = document.body;
    const progressBar = document.querySelector('.progress-bar');
    const progress = document.querySelector('.progress');
    const currentTimeEl = document.querySelector('.current-time');
    const durationEl = document.querySelector('.duration');

    // Music data
    const musicData = [
         {
           
            title: "Fire",
            artist: "Muammer & Suno",
            year: "2023",
            image: "https://i.ytimg.com/vi/6uKO4zvnND4/maxresdefault.jpg",
            audio: "https://devsetup2.github.io/Tunes/Fire.mp3"
        },
        {
          
            title: "Blinding Lights",
            artist: "The Weeknd",
            year: "2020",
            image: "https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452",
            audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        },
        {
           
            title: "Save Your Tears",
            artist: "The Weeknd",
            year: "2020",
            image: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
            audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
        },
        {
            
            title: "Stay",
            artist: "The Kid LAROI, Justin Bieber",
            year: "2021",
            image: "https://i.scdn.co/image/ab67616d0000b273c5653f9038e42efad2f8a266",
            audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        {
            
            title: "good 4 u",
            artist: "Olivia Rodrigo",
            year: "2021",
            image: "https://i.scdn.co/image/ab67616d0000b2731d7e26119d1a6648e34dc51c",
            audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
        },
        {
            
            title: "Levitating",
            artist: "Dua Lipa",
            year: "2020",
            image: "https://t2.genius.com/unsafe/258x258/https%3A%2F%2Fimages.genius.com%2F396ec949e9108207f0fc1ee7595b7da6.1000x1000x1.png",
            audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
        },
        {
          
            title: "What Kind Of Life",
            artist: "Muammer Altunkan",
            year: "2024",
            image: "https://devsetup2.github.io/Tunes/WhatKindLife.webp",
            audio: "https://devsetup2.github.io/Tunes/whatkindlife.mp3"
        },
        {
            
            title: "My Years Without You",
            artist: "Muammer Altunkan",
            year: "2024",
            image: "https://devsetup2.github.io/Tunes/myyearswithoutyou.webp",
            audio: "https://devsetup2.github.io/Tunes/myyearswithoutyou.mp3"
        },
        {
           
            title: "Summer Time",
            artist: "Muammer Altunkan",
            year: "2024",
            image: "https://devsetup2.github.io/Tunes/summertime.webp",
            audio: "https://devsetup2.github.io/Tunes/summertime.mp3"
        },
        {
           
            title: "Whispers Of Autumn",
            artist: "Muammer Altunkan",
            year: "2024",
            image: "https://devsetup2.github.io/Tunes/Whispers%20of%20Autumn.webp",
            audio: "https://devsetup2.github.io/Tunes/whispersofautumn.mp3"
        },
        {
          
            title: "Lazy Tired",
            artist: "Muammer Altunkan",
            year: "2024",
            image: "https://devsetup2.github.io/Tunes/Lazy%20Tired.webp",
            audio: "https://devsetup2.github.io/Tunes/lazytired.mp3"
        },
        {
          
            title: "Deceived",
            artist: "Muammer Altunkan",
            year: "2024",
            image: "https://devsetup2.github.io/Tunes/Deceived.webp",
            audio: "https://devsetup2.github.io/Tunes/deceived.mp3"
        },
        {
            
            title: "Whispers Of Autumn",
            artist: "Muammer Altunkan",
            year: "2024",
            image: "https://devsetup2.github.io/Tunes/Dance%20Alone.webp",
            audio: "https://devsetup2.github.io/Tunes/dancealone.mp3"
        },
         {
            
            title: "Harley Bird",
            artist: "Jordan Schor",
            year: "2017",
            image: "https://raw.githubusercontent.com/AAdewunmi/Music-Player-App/refs/heads/master/images/music-1.jpg",
            audio: "https://devsetup2.github.io/Tunes/harleybird.mp3"
        },
        {
           
            title: "Anywhere",
            artist: "Ikson",
            year: "2018",
            image: "https://github.com/AAdewunmi/Music-Player-App/blob/master/images/music-2.jpg?raw=true",
            audio: "https://devsetup2.github.io/Tunes/anywhere.mp3"
        },
        {
           
            title: "ASpark İn Havana",
            artist: "Muammer & Suno",
            year: "2025",
            image: "https://devsetup2.github.io/Tunes/havana.jpeg",
            audio: "asparkinhavana.mp3"
        },
        {
          
            title: "Come On Push",
            artist: "Alesandra",
            year: "2025",
            image: "https://devsetup2.github.io/Tunes/sexywomen.jpg",
            audio: "comeonpush.mp3"
        },
        {
          
            title: "",
            artist: "",
            year: "",
            image: "https://devsetup2.github.io/Tunes/Tunezz bg.png",
            audio: ""
        },
        {
           
            title: "",
            artist: "",
            year: "",
            image: "",
            audio: ""
        },
        {
           
            title: "",
            artist: "",
            year: "",
            image: "https://devsetup2.github.io/Tunes/Tunezz bg.png",
            audio: ""
        },
        {
           
            title: "",
            artist: "",
            year: "",
            image: "https://devsetup2.github.io/Tunes/Tunezz bg.png",
            audio: ""
        },
        
    ];

    let currentSongIndex = 0;
    let isPlaying = false;
    let favorites = JSON.parse(localStorage.getItem('tunezz_favorites')) || [];

    // Initialize the app
    function init() {
        loadSong(currentSongIndex);
        setupSwipe();
        setupEventListeners();
        updateFavoritesCount();
        renderFavoritesList();
    }

    // Load song
    function loadSong(index) {
        // Index'in geçerli bir aralıkta olduğundan emin ol
        if (index < 0 || index >= musicData.length) {
            console.error("Invalid song index:", index);
            currentSongIndex = 0; // Hatalı durumda ilk şarkıya dön
            index = 0;
        }
        const song = musicData[index];

        // Şarkı verilerinin eksik olup olmadığını kontrol et
        if (!song || !song.image || !song.title || !song.artist || !song.year || !song.audio) {
            console.error("Song data is incomplete for index:", index, song);
            // Eksik veri durumunda bir sonraki şarkıya geçmeyi deneyebilir veya varsayılan bir durum ayarlayabilirsiniz.
            // Şimdilik sadece konsola hata basıyoruz ve bir sonraki şarkıya geçiyoruz.
            if (musicData.length > 1) { // Birden fazla şarkı varsa
                nextSong(); // Bir sonraki şarkıyı yükle
            } else {
                // Tek şarkı varsa ve o da hatalıysa, arayüzü temizle veya bir hata mesajı göster
                musicImage.style.backgroundImage = `url('')`;
                songTitle.textContent = "Şarkı Yüklenemedi";
                artist.textContent = "";
                year.textContent = "";
                audioPlayer.src = "";
                durationEl.textContent = '0:00';
            }
            return;
        }


        musicImage.style.backgroundImage = `url(${song.image})`;
        songTitle.textContent = song.title;
        artist.textContent = song.artist;
        year.textContent = song.year;
        audioPlayer.src = song.audio;

        // Update like button state
        const isFavorite = favorites.some(fav => fav.id === song.id);
        likeBtn.classList.toggle('active', isFavorite);

        // Preload next image for smoother transitions
        if (index < musicData.length - 1) {
            const nextSongData = musicData[index + 1];
            if (nextSongData && nextSongData.image) { // Bir sonraki şarkı ve resmi varsa
                 const img = new Image();
                 img.src = nextSongData.image;
            }
        }

        // Reset progress bar
        progressBar.style.width = '0%';
        progress.value = 0;
        currentTimeEl.textContent = '0:00';

        // Set duration after metadata loads
        audioPlayer.onloadedmetadata = function() { // 'addEventListener' yerine doğrudan atama
            durationEl.textContent = formatTime(audioPlayer.duration);
        };
    }

    // Format time (seconds to MM:SS)
    function formatTime(seconds) {
        if (isNaN(seconds) || seconds < 0) return '0:00'; // Geçersiz süre için
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Update progress bar
    function updateProgress(e) {
        const { duration, currentTime } = e.srcElement;
        if (duration > 0) { // Süre 0'dan büyükse ilerlemeyi güncelle
            const progressPercent = (currentTime / duration) * 100;
            progressBar.style.width = `${progressPercent}%`;
            progress.value = progressPercent;
        }
        currentTimeEl.textContent = formatTime(currentTime);
    }

    // Set progress when clicked on progress bar
    function setProgress(e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audioPlayer.duration;
        if (duration > 0) { // Süre 0'dan büyükse
            audioPlayer.currentTime = (clickX / width) * duration;
        }
    }

    // Play/pause toggle
    function togglePlay() {
        if (!audioPlayer.src || audioPlayer.src === window.location.href) { // Eğer ses kaynağı yoksa veya varsayılan URL ise (yani şarkı yüklenmemişse)
             console.warn("No audio source loaded to play.");
             return;
        }
        if (isPlaying) {
            pauseSong();
        } else {
            playSong();
        }
    }

    function playSong() {
        if (!audioPlayer.src || audioPlayer.src === window.location.href) return;
        audioPlayer.play().then(() => {
            isPlaying = true;
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            musicCard.classList.add('playing');
        }).catch(error => {
            console.error("Error playing audio:", error);
            // Kullanıcı etkileşimi olmadan otomatik oynatma engellenmiş olabilir.
            // Bu durumda kullanıcıya bir bildirim gösterebilirsiniz.
            isPlaying = false; // Oynatma başarısız olursa durumu güncelle
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            musicCard.classList.remove('playing');
        });
    }

    function pauseSong() {
        audioPlayer.pause();
        isPlaying = false;
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        musicCard.classList.remove('playing');
    }

    // Next song
    function nextSong() {
        currentSongIndex = (currentSongIndex + 1) % musicData.length;
        loadSong(currentSongIndex);
        if (isPlaying) playSong();
    }

    // Previous song
    function prevSong() {
        currentSongIndex = (currentSongIndex - 1 + musicData.length) % musicData.length;
        loadSong(currentSongIndex);
        if (isPlaying) playSong();
    }

    // Like functionality
    function likeSong() {
        if (currentSongIndex < 0 || currentSongIndex >= musicData.length) return; // Geçersiz index kontrolü
        const currentSong = musicData[currentSongIndex];
        if (!currentSong || typeof currentSong.id === 'undefined') return; // Şarkı veya ID yoksa işlem yapma

        const songIndexInFavorites = favorites.findIndex(fav => fav.id === currentSong.id);

        if (songIndexInFavorites === -1) {
            // Add to favorites
            favorites.push({...currentSong}); // Şarkının bir kopyasını ekle
            likeBtn.classList.add('active');
        } else {
            // Remove from favorites
            favorites.splice(songIndexInFavorites, 1);
            likeBtn.classList.remove('active');
        }

        // Save to localStorage
        localStorage.setItem('tunezz_favorites', JSON.stringify(favorites));
        updateFavoritesCount();
        renderFavoritesList();

        // Swipe animation
        musicCard.classList.add('swipe-right');
        setTimeout(() => {
            musicCard.classList.remove('swipe-right');
            nextSong();
        }, 500);
    }

    // Dislike functionality
    function dislikeSong() {
        musicCard.classList.add('swipe-left');
        setTimeout(() => {
            musicCard.classList.remove('swipe-left');
            nextSong();
        }, 500);
    }

    // Update favorites count
    function updateFavoritesCount() {
        favoritesCount.textContent = favorites.length;
    }

    // Render favorites list
    function renderFavoritesList() {
        favoritesList.innerHTML = ''; // Önceki listeyi temizle

        if (favorites.length === 0) {
            favoritesList.innerHTML = '<p class="no-favorites">Favori şarkı bulunmamaktadır</p>';
            return;
        }

        favorites.forEach(song => {
            if (!song || typeof song.id === 'undefined') return; // Geçersiz şarkı verisini atla

            const favoriteItem = document.createElement('div');
            favoriteItem.className = 'favorite-item';
            favoriteItem.dataset.id = song.id; // Oynatma için ID
            favoriteItem.innerHTML = `
                <img src="${song.image}" alt="${song.title}">
                <div class="favorite-item-info">
                    <h4 class="favorite-item-title">${song.title}</h4>
                    <p class="favorite-item-artist">${song.artist}</p>
                </div>
                <button class="remove-favorite" data-id="${song.id}">
                    <i class="fas fa-times"></i>
                </button>
            `;
            favoritesList.appendChild(favoriteItem);

            // Play song from favorites when item (not remove button) is clicked
            favoriteItem.addEventListener('click', function(e) {
                // Sadece favori öğesinin kendisine tıklandığında (kaldırma butonuna değil) çalışır
                if (e.target.closest('.remove-favorite')) {
                    return;
                }
                const id = parseInt(this.dataset.id);
                playFavoriteSong(id);
            });

            // Add event listener to remove button within the item
            const removeBtn = favoriteItem.querySelector('.remove-favorite');
            if (removeBtn) {
                 removeBtn.addEventListener('click', function(e) {
                    e.stopPropagation(); // Olayın favori öğesine yayılmasını engelle
                    const id = parseInt(this.dataset.id);
                    removeFromFavorites(id);
                });
            }
        });
    }


    // Play song from favorites
    function playFavoriteSong(id) {
        const songIndex = musicData.findIndex(song => song.id === id);
        if (songIndex !== -1) {
            currentSongIndex = songIndex;
            loadSong(currentSongIndex);
            playSong();
            if (body.classList.contains('sidebar-open')) { // Kenar çubuğu açıksa kapat
                 toggleSidebar();
            }
        } else {
            console.warn("Favorite song not found in musicData with ID:", id);
        }
    }

    // Remove from favorites
    function removeFromFavorites(id) {
        favorites = favorites.filter(fav => fav.id !== id);
        localStorage.setItem('tunezz_favorites', JSON.stringify(favorites));
        updateFavoritesCount();
        renderFavoritesList(); // Listeyi yeniden oluşturarak event listener'ları da günceller

        // Update like button if current song is the one being removed
        if (currentSongIndex >= 0 && currentSongIndex < musicData.length) {
            const currentSong = musicData[currentSongIndex];
            if (currentSong && currentSong.id === id) {
                likeBtn.classList.remove('active');
            }
        }
    }


    // Toggle sidebar
    function toggleSidebar() {
        body.classList.toggle('sidebar-open');
    }

    // Swipe functionality with Hammer.js
    function setupSwipe() {
        if (typeof Hammer === 'undefined') {
            console.error('Hammer.js is not loaded.');
            return;
        }
        const hammer = new Hammer(musicCard);

        hammer.on('swipeleft', function() {
            dislikeSong();
        });

        hammer.on('swiperight', function() {
            likeSong();
        });

        // Tap to play/pause can conflict with button clicks.
        // It's generally better to use explicit play/pause buttons.
        // hammer.on('tap', function() {
        //     togglePlay();
        // });
    }

    // Theme toggle
    function toggleTheme() {
        body.classList.toggle('light-theme');
        const icon = themeToggle.querySelector('i');
        if (body.classList.contains('light-theme')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // Event listeners
    function setupEventListeners() {
        playPauseBtn.addEventListener('click', togglePlay);
        likeBtn.addEventListener('click', likeSong);
        dislikeBtn.addEventListener('click', dislikeSong);
        themeToggle.addEventListener('click', toggleTheme);
        favoritesBtn.addEventListener('click', toggleSidebar);
        closeSidebar.addEventListener('click', toggleSidebar);
        overlay.addEventListener('click', toggleSidebar);

        // Progress bar events
        audioPlayer.addEventListener('timeupdate', updateProgress);
        progress.addEventListener('input', function() {
            const duration = audioPlayer.duration;
            if (duration > 0) {
                 audioPlayer.currentTime = (this.value / 100) * duration;
            }
        });
        // 'change' eventi 'input' ile benzer işlevi görüyor, genellikle biri yeterlidir.
        // progress.addEventListener('change', function() {
        //     const duration = audioPlayer.duration;
        //     if (duration > 0) {
        //         audioPlayer.currentTime = (this.value / 100) * duration;
        //     }
        // });


        // Click on progress container
        const progressContainer = document.querySelector('.progress-container');
        if (progressContainer) {
            progressContainer.addEventListener('click', setProgress);
        }


        // When song ends, play next
        audioPlayer.addEventListener('ended', nextSong);

        // Keyboard controls
        document.addEventListener('keydown', (e) => {
            // Input, textarea gibi alanlara odaklanıldığında klavye kısayollarını devre dışı bırak
            const activeElement = document.activeElement;
            if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA' || activeElement.isContentEditable)) {
                return;
            }

            switch(e.key) {
                case ' ': // Space
                    e.preventDefault(); // Sayfanın kaymasını engelle
                    togglePlay();
                    break;
                case 'ArrowRight':
                    // Like butonu yerine bir sonraki şarkıya geçiş daha mantıklı olabilir
                    // veya ses seviyesini artırma gibi bir işlev eklenebilir.
                    // Şimdilik likeSong() olarak bırakıyorum.
                    likeSong();
                    break;
                case 'ArrowLeft':
                    // Dislike butonu yerine bir önceki şarkıya geçiş daha mantıklı olabilir
                    // veya ses seviyesini azaltma gibi bir işlev eklenebilir.
                    // Şimdilik dislikeSong() olarak bırakıyorum.
                    dislikeSong();
                    break;
                // ArrowUp ve ArrowDown için bir işlev tanımlanmamış, isterseniz ekleyebilirsiniz.
                // Örneğin:
                // case 'ArrowUp':
                //     nextSong(); // Veya ses artırma
                //     break;
                // case 'ArrowDown':
                //     prevSong(); // Veya ses azaltma
                //     break;
                case 'Escape':
                    if (body.classList.contains('sidebar-open')) {
                        toggleSidebar();
                    }
                    break;
            }
        });
    }

    // Initialize the app
    init();
});

// Bildirim
// Bildirim izin verme
if (Notification.permission === "granted") {
  // Bildirim izni zaten verilmiş
  showNotification();
} else if (Notification.permission !== "denied") {
  // Kullanıcıdan izin iste
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      showNotification();
    }
  });
}


function showNotification() {
  const notification = new Notification("Tunezz Music App", {
    body: "Yeni Şarkı Fire",
    icon: "tunezz.png" // Bildirim ikonu (isteğe bağlı)
  });

  // Bildirime tıklanınca yapılacaklar
  notification.onclick = () => {
    window.focus();
    // Veya belirli bir sayfaya yönlendir:
    // window.location.href = "https://www.instagram.com/setup.dev42";
  };
}


