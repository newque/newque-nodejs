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
Go to the newque docs: https://newque.github.io/
How to use HTTPie: https://httpie.org/doc

### Write A Message
Using HTTPie let's write a series of messages to Newque:
`http POST localhost:8000/v1/example atomic:=true messages:='["abc","def","ghi"]' --json`

### Count the Stored Messages
Using HTTPie let's count how many messages are stored:
`http GET localhost:8000/v1/example/count`

Using curl

`curl -i "localhost:8000/v1/example/count"`

### Read the Stored Messages
This will read one message (the first stored) using HTTPie:
`http GET localhost:8000/v1/example 'newque-mode:one'`

Using curl:
`curl -i "localhost:8000/v1/example" -H "newque-mode:one"`

To extract multiple messages at once:
`http GET localhost:8000/v1/example 'newque-mode:many 2'`

To extract after a specific ID:
`http GET localhost:8000/v1/example 'newque-mode:after_id e28e1e86-f925-4922-9c62-30d57ebb7a62'`
