pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/Varunvj05/devops-ansible-deployment.git'
            }
        }

        stage('Verify Files') {
            steps {
                sh 'ls'
            }
        }

        stage('Deploy using Ansible') {
            steps {
                sh '''
                ssh -o IdentitiesOnly=yes -i /var/lib/jenkins/.ssh/id_ed25519 \
                vboxansible@192.168.56.101 \
                ansible-playbook /home/vboxansible/Desktop/ansible-project/deploy.yml
                '''
            }
        }

    }
}
