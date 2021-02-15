Para instalar headers
uname -r
apt search linux-headers-$(uname -r)


Comandos para los modulos

instalar
make
sudo insmod ram.ko

mostrar
dmesg

eliminar
sudo rmmod ram.ko
pstree1