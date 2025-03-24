pipeline{
    agent any

    tools {nodejs "nodejs21"}

    stages{
        stage('Dpendencies') {
            steps {
                sh 'npm i'
            }
        }
         stage('e2e Test'){
            steps{
                sh 'npm run testdata'
            }
        }
    }

   
}