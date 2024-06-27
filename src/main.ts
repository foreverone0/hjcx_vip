function setCookie(name: string, value: string) {
  document.cookie =
    name +
    "=" +
    value +
    ";path=/;expires=" +
    new Date(Date.now() + 864e5).toUTCString() +
    ";";
}

setCookie("is_vip", "1");
