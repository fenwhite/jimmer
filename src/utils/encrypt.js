const crypto = require('crypto')

var rsaEncrypt = function (plainText) {
  let publicKey = '-----BEGIN PUBLIC KEY-----\n' +
  'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAupHgIkDkyifB2Qsx+7wZ\n' +
  'SFGMSVPxQRy500RnPBO4sh9cgxn3q8dtt5qYxl6Fol9ualEWvBO0ExCmtNJ32ivz\n' +
  '1ZsPhQ0BTI4iGre1Jep6ehHnWLqnWI5VNzu/E8aAcAuf/n0q+hXDY/z2cfNBDcLc\n' +
  'pizUDClGN9UT0m4+31ogQ5l09Yq+nYbOAHtdnI4A4qiw7PG2cj/0whQDK+693+RI\n' +
  'jAxQg77FlT8oX1c0OXHqNfXjv6YEdfOV7XAwnGlg5VPvfapSO1khLszeuAyaLPce\n' +
  'oPKpgGjYqDV/asqYgzWj2q39n1GB4YPyqtzvAcplElKhghQQGXMlGS44DE3LMcVJ\n' +
  'hwIDAQAB\n' +
  '-----END PUBLIC KEY-----\n'
  let cipherText = crypto.publicEncrypt(
    {
      key: publicKey,
      padding: crypto.constants.RSA_PKCS1_PADDING
    }
    , Buffer.from(plainText))
  return cipherText.toString('base64')
}

module.exports = {
  encrypt: rsaEncrypt
}
