#Django Rest Framework Browsable API<br />

#This is a project that integrates React on top of the Django Rest Framework.<br />
#It provides full CRUD operations.<br />
#React Code is under the /assets directory<br />

#Usage and Setup<br />
#OS: Unix<br />

#DJANGO SPECIFIC<br />
#install python3 in your environment<br />
#virtualenv fistbumpenv<br />
#move this project directory (ReactDRF) into the virtualenv directory (ie fistbumpenv) <br />
#pip3 install -r requirements.txt<br />
#use a secret key generator and place it in the line where there is a "TODO" in fistbump/settings.py<br />
#python3 manage.py createsuperuser (Do this to create a user to login to the REST API and React project) <br />
#python3 manage.py makemigrations<br />
#python3 manage.py migrate<br />

#REACT SPECIFIC<br />
#npm install<br />
#npm run build<br />

#Run the project:<br />
#python3 manage.py runserver 0.0.0.0:8000<br />
#go to localhost:8000 to view the Django Rest API endpoint<br />
#go to localhost:8000/fistbump/ to go to react project root page.<br />
