window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const codeElement = document.getElementById("code");
  if (code) {
    codeElement.textContent = code;
  } else {
    codeElement.textContent = "コードが見つかりませんでした。";
  }
};
