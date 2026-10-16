// Hands the bank authorisation result back to the app. Only the expected parameters are
// forwarded, and they are removed from the address bar and history right away.
(function () {
  var incoming = new URLSearchParams(window.location.search);
  var forwarded = new URLSearchParams();
  ["code", "state", "error", "error_description"].forEach(function (key) {
    var value = incoming.get(key);
    if (value !== null && value.length <= 4096) forwarded.set(key, value);
  });
  var target = "finances://banque" + (forwarded.toString() ? "?" + forwarded.toString() : "");
  window.history.replaceState(null, "", window.location.pathname);
  document.getElementById("open").setAttribute("href", target);
  window.location.replace(target);
})();
