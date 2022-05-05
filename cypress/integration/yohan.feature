# language: fr
Fonctionnalité: Cheat
    Scénario: Test 1
        Quand l'utilisateur accède à l'application
        Et qu'il appuie sur 'Marine'
        Et qu'il change le nom par 'Marine la best'
        Et enregistre
        Alors la liste des heros est la suivante 
            |heros         |
            |Marine la best|
            |Serge         |
            |Bruno         |
            |Phillipe      |
            |Gwendoline    |
            |Jeremie       |
        Et le heros 'Marine' n'est plus présent dans la liste
   