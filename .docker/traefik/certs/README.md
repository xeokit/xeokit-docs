
# use mkcert to generate
All certs generated with [mkcert](https://github.com/FiloSottile/mkcert)

# cert and key files for xeokit.localhost

`mkcert -key-file xeokit.localhost.key.pem -cert-file xeokit.localhost.cert.pem xeokit.localhost *.xeokit.localhost`


## Root CA cert with

`mkcert -install`

it creates *.crt at `/usr/local/share/ca-certificates` and install crt in many places. for chromium at NSS database `$HOME/.pki/nssdb` 

* https://wiki.archlinux.org/title/Network_Security_Services


