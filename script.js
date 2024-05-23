//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  // Apply saved preferences
  applyPreferences();

  // Handle form submission
  document.getElementById("preferencesForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const fontSize = document.getElementById("fontsize").value;
    const fontColor = document.getElementById("fontcolor").value;

    // Save preferences in cookies
    setCookie("fontsize", fontSize, 365);
    setCookie("fontcolor", fontColor, 365);

    // Apply preferences
    applyPreferences();
  });
});

function applyPreferences() {
  const fontSize = getCookie("fontsize") || 16;
  const fontColor = getCookie("fontcolor") || "#000000";

  document.documentElement.style.setProperty("--fontsize", `${fontSize}px`);
  document.documentElement.style.setProperty("--fontcolor", fontColor);

  document.getElementById("fontsize").value = fontSize;
  document.getElementById("fontcolor").value = fontColor;
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  const name = cname + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
