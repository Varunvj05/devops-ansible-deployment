pipeline {
    agent any

    stages {

        stage('Deploy') {
            steps {
                sh '''
                ssh vboxansible@192.168.56.101 << EOF
                ansible-playbook /home/vboxansible/deploy.yml
                EOF
                '''
            }
        }

    }
}
