pipeline {
    agent any

    stages {

        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/Adonis-I/calculator.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat '"C:\\Program Files\\nodejs\\npm.cmd" install'
            }
        }

        stage('Run Application') {
            steps {
                bat '"C:\\Program Files\\nodejs\\node.exe" -e "console.log(\'Application OK\')"'
            }
        }

    }
}