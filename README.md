# DIGITAL SIGNATURE

## GET `/generate-key-pair`

generates a new asymmetric key pair of the given type

## POST `/sign`

gets the data and the private key. creates a new key object containing the provided private key, signs the data and return the signature

## POST `/verify`

gets the data, the signature and the public key. creates a new key object containing the provided public key, verifies the data using the signature and the public key and returns the result of the verification
