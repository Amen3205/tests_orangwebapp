Feature: Formulaire de réservation
  En tant qu'utilisateur
  Je veux accéder au formulaire de réservation
  Afin de pouvoir réserver une chambre

  Background:
    Given je suis sur "https://automationintesting.online/"
    And la page est complètement chargée

  # TC-01
  Scenario: Le formulaire de réservation est visible
    When je navigue sur la page d'accueil
    Then la section "#booking" est visible à l'écran

  # TC-02
  Scenario: L'URL de la page d'accueil est correcte
    When la page se charge
    Then l'URL contient "automationintesting.online"

  # TC-03
  Scenario: Le formulaire contient des champs de saisie
    When j'inspecte la section "#booking"
    Then le nombre de champs "input" est supérieur à 0

  # TC-21
  Scenario: Le champ prénom accepte une saisie texte
    When je clique sur le champ "#firstname"
    And je saisis "Ahmed"
    Then le champ "#firstname" contient la valeur "Ahmed"

  # TC-22
  Scenario: Le champ nom accepte une saisie texte
    When je clique sur le champ "#lastname"
    And je saisis "Ben Ali"
    Then le champ "#lastname" contient la valeur "Ben Ali"

  # TC-23
  Scenario: Le champ email accepte une adresse email valide
    When je clique sur le champ "#email"
    And je saisis "ahmed@test.tn"
    Then le champ "#email" contient la valeur "ahmed@test.tn"

  # TC-24
  Scenario: Le champ téléphone accepte un numéro
    When je clique sur le champ "#phone"
    And je saisis "12345678"
    Then le champ "#phone" contient la valeur "12345678"
