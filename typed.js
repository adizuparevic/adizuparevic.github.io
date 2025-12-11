document.addEventListener("DOMContentLoaded", () => {

  function initTyped(id, text, typeSpeed = 50, backSpeed = 50, loop = false, showCursor = false) {
    return new Typed(id, {
      strings: Array.isArray(text) ? text : [text],
      typeSpeed: typeSpeed,
      backSpeed: backSpeed,
      loop: loop,
      showCursor: showCursor

    })

  }


  initTyped('#adi', "Let's Work Together", 100);
  initTyped('#name', "Adi Zuparević", 30);
  initTyped('#info', "Hi everyone, my name is Adi Zuparević and I am a web developer from Bosnia and Herzegovina. I'm passionate about technology and programming, and I'm always looking to improve my skills.", 20);

  initTyped('#desc1', "GameDB is a web application built as a high-school project that uses the Steam API to fetch video game data and present it in a clean, user-friendly interface. Users can search and browse games, view details like genre, platform and basic statistics, and easily explore the game catalog. The project emphasizes simplicity, clarity and core functionality, making it a practical demonstration of working with external APIs, managing data, and building a polished front-end with HTML, CSS and JavaScript.", 25);

  initTyped('#desc2', "simple-encryptor is a lightweight JavaScript/Node.js library for basic text encryption and decryption — perfect for small projects or learning the fundamentals of cryptography. It is designed to be easy to use: the user calls the encryption method with a text and a password, and the result can later be decrypted using the same password.", 25);

  initTyped('#desc3', "calculator-math-library is a simple JavaScript / Node.js library that provides basic mathematical operations and utilities — serving as a lightweight math toolkit for applications or learning purposes. It supports basic arithmetic and common math functions, allowing you to perform operations like addition, subtraction, multiplication, division (and more, depending on implementation) with ease.", 25);

  initTyped('#project', "GameDB", 120);
  initTyped('#project1', "simple-encryptor", 120);
  initTyped('#project2', "calculator-math-library", 120);

  initTyped('#link', "Link to Project", 100);
  initTyped('#link1', "Link to Project", 100);
  initTyped('#link2', "Link to Project", 100);

  initTyped('#not', ["This is V1.0", "See you soon :)", ''], 80, 80, false);
})