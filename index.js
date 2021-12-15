document.getElementById("cli_login_button").click();
chrome.runtime.sendMessage({ directive: "close-window" });
