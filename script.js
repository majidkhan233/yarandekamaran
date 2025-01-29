const funnyMessages = [
    "1 raza khan pa sind ke rawlidali wo aw pa las ke warsara cemra ham wa nu obo te chapara ware we nu bya ye awaz ko chapara chapara aw da ceamre gham warsara na wo  💀",
    "2 wakeel che da ihsan dapara yawa gwata nur ham majoon khwrali wo da ba bya zai la raze was ham waye docter la zam 🌾",
    "3 yaseen sa che ropy khatam she bya kali waryad she aw ihsan sara dam la ham tali wo",
    "4 hilal bas pa de dunya yaw boj de ",
    "5 younas khan was lag badal shwe aw da aslhi na ham kha serli de ",
    "6 mustafa ba mushtaq la da school break ke big luchi botal raghsto mur khu pohrgai 📚",
    "7 awais chai kharab kali wo bya warta khaze wal ta nasha kali da ☃🧛",
    "8 bas allah mu abad lara ",
];

let currentIndex = 0; // Track the current message index

function showFunnyMessage() {
    const messageElement = document.getElementById('funny-message');
    
    // Display the current message
    messageElement.textContent = funnyMessages[currentIndex];
    
    // Move to the next message
    currentIndex = (currentIndex + 1) % funnyMessages.length; // Loop back to the start after the last message
}