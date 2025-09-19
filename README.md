# Endpoint Testing

    curl localhost:8080/foo
    # -> bar
    
    curl -H "Accept: application/json" -H "Content-Type: application/json" -X POST --data '{"name": "Alan"}' localhost:8080/hello
    # -> Hello Alan!
    
    curl localhost:8080/kill
    # -> shuts down container
