#Django Rest Framework Browsable API

#This is a project that integrates React on top of the Django Rest Framework.
#It provides full CRUD operations.
#React Code is under the /assets directory

#Usage and Setup
#OS: Unix

#DJANGO SPECIFIC
#install python3 in your environment
#virtualenv fistbumpenv
#move this project directory (ReactDRF) into the virtualenv directory (ie fistbumpenv)
#pip3 install -r requirements.txt
#python3 manage.py createsuperuser (Do this to create a user to login to the REST API and React project)
#python3 manage.py makemigrations
#python3 manage.py migrate

#REACT SPECIFIC
#npm install
#npm run build

#Run the project:
#python3 manage.py runserver 0.0.0.0:8000
#go to localhost:8000 to view the Django Rest API endpoint
#go to localhost:8000/fistbump/ to go to react project root page.
