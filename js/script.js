document.addEventListener("DOMContentLoaded", () => {
  // Load data from localStorage
  const storedData = localStorage.getItem("messages");
  const messages = storedData ? JSON.parse(storedData) : [];

  // Function to render messages
  const renderMessages = () => {
    const container = document.getElementById("messages-container");
    container.innerHTML = messages
      .map(
        (message) => `
            <div class="border-message">
                <p><b>Current time :</b><span>${message.currentTime}</span></p>
                <p><b>Nama :</b><span>${message.name}</span></p>
                <p><b>Nama :</b><span>${message.date}</span></p>
                <p><b>Jenis Kelamin :</b><span>${message.gender}</span></p>
                <p><b>Pesan :</b><span>${message.message}</span></p>
            </div>
        `
      )
      .join("");
  };

  renderMessages();

  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const genderValue = document.querySelector(
      'input[name="gender"]:checked'
    ).value;
    const gender = genderValue === "male" ? "Laki-laki" : "Perempuan";
    const message = document.getElementById("message").value;

    // Set current time
    const currentTime = new Date().toLocaleString();

    // Add new message to messages array
    const newMessage = {
      currentTime,
      name,
      date,
      gender,
      genderValue,
      message,
    };
    messages.push(newMessage);

    // Save messages to localStorage
    localStorage.setItem("messages", JSON.stringify(messages));

    // Render messages
    renderMessages();

    // Clear the form
    document.getElementById("form").reset();
  });
});

const images = [
  "../img/Blue Purple Abstract Pastel Coming Soon Banner.png",
  "../img/Blue Purple Abstract Pastel Coming Soon Banner (1).png",
];

let currentIndex = 0;

function changesImage() {
 const slider = document.querySelector('.slider');
 currentIndex = (currentIndex + 1) % images.length;
 slider.style.transform = `translateX(-${currentIndex * 100}%)`
}

setInterval(changesImage, 10000);
