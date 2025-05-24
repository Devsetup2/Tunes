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

      // Music data with unique IDs
      const musicData = [
        {
          id: 1,
          title: "Fire",
          artist: "Muammer & Suno",
          year: "2023",
          image: "https://devsetup2.github.io/Tunes/fire.png",
          audio: "https://devsetup2.github.io/Tunes/fire.mp3"
        },
        {
          id: 2,
          title: "Blinding Lights",
          artist: "The Weeknd",
          year: "2020",
          image: "https://i.scdn.co/image/ab67616d0000b2734718e2b124f79258be7bc452",
          audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        },
        {
          id: 3,
          title: "Save Your Tears",
          artist: "The Weeknd",
          year: "2020",
          image: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
          audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
        },
        {
          
          title: "I'M Burnt",
          artist: "Muammer & Suno",
          year: "2024",
          image: "https://devsetup2.github.io/Tunes/burnt.png",
          audio: "https://devsetup2.github.io/Tunes/burnt.mp3"
      },
        {
          id: 4,
          title: "Stay",
          artist: "The Kid LAROI, Justin Bieber",
          year: "2021",
          image: "https://i.scdn.co/image/ab67616d0000b273c5653f9038e42efad2f8a266",
          audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        {
          id: 5,
          title: "good 4 u",
          artist: "Olivia Rodrigo",
          year: "2021",
          image: "https://i.scdn.co/image/ab67616d0000b2731d7e26119d1a6648e34dc51c",
          audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
        },
        {
          id: 6,
          title: "Levitating",
          artist: "Dua Lipa",
          year: "2020",
          image: "https://t2.genius.com/unsafe/258x258/https%3A%2F%2Fimages.genius.com%2F396ec949e9108207f0fc1ee7595b7da6.1000x1000x1.png",
          audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
        },
        {
          id: 7,
          title: "What Kind Of Life",
          artist: "Muammer Altunkan",
          year: "2024",
          image: "https://devsetup2.github.io/Tunes/whatkindlife.png",
          audio: "https://devsetup2.github.io/Tunes/whatkindlife.mp3"
        },
        {
          id: 8,
          title: "My Years Without You",
          artist: "Muammer Altunkan",
          year: "2024",
          image: "https://devsetup2.github.io/Tunes/myyears.png",
          audio: "https://devsetup2.github.io/Tunes/myyearswithoutyou.mp3"
        },
        {
          id: 9,
          title: "Summer Time",
          artist: "Muammer Altunkan",
          year: "2024",
          image: "https://devsetup2.github.io/Tunes/summertime.png",
          audio: "https://devsetup2.github.io/Tunes/summertime.mp3"
        },
        {
          id: 10,
          title: "Whispers Of Autumn",
          artist: "Muammer Altunkan",
          year: "2024",
          image: "https://devsetup2.github.io/Tunes/whispers.png",
          audio: "https://devsetup2.github.io/Tunes/whispersofautumn.mp3"
        },
        {
          id: 11,
          title: "Lazy Tired",
          artist: "Muammer Altunkan",
          year: "2024",
          image: "https://devsetup2.github.io/Tunes/Lazy%20Tired.webp",
          audio: "https://devsetup2.github.io/Tunes/lazytired.mp3"
        },
        {
          id: 12,
          title: "Deceived",
          artist: "Muammer Altunkan",
          year: "2024",
          image: "https://devsetup2.github.io/Tunes/deceive.png",
          audio: "https://devsetup2.github.io/Tunes/deceived.mp3"
        },
        {
          id: 13,
          title: "Dance Alone",
          artist: "Muammer Altunkan",
          year: "2024",
          image: "https://devsetup2.github.io/Tunes/dancealone.png",
          audio: "https://devsetup2.github.io/Tunes/dancealone.mp3"
        },
        {
          id: 14,
          title: "A Spark İn Havana",
          artist: "Muammer Altunkan",
          year: "2025",
          image: "https://devsetup2.github.io/Tunes/havana.png",
          audio: "https://devsetup2.github.io/Tunes/asparkinhavana.mp3"
        },
        {
          id: 15,
          title: "Harley Bird",
          artist: "Jordan Schor",
          year: "2017",
          image: "https://raw.githubusercontent.com/AAdewunmi/Music-Player-App/refs/heads/master/images/music-1.jpg",
          audio: "https://devsetup2.github.io/Tunes/harleybird.mp3"
        },
        {
          id: 16,
          title: "Anywhere",
          artist: "Ikson",
          year: "2018",
          image: "https://github.com/AAdewunmi/Music-Player-App/blob/master/images/music-2.jpg?raw=true",
          audio: "https://devsetup2.github.io/Tunes/anywhere.mp3"
        },
        {
           id: 17,
           title: "Come On Push",
           artist: "Alendra",
           year: "2025",
           image: "https://devsetup2.github.io/Tunes/comeonpush.png",
           audio: "https://devsetup2.github.io/Tunes/comeonpush.mp3"
       }
            {
          id: 18,
          title: "Climb",
          artist: "Muammer & Suno",
          year: "2020",
          image: "https://www.deformmuzik.com/wp-content/uploads/2021/07/APSE.jpg",
          audio: "https://devsetup2.github.io/Tunes/climb.mp3"
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
        // Ensure index is within valid range
        if (index < 0 || index >= musicData.length) {
          console.error("Invalid song index:", index);
          currentSongIndex = 0;
          index = 0;
        }
        
        const song = musicData[index];
        
        // Check if song data is complete
        if (!song || !song.image || !song.title || !song.artist || !song.year || !song.audio) {
          console.error("Song data is incomplete for index:", index, song);
          if (musicData.length > 1) {
            nextSong();
          } else {
            musicImage.style.backgroundImage = 'url("")';
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
          if (nextSongData && nextSongData.image) {
            const img = new Image();
            img.src = nextSongData.image;
          }
        }

        // Reset progress bar
        progressBar.style.width = '0%';
        progress.value = 0;
        currentTimeEl.textContent = '0:00';

        // Set duration after metadata loads
        audioPlayer.addEventListener('loadedmetadata', function() {
          durationEl.textContent = formatTime(audioPlayer.duration);
        });
      }

      // Format time (seconds to MM:SS)
      function formatTime(seconds) {
        if (isNaN(seconds) || seconds < 0) return '0:00';
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
      }

      // Update progress bar
      function updateProgress(e) {
        const { duration, currentTime } = e.srcElement;
        if (duration > 0) {
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
        if (duration > 0) {
          audioPlayer.currentTime = (clickX / width) * duration;
        }
      }

      // Play/pause toggle
      function togglePlay() {
        if (!audioPlayer.src || audioPlayer.src === window.location.href) {
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
          isPlaying = false;
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
        if (currentSongIndex < 0 || currentSongIndex >= musicData.length) return;
        const currentSong = musicData[currentSongIndex];
        if (!currentSong || typeof currentSong.id === 'undefined') return;

        const songIndexInFavorites = favorites.findIndex(fav => fav.id === currentSong.id);

        if (songIndexInFavorites === -1) {
          // Add to favorites
          favorites.push({...currentSong});
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
        favoritesList.innerHTML = '';

        if (favorites.length === 0) {
          favoritesList.innerHTML = '<p class="no-favorites">Favori şarkı bulunmamaktadır</p>';
          return;
        }

        favorites.forEach(song => {
          if (!song || typeof song.id === 'undefined') return;

          const favoriteItem = document.createElement('div');
          favoriteItem.className = 'favorite-item';
          favoriteItem.dataset.id = song.id;
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

          // Play song from favorites when item is clicked
          favoriteItem.addEventListener('click', function(e) {
            if (e.target.closest('.remove-favorite')) {
              return;
            }
            const id = parseInt(this.dataset.id);
            playFavoriteSong(id);
          });

          // Add event listener to remove button
          const removeBtn = favoriteItem.querySelector('.remove-favorite');
          if (removeBtn) {
            removeBtn.addEventListener('click', function(e) {
              e.stopPropagation();
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
          if (body.classList.contains('sidebar-open')) {
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
        renderFavoritesList();

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

        // Click on progress container
        const progressContainer = document.querySelector('.progress-container');
        if (progressContainer) {
          progressContainer.addEventListener('click', setProgress);
        }

        // When song ends, play next
        audioPlayer.addEventListener('ended', nextSong);

        // Keyboard controls
        document.addEventListener('keydown', (e) => {
          const activeElement = document.activeElement;
          if (activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA' || activeElement.isContentEditable)) {
            return;
          }

          switch(e.key) {
            case ' ':
              e.preventDefault();
              togglePlay();
              break;
            case 'ArrowRight':
              likeSong();
              break;
            case 'ArrowLeft':
              dislikeSong();
              break;
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

    // Notification permission
    if (Notification.permission === "granted") {
      showNotification();
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          showNotification();
        }
      });
    }

    function showNotification() {
      const notification = new Notification("Tunezz Music App", {
        body: "Yeni Şarkı Fire",
        icon: "tunezz.png"
      });

      notification.onclick = () => {
        window.focus();
      };
    }
