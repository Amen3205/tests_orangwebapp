# ============================================================
#  GHERKIN DOCUMENTATION — Shady Meadows B&B
#  Suite complète : 30 cas de test (TC-01 à TC-30)
# ============================================================

# ────────────────────────────────────────────────────────────
#  FICHIER : tests/booking.spec.js
# ────────────────────────────────────────────────────────────

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


# ────────────────────────────────────────────────────────────
#  FICHIER : tests/home.spec.js
# ────────────────────────────────────────────────────────────

Feature: Page d'accueil
  En tant qu'utilisateur
  Je veux voir la page d'accueil complète
  Afin de découvrir l'hôtel et ses chambres

  Background:
    Given je suis sur "https://automationintesting.online/"
    And la page est complètement chargée

  # TC-04
  Scenario: La page d'accueil se charge correctement
    When la page se charge
    Then l'URL correspond à "automationintesting.online"

  # TC-05
  Scenario: Les chambres sont affichées sur la page
    When je regarde la liste des chambres
    Then la première ".room-card" est visible

  # TC-06
  Scenario: Le menu de navigation est visible
    When je regarde le haut de la page
    Then l'élément "nav" est visible

  # TC-07
  Scenario: Le pied de page est visible
    When je regarde le bas de la page
    Then l'élément "footer" est visible

  # TC-25
  Scenario: La page possède un titre
    When la page est chargée
    Then le titre de la page n'est pas vide

  # TC-26
  Scenario: Le logo est visible dans le header
    When je regarde l'en-tête de la page
    Then l'élément "header" est visible

  # TC-27
  Scenario: La section booking existe dans le DOM
    When la page est chargée
    Then l'élément "#booking" est attaché au DOM

  # TC-28
  Scenario: La page se charge sans erreurs JavaScript
    When je charge la page en écoutant les erreurs
    Then aucune erreur JavaScript n'est détectée


# ────────────────────────────────────────────────────────────
#  FICHIER : tests/search.spec.js
# ────────────────────────────────────────────────────────────

Feature: Navigation et affichage des chambres
  En tant qu'utilisateur
  Je veux naviguer entre les sections
  Afin de trouver et réserver une chambre

  Background:
    Given je suis sur "https://automationintesting.online/"
    And j'ai cliqué sur le lien "Rooms"
    And la première ".room-card" est visible

  # TC-08
  Scenario: La navigation vers la section Rooms fonctionne
    When je clique sur le lien "Rooms"
    Then la première ".room-card" est visible

  # TC-09
  Scenario: La section contact est visible
    When je regarde la page
    Then "section#contact" est visible

  # TC-10
  Scenario: Les cartes de chambres sont cliquables
    When j'inspecte la première ".room-card"
    Then elle contient un lien "a.btn-primary" visible

  # TC-11
  Scenario: Plusieurs chambres sont affichées
    When je compte les ".room-card"
    Then leur nombre est supérieur à 1

  # TC-12
  Scenario: Chaque carte de chambre a un titre
    When j'inspecte la première ".room-card"
    Then elle contient un élément "h5" visible

  # TC-13
  Scenario: Les équipements des chambres sont affichés
    When j'inspecte la première ".room-card"
    Then elle contient au moins un badge ".badge"

  # TC-14
  Scenario: La section booking est accessible par scroll
    When je clique sur le lien "Booking"
    Then "#booking" est dans le viewport

  # TC-15
  Scenario: Le prix est affiché sur chaque chambre
    When j'inspecte la première ".room-card"
    Then un élément ".fw-bold" affichant le prix est visible

  # TC-16
  Scenario: La section héro est visible
    When je regarde la page
    Then "section.hero" est visible

  # TC-17
  Scenario: La section localisation avec carte est visible
    When je regarde la page
    Then "section#location" est visible


# ────────────────────────────────────────────────────────────
#  FICHIER : tests/ui.spec.js
# ────────────────────────────────────────────────────────────

Feature: Interface utilisateur et responsive design
  En tant qu'utilisateur
  Je veux que l'application s'affiche correctement
  Sur tous les types d'appareils

  Background:
    Given je suis sur "https://automationintesting.online/"
    And la page est complètement chargée

  # TC-18
  Scenario: L'application est responsive sur mobile (375px)
    When je configure le viewport à 375x667 pixels
    Then le "body" est visible sans erreur d'affichage

  # TC-19
  Scenario: La navigation est visible sur la page
    When je regarde la page
    Then l'élément "nav" est visible

  # TC-20
  Scenario: La page reste stable après rechargement
    When je recharge la page avec F5
    Then le "body" est toujours visible et stable

  # TC-29
  Scenario: L'application s'affiche correctement sur tablette (768px)
    When je configure le viewport à 768x1024 pixels
    Then le "body" est visible
    And l'élément "nav" est visible

  # TC-30
  Scenario: L'application s'affiche correctement sur desktop (1280px)
    When je configure le viewport à 1280x800 pixels
    Then le "body" est visible
    And l'élément "nav" est visible
