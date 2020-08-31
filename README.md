# django_k8s

Sample guestbook app developed in django, react and nginx with kubernetes deployment files.

## k8s development
Apply all the files from [k8s/] directory:
```shell
kubectl apply -f .
```

## Local development
In the [code/] directory you can find docker compose files for local development.

__Build and run:__
```shell
docker-compose -f docker-compose.local.yaml build
docker-compose -f docker-compose.local.yaml up
```
An app is available at localhost on port 3000.

__or__
```shell
docker-compose build
docker-compose up
```
An app is available at localhost on port 80.

[k8s/]: <./k8s>
[code/]: <./code>

