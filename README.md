# codematic-test
This is a simple API that returns the time of [6 different timezones in Africa](https://docs.google.com/document/d/1o6TzEajMS-M6JrWmmJkir883DB9Tr3JPqPAGQkMafh0/edit)


## Local development set up
- ```git clone git@github.com:Bashorun97/codematic-test.git```<br />
- ```cd codematic-test```<br />
- ```docker-compose -f docker/main/docker-compose.yaml -f docker/main/docker-compose.yaml build api``` to build the api service <br />
- You can then do ```docker-compose -f docker/main/docker-compose.yaml -f docker/main/docker-compose.yaml up api``` to bring up the services.<br />
The API is also available on a Kubernetes cluster and can be accessed via ```http://35.196.61.148/codematic/?timezone=<timezone>```

The API is very extensible as it uses the strategy design pattern and polymorhism to abstract the calls to timezones.

The API only returns the time CVT, GMT, CAT, WAT, EAT, MT. Otherwise a 404 error is thrown.

### sucesss
```
"16:59:0"
```
### error
```
message	"Timezone doesn't exist"
```