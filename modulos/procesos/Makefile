obj-m := proces_grupo1.o

KDIR    := /lib/modules/$(shell uname -r)/build
VERBOSE = 0

all:
	$(MAKE) -C $(KDIR) M=$(PWD) KBUILD_VERBOSE=$(VERBOSE) CONFIG_DEBUG_INFO=y modules

clean:
	rm -f *.o *.ko *.mod.c Module.symvers modules.order

test:
	sudo dmesg -C
	sudo insmod proces_grupo1.ko
	sudo rmmod proces_grupo1.ko
	dmesg