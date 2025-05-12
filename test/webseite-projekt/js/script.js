// script.js
// This file contains JavaScript code for interactive elements of the website.

// Function to open the modal
function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// Event listener for the modal close button
document.getElementById('closeModal').addEventListener('click', closeModal);

// Function to play audio
function playAudio() {
    var audio = document.getElementById('myAudio');
    audio.play();
}

// Function to pause audio
function pauseAudio() {
    var audio = document.getElementById('myAudio');
    audio.pause();
}

// Lazy load video and audio on page load
window.onload = function() {
    var video = document.getElementById('myVideo');
    var audio = document.getElementById('myAudio');
    video.load();
    audio.load();
};