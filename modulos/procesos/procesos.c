#include <linux/init.h>
#include <linux/module.h>
#include <linux/kernel.h>
#include <linux/proc_fs.h>
#include <linux/sched.h>
#include <linux/sched/signal.h>
#include <linux/uaccess.h>
#include <linux/slab.h>
#include <linux/fs.h>
#include <linux/sysinfo.h>
#include <linux/seq_file.h>
#include <linux/slab.h>
#include <linux/mm.h>
#include <linux/swap.h>


struct sysinfo i;

static int open_action(struct seq_file *m, void *v)
{

  struct task_struct *task;

  // seq_printf(m, "Pid,name,Usuario, State, RAM, Pid_Padre, Nombre_Padre\n");
  seq_printf(m, "[");
  si_meminfo(&i);
  for_each_process(task)
  {
    if (task->mm)
    {
      seq_printf(m, "{\"pid\":%d,\"name\":\"%s\",\"user\":%d,\"state\":%ld,\"ram\":%ld,\"pid_parent\":%d,\"parent_name\":\"%s\"},", task->pid, task->comm, task->cred->euid.val,  task->state, task->mm->total_vm, task->parent->pid, task->parent->comm);
    }
  }
  seq_printf(m, "]");

  return 0;
}

ssize_t write_proc(struct file *filp, const char *buf, size_t count, loff_t *offp)
{
  return 0;
}

int open_proc(struct inode *inode, struct file *file)
{
  return single_open(file, open_action, NULL);
}

static struct file_operations proc_fops = {
  read : seq_read,
  write : write_proc,
  open : open_proc,
  release : single_release,
  llseek : seq_lseek
};

static int __init proces_init(void)
{
  printk(KERN_INFO "Hola mundo, somos el grupo 1");

  struct proc_dir_entry *entry;
  entry = proc_create("proces_grupo1", 0777, NULL, &proc_fops);

  if (!entry)
  {
    return -1;
  }

  return 0;
}

static void __exit proces_exit(void)
{
  printk(KERN_INFO "Sayonara mundo, somos el grupo 1 y este fue el monitor de procesos");
  remove_proc_entry("proces_grupo1", NULL);
}

module_init(proces_init);
module_exit(proces_exit);

MODULE_LICENSE("GPL");