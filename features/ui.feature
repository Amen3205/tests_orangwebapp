Feature: Interface utilisateur et responsive design
  En tant qu'utilisateur
  Je veux que l'application s'affiche correctement
  Sur tous les types d'appareils

  Background:
    Given je suis sur "https://automationintesting.online/"
    And la page est complètement chargée

  # TC-18
  Scenario: L'application est responsive sur mobile 375px
    When je configure le viewport à 375x667 pixels
    Then le "body" est visible sans erreur d'affichage

  # TC-19
  Scenario: La navigation est visible sur la page
    When je regarde la page
    Then l'élément "nav" est visible

  # TC-20
  Scenario: La page reste stable après rechargement
    When je recharge la page
    Then le "body" est toujours visible et stable

  # TC-29
  Scenario: L'application s'affiche correctement sur tablette 768px
    When je configure le viewport à 768x1024 pixels
    Then le "body" est visible
    And l'élément "nav" est visible

  # TC-30
  Scenario: L'application s'affiche correctement sur desktop 1280px
    When je configure le viewport à 1280x800 pixels
    Then le "body" est visible
    And l'élément "nav" est visible
