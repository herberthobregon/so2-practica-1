# Modulos del Kernel

## Para instalar headers

```bash
uname -r
apt search linux-headers-$(uname -r)
# Descargar headers del módulo específico que tenemos
$ sudo apt install linux-headers-$(uname -r)

# Descargar build essentials, para compilar el código c
$ sudo apt install build-essential
```

## Comandos para los modulos

### Instalar y uso

```bash
cd ram
sudo rmmod ram.ko
make
sudo insmod ram.ko
cat /proc/mem_grupo1 
cd ..

cd procesos
sudo rmmod procesos.ko
make
sudo insmod procesos.ko
cat /proc/proces_grupo1 
cd ..

```

### Mostrar

```bash
dmesg
```

### eliminar

```bash
sudo rmmod ram.ko
pstree1
```
