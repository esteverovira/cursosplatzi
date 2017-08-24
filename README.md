# CursosPlatzi

Platzom es un idioma inventado para el [Curso de Fundamentos de JavaScript](https://platzi.com/js) de [Platzi](https://platzi.com), el mejor lugar de educación online

## Descripción del idioma

- Si la palabra termina con "ar", se le quitan esas dos letras
- Si la palabra inicia con Z, se le añade "pe" al final
- Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio
- Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas

## Instalación

```
npm install platzom
```

## Uso

```
import platzom from 'platzom'

platzom("Programar") // Program
platzom("Zorro") // Zorrope
platzom("Zarpar") // Zarppe
platzom("abecedario") // abece-dario
platzom("sometemos") // SoMeTeMoS
```

##Créditos

- [Esteve Rovira](https://www.linkedin.com/in/esteve-rovira-majoral-5607ab82/?midToken=AQHysJSYkF_OOw&trk=eml-jobs_jymbii_digest-header-46-profile&trkEmail=eml-jobs_jymbii_digest-header-46-profile-null-4ve7a0%7Ej6cjdb09%7Ec4-null-neptune%2Fprofile%7Evanity%2Eview&lipi=urn%3Ali%3Apage%3Aemail_jobs_jymbii_digest%3BwnApzznXTAa81R%2BWnjprNg%3D%3D)

##Licencia

