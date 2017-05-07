Newque-Nodejs Getting Started
=============================

The Newque driver for node.js.  Newque is a light-weight and powerful message broker.

### Pre-requisites
Docker needs to be installed
HTTPie needs to be installed

### Start the docker container
This will startup a docker container using the default configuration.  On port 8000 there is an HTTP listener with a SQL backend.
```docker
docker pull newque/newque
docker run -p 8000:8000 -p 8001:8001 -p 8005:8005 -d -t bradstimpson/newque-docker
```

#### Where to find more info?
Go to the newque docs:

### Write A Message
Using HTTPie let's write a series of messages to Newque:
`http POST localhost:8000/v1/example atomic:=true messages:='["abc","def","ghi"]' --json`

### Count the Stored Messages
Using HTTPie let's count how many messages are stored:
`http GET localhost:8000/v1/example/count`

Using curl

`curl -i "localhost:8000/v1/example/count"`

### Read the Stored Messages
This will read all the messages:
