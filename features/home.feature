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
