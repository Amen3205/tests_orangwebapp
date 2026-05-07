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
