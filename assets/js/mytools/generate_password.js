function generatePassword() {
  const length = parseInt(document.getElementById('length').value);
  if (length < 8 || length > 128) {
    alert('Password length must be between 8 and 128.');
    return;
  }
  var uppercase = document.getElementById('uppercase').checked;
  var lowercase = document.getElementById('lowercase').checked;
  var numbers = document.getElementById('numbers').checked;
  var symbols = document.getElementById('symbols').checked;
  var excludeSimilar = document.getElementById('exclude-similar').checked;
  var excludeAmbiguous = document.getElementById('exclude-ambiguous').checked;
  var uppercaseChars = 'ABCDEFGHIJKLMNPOQRSTUVWXYZ'; // Excludes I, L, O
  var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  var numberChars = '1234567890';
  var symbolChars = '@#$%{}[]()/\\\'"`~,;:.<>';
  var ambiguousChars = '{}[]()/\\\'"`~,;:.<>';
  let chars = "";
  if (uppercase) chars += uppercaseChars;
  if (lowercase) chars += lowercaseChars;
  if (numbers) chars += numberChars;
  if (symbols) chars += symbolChars;
  if (excludeSimilar) {
    chars = chars.replace(/[iIlLoO10]/g, '');
  }
  if (excludeAmbiguous) {
    chars = chars.replace(new RegExp('[' + ambiguousChars.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ']', 'g'), '');
  }

  let password = '';
  let hasUppercase = false;
  let hasLowercase = false;
  let hasNumber = false;
  let hasSymbol = false;

  let count = 0;
  while (password.length < length || !((uppercase == hasUppercase) && (lowercase == hasLowercase) && (numbers == hasNumber) && (symbols == hasSymbol))) {
    password = '';
    hasUppercase = false;
    hasLowercase = false;
    hasNumber = false;
    hasSymbol = false;

    for (let i = 0; i < length; i++) {
      let char = chars.charAt(Math.floor(Math.random() * chars.length));
      password += char;
    }

    hasUppercase = /[A-Z]/.test(password);
    hasLowercase = /[a-z]/.test(password);
    hasNumber = /[0-9]/.test(password);
    hasSymbol = /[@#$%{}[\]()\/\\'"\`,;:.<>]/.test(password);
    console.log(count);
    count += 1;
  }
  document.getElementById('textoutput').value = password;
}
function copyPassword() {
  var password = document.getElementById('textoutput');
  password.select();
  document.execCommand('copy');
}