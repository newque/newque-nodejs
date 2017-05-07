Newque-Nodejs Getting Started
=============================

The Newque driver for node.js.  Newque is a light-weight and powerful message broker.

### Pre-requisites
Docker needs to be installed
HTTPie needs to be installed

### Start the docker container
This will startup a docker container using the defaul configuration.
```docker
docker pull newque/newque
docker run -p 8000:8000 -p 8001:8001 -p 8005:8005 -d -t bradstimpson/newque-docker
```

#### Where to find more info?


### Write A Message
Using HTTPie let's write a series of messages to Newque:
`http POST localhost:8000/v1/example atomic:=true messages:='["abc","def","ghi"]' --json`

### Count the Stored Messages