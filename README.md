# Projet Test
Un projet test orienté DevOps avec 
- Git pour le contrôle de version
- GitHub pour la gestion de projet
	- issues
	- milestones
	- labels
	- project
	- collaborateurs
- Node.js
	- Express.js (routage)
	- Mocha (tests)
	- Cucumber.js (BDD à venir)
	- Snyk pour tests de sécurité des applications Node.js
	- Plotly pour réaliser des graphiques (monitoring)
- Heroku (pateforme d'hébergement)
- Gulp.js (actions de build automatiques)
- CodeShip (intégration et déploiement continu) : [lien](https://app.codeship.com/projects/269888)
![enter image description here](http://www.group-dis.com/wp-content/uploads/2017/11/devops-process.png)
# Check-list DevOps
- [x] Gestion de projet
- [x] Contrôle de version
- [x] Triggers (push)
- [x] Développement Agile
	- [ ] Tests
		- [x] unitaires
		- [ ] end-to-end
- [x] Intégration continue
- [x] Déploiement continu
- [x] Monitoring
	- [x] server requests
	- [x] code push
	- [x] déploiements
# Status
- Sécurité (https://snyk.io/) : 
[![Known Vulnerabilities](https://snyk.io/test/github/adrianpothuaud/projet-test/badge.svg?targetFile=package.json)](https://snyk.io/test/github/adrianpothuaud/projet-test?targetFile=package.json)
- Intégration et déploiement continue (CodeShip): 
![Codeship Status for adrianpothuaud/projet-test](https://app.codeship.com/projects/837e67e0-e97d-0135-f6f9-0a40330e9728/status?branch=master)
# Installation
    git clone https://github.com/adrianpothuaud/projet-test.git
    cd projet-test
    npm install
# Build
    gulp
# Tests

via NPM

    npm test
ou:

    snyk
    mocha --timeout 5000 --reporter mochawesome --exit
Mise à jour des rapport de tests:
    
    chmod +x monitoring/testReports.sh
    monitoring/testReports.sh

# Deploiement
    git remote add heroku_projet-test git@heroku.com:projet-test.git
    git push heroku_projet-test $CI_COMMIT_ID:refs/heads/master
    heroku restart --app projet-test

[Application](https://projet-test.herokuapp.com/)
