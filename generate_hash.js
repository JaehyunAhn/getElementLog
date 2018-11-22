/* be sure to pre-import in html file
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/components/aes-min.js"></script>
*/
function encodeString(input_string, seed_string) {
    return CryptoJS.AES.encrypt(input_string, seed_string);
}

function decodeString(encryptedAES, seed_string) {
    var decryptedBytes = CryptoJS.AES.decrypt(encryptedAES, seed_string);
    return decryptedBytes.toString(CryptoJS.enc.Utf8);
}