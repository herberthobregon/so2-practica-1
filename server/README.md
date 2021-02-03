# Go 


## Prerequisitos

### Agregar variables de entorno
Agregar la siguiente variable de entorno al ~/.bashrc o ~/.zshrc
```bash
export GO111MODULE=on
export NODE_ENV=dev
```

## Ejeccución en local
Para ejecutar el servidor se hace de la siguiente forma
```bash
# instalación de dependencias
go get

# Correr el servidor en el puerto :3000
go run server.go
```

## Preparación durante el desarrollo
### Instalar protoc-gen-go

```bash
brew install protobuf
brew install protoc-gen-go
protoc --go_out=plugins=grpc:. grcpclient/mcache.proto 
protoc -I proto --go_out=plugins=grpc:grpc proto/*.proto 
```

Una vez instalador para crear el projecto/modulo debemos ejecutar el siguiente comando
```bash
go mod init <nombre_de_tu_projecto>
```


