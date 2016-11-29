var linux_commands=[{"n":"alias","p":"/alias","d":"\r用来设置指令的别名"},{"n":"apachectl","p":"/apachectl","d":"\rApache服务器前端控制工具"},{"n":"arch","p":"/arch","d":"\r显示当前主机的硬件架构类型"},{"n":"arpwatch","p":"/arpwatch","d":"\r监听网络上ARP的记录"},{"n":"badblocks","p":"/badblocks","d":"\r查找磁盘中损坏的区块"},{"n":"bind","p":"/bind","d":"\r显示或设置键盘按键与其相关的功能"},{"n":"bunzip2","p":"/bunzip2","d":"\r创一个bz2文件压缩包"},{"n":"bzip2","p":"/bzip2","d":"\r将文件压缩成bz2格式"},{"n":"bzip2recover","p":"/bzip2recover","d":"\r恢复被破坏的.bz2压缩包中的文件"},{"n":"cat","p":"/cat","d":"显示文件的内容。"},{"n":"cd","p":"/cd","d":"\r切换用户当前工作目录"},{"n":"chattr","p":"/chattr","d":"\r用来改变文件属性"},{"n":"chfn","p":"/chfn","d":"\r用来改变finger命令显示的信息"},{"n":"chgrp","p":"/chgrp","d":"\r用来变更文件或目录的所属群组"},{"n":"chkconfig","p":"/chkconfig","d":"\r检查或设置系统的各种服务"},{"n":"chmod","p":"/chmod","d":"\r用来变更文件或目录的权限"},{"n":"chown","p":"/chown","d":"\r用来变更文件或目录的拥有者或所属群组"},{"n":"chroot","p":"/chroot","d":"\r把根目录换成指定的目的目录"},{"n":"chsh","p":"/chsh","d":"\r用来更换登录系统时使用的shell"},{"n":"cksum","p":"/cksum","d":"\r检查文件的CRC是否正确"},{"n":"cmp","p":"/cmp","d":"\r比较两个文件是否有差异"},{"n":"col","p":"/col","d":"\r过滤控制字符"},{"n":"colrm","p":"/colrm","d":"\r删除文件中的指定列"},{"n":"comm","p":"/comm","d":"\r两个文件之间的比较"},{"n":"compress","p":"/compress","d":"\r使用Lempress-Ziv编码压缩数据文件"},{"n":"cp","p":"/cp","d":"将一个或多个源文件或者目录复制到指定的目的文件或目录。"},{"n":"cpio","p":"/cpio","d":"\r用来建立、还原备份档的工具程序"},{"n":"crontab","p":"/crontab","d":"\r提交和管理用户的需要周期性执行的任务"},{"n":"csplit","p":"/csplit","d":"\r将一个大文件分割成小的碎片文件"},{"n":"cut","p":"/cut","d":"\r连接文件并打印到标准输出设备上"},{"n":"date","p":"/date","d":"\r显示或设置系统时间与日期"},{"n":"dd","p":"/dd","d":"\r复制文件并对原文件的内容进行转换和格式化处理"},{"n":"declare","p":"/declare","d":"\r声明或显示shell变量"},{"n":"depmod","p":"/depmod","d":"\r分析可载入模块的相依性"},{"n":"df","p":"/df","d":"\r显示磁盘的相关信息"},{"n":"diff","p":"/diff","d":"\r比较给定的两个文件的不同"},{"n":"diffstat","p":"/diffstat","d":"\r显示diff命令输出信息的柱状图"},{"n":"dircolors","p":"/dircolors","d":"\r置ls命令在显示目录或文件时所用的色彩"},{"n":"dirs","p":"/dirs","d":"\r显示目录记录"},{"n":"dmesg","p":"/dmesg","d":"\r显示Linux系统启动信息"},{"n":"du","p":"/du","d":"\r显示每个文件和目录的磁盘使用空间"},{"n":"dump","p":"/dump","d":"\r用于备份ext2或者ext3文件系统"},{"n":"e2fsck","p":"/e2fsck","d":"\r用于检查第二扩展文件系统的完整性"},{"n":"ed","p":"/ed","d":"\r单行纯文本编辑器"},{"n":"edquota","p":"/edquota","d":"\r用于编辑指定用户或工作组磁盘配额"},{"n":"egrep","p":"/egrep","d":"\r在文件内查找指定的字符串"},{"n":"eject","p":"/eject","d":"\r用来退出抽取式设备"},{"n":"elm","p":"/elm","d":"\r纯文本邮件客户端程序"},{"n":"enable","p":"/enable","d":"\r启动或关闭shell内建命令"},{"n":"ex","p":"/ex","d":"\r启动vim编辑器的ex编辑模式"},{"n":"exit","p":"/exit","d":"\r退出当前的shell"},{"n":"export","p":"/export","d":"\r设置或显示系统环境变量"},{"n":"fdisk","p":"/fdisk","d":"\r查看磁盘使用情况和磁盘分区"},{"n":"fgrep","p":"/fgrep","d":"\r为文件搜索文字字符串"},{"n":"file","p":"/file","d":"\r用来探测给定文件的类型。"},{"n":"find","p":"/find","d":"\r在指定目录下查找文件"},{"n":"finger","p":"/finger","d":"\r用于查找并显示用户信息"},{"n":"fmt","p":"/fmt","d":"\r读取文件后优化处理并输出"},{"n":"fold","p":"/fold","d":"\r控制文件内容输出时所占用的屏幕宽度"},{"n":"free","p":"/free","d":"\r显示内存的使用情况"},{"n":"fsck","p":"/fsck","d":"\r检查并且试图修复文件系统中的错误"},{"n":"ftp","p":"/ftp","d":"\r用来设置文件系统相关功能"},{"n":"ftpcount","p":"/ftpcount","d":"\r显示目前已FTP登入的用户人数"},{"n":"ftpshut","p":"/ftpshut","d":"\r在指定的时间关闭FTP服务器"},{"n":"ftpwho","p":"/ftpwho","d":"\r显示当前每个ftp会话信息"},{"n":"grep","p":"/grep","d":"\r强大的文本搜索工具"},{"n":"groupdel","p":"/groupdel","d":"\r用于删除指定的工作组"},{"n":"groupmod","p":"/groupmod","d":"\r更改群组识别码或名称"},{"n":"grpconv","p":"/grpconv","d":"\r用来开启群组的投影密码"},{"n":"grpunconv","p":"/grpunconv","d":"\r用来关闭群组的投影密码"},{"n":"gunzip","p":"/gunzip","d":"\r用来解压缩文件"},{"n":"gzexe","p":"/gzexe","d":"\r用来压缩可执行文件"},{"n":"gzip","p":"/gzip","d":"\r用来压缩文件"},{"n":"halt","p":"/halt","d":"\r关闭正在运行的Linux操作系统"},{"n":"hdparm","p":"/hdparm","d":"\r显示与设定硬盘的参数"},{"n":"hwclock","p":"/hwclock","d":"\r显示与设定硬件时钟"},{"n":"id","p":"/id","d":"\r显示用户的ID以及所属群组的ID"},{"n":"ifconfig","p":"/ifconfig","d":"\r配置和显示Linux系统网卡的网络参数"},{"n":"indent","p":"/indent","d":"\r格式化C语言的源文件"},{"n":"insmod","p":"/insmod","d":"\r将给定的模块加载到内核中"},{"n":"ispell","p":"/ispell","d":"\r检查文件中出现的拼写错误"},{"n":"jed","p":"/jed","d":"\r主要用于编辑代码的编辑器"},{"n":"joe","p":"/joe","d":"\r强大的纯文本编辑器"},{"n":"join","p":"/join","d":"\r两个文件中指定栏位内容相同的行连接起来"},{"n":"kill","p":"/kill","d":"\r删除执行中的程序或工作"},{"n":"last","p":"/last","d":"\r列出目前与过去登入系统的用户相关信息"},{"n":"lastb","p":"/lastb","d":"\r列出登入系统失败的用户相关信息"},{"n":"lha","p":"/lha","d":"\r压缩或解压缩lzh格式文件"},{"n":"lilo","p":"/lilo","d":"\r安装核心载入开机管理程序"},{"n":"ln","p":"/ln","d":"\r用来为文件创件连接"},{"n":"login","p":"/login","d":"\r登录系统或切换用户身份"},{"n":"logname","p":"/logname","d":"\r用来显示用户名称"},{"n":"logout","p":"/logout","d":"\r退出当前登录的Shell"},{"n":"logrotate","p":"/logrotate","d":"\r统日志进行轮转、压缩和删除"},{"n":"look","p":"/look","d":"\r显示文件中以指定字符串开头的任意行"},{"n":"losetup","p":"/losetup","d":"\r设定与控制循环（loop）设备"},{"n":"ls","p":"/ls","d":"显示目标列表"},{"n":"lsattr","p":"/lsattr","d":"\r查看文件的第二扩展文件系统属性"},{"n":"lsmod","p":"/lsmod","d":"\r显示已载入系统的模块"},{"n":"mail","p":"/mail","d":"\r命令行下发送和接收电子邮件"},{"n":"mailq","p":"/mailq","d":"\r显示待发送的邮件队列"},{"n":"mesg","p":"/mesg","d":"\r设置当前终端的写权限"},{"n":"mkbootdisk","p":"/mkbootdisk","d":"\r可建立目前系统的启动盘"},{"n":"mkdir","p":"/mkdir","d":"\r用来创建目录"},{"n":"mke2fs","p":"/mke2fs","d":"\r创建磁盘分区上的“etc2/etc3”文件系统"},{"n":"mkfs","p":"/mkfs","d":"\r用于在设备上创建Linux文件系统"},{"n":"mkinitrd","p":"/mkinitrd","d":"\r建立要载入ramdisk的映像文件"},{"n":"mkisofs","p":"/mkisofs","d":"\r建立ISO 9660映像文件"},{"n":"mkswap","p":"/mkswap","d":"\r建立和设置SWAP交换分区"},{"n":"mktemp","p":"/mktemp","d":"\r创建临时文件供shell脚本使用"},{"n":"modprobe","p":"/modprobe","d":"\r自动处理可载入模块"},{"n":"mtools","p":"/mtools","d":"\r显示mtools支持的指令"},{"n":"mv","p":"/mv","d":"文件或目录重新命名和移动。"},{"n":"ncftp","p":"/ncftp","d":"\r是增强的的FTP工具"},{"n":"netstat","p":"/netstat","d":"\r查看Linux中网络系统状态信息"},{"n":"nice","p":"/nice","d":"\r改变程序执行的优先权等级"},{"n":"ntsysv","p":"/ntsysv","d":"\r集中管理系统的各种服务"},{"n":"od","p":"/od","d":"\r输出文件的八进制、十六进制等格式编码的字节"},{"n":"passwd","p":"/passwd","d":"\r用于让用户可以更改自己的密码"},{"n":"paste","p":"/paste","d":"\r将多个文件按列队列合并"},{"n":"patch","p":"/patch","d":"\r为开放源代码软件安装补丁程序"},{"n":"pico","p":"/pico","d":"\r功能强大全屏幕的文本编辑器"},{"n":"ping","p":"/ping","d":"\r测试主机之间网络的连通性"},{"n":"ps","p":"/ps","d":"\r报告当前系统的进程状态"},{"n":"pstree","p":"/pstree","d":"\r以树状图的方式展现进程之间的派生关系"},{"n":"pwconv","p":"/pwconv","d":"\r用来开启用户的投影密码"},{"n":"pwd","p":"/pwd","d":"以绝对路径的方式显示用户当前工作目录。"},{"n":"pwunconv","p":"/pwunconv","d":"\r用来关闭用户的投影密码"},{"n":"quota","p":"/quota","d":"\r显示磁盘已使用的空间与限制"},{"n":"quotacheck","p":"/quotacheck","d":"\r检查磁盘的使用空间与限制"},{"n":"quotaoff","p":"/quotaoff","d":"\r关闭Linux内核中指定文件系统的磁盘配额功能"},{"n":"quotaon","p":"/quotaon","d":"\r激活Linux内核中指定文件系统的磁盘配额功能"},{"n":"rcp","p":"/rcp","d":"\r使在两台Linux主机之间的文件复制操作更简单"},{"n":"reboot","p":"/reboot","d":"\r重新启动正在运行的Linux操作系统"},{"n":"renice","p":"/renice","d":"\r修改正在运行的进程的调度优先级"},{"n":"repquota","p":"/repquota","d":"\r报表的格式输出磁盘空间限制的状态"},{"n":"restore","p":"/restore","d":"\r所进行的操作和dump指令相反"},{"n":"rlogin","p":"/rlogin","d":"\r从当前终端登录到远程Linux主机"},{"n":"rm","p":"/rm","d":"\r用于删除给定的文件和目录"},{"n":"rmdir","p":"/rmdir","d":"\r用来删除空目录"},{"n":"rmmod","p":"/rmmod","d":"\r从运行的内核中移除指定的内核模块"},{"n":"rpm","p":"/rpm","d":"\rRPM软件包的管理工具"},{"n":"rsh","p":"/rsh","d":"\r连接远程主机并执行命令"},{"n":"screen","p":"/screen","d":"\r用于命令行终端切换"},{"n":"sed","p":"/sed","d":"\r功能强大的流式文本编辑器"},{"n":"set","p":"/set","d":"\r显示或设置shell特性及shell变量"},{"n":"shutdown","p":"/shutdown","d":"\r用来执行系统关机的命令"},{"n":"smbclient","p":"/smbclient","d":"\r交互方式访问samba服务器"},{"n":"sort","p":"/sort","d":"\r将文件进行排序并输出"},{"n":"spell","p":"/spell","d":"\r对文件进行拼写检查"},{"n":"split","p":"/split","d":"\r分割任意大小的文件"},{"n":"startx","p":"/startx","d":"\r用来启动X Window"},{"n":"stat","p":"/stat","d":"\r用于显示文件的状态信息"},{"n":"su","p":"/su","d":"\r用于切换当前用户身份到其他用户身份"},{"n":"sudo","p":"/sudo","d":"\r以其他身份来执行命令"},{"n":"swapoff","p":"/swapoff","d":"\r关闭指定的交换空间"},{"n":"swapon","p":"/swapon","d":"\r激活Linux系统中交换空间"},{"n":"sync","p":"/sync","d":"\r用于强制被改变的内容立刻写入磁盘"},{"n":"talk","p":"/talk","d":"\r让用户和其他用户聊天"},{"n":"tar","p":"/tar","d":"\rLinux下的归档使用工具，用来打包和备份。"},{"n":"tcpdump","p":"/tcpdump","d":"\r一款sniffer工具"},{"n":"tee","p":"/tee","d":"\r把数据重定向到给定文件和屏幕上"},{"n":"telnet","p":"/telnet","d":"\r登录远程主机和管理"},{"n":"tftp","p":"/tftp","d":"\r在本机和tftp服务器之间使用TFTP协议传输文件"},{"n":"tload","p":"/tload","d":"\r显示系统负载状况"},{"n":"top","p":"/top","d":"\r显示或管理执行中的程序"},{"n":"touch","p":"/touch","d":"\r创建新的空文件"},{"n":"tr","p":"/tr","d":"\r将字符进行替换压缩和删除"},{"n":"traceroute","p":"/traceroute","d":"\r显示数据包到主机间的路径"},{"n":"tree","p":"/tree","d":"以树状图列出目录的内容"},{"n":"ulimit","p":"/ulimit","d":"\r控制shell程序的资源"},{"n":"umask","p":"/umask","d":"\r用来设置限制新建文件权限的掩码"},{"n":"umount","p":"/umount","d":"\r用于卸载已经加载的文件系统"},{"n":"unalias","p":"/unalias","d":"\r删除由alias设置的别名"},{"n":"uname","p":"/uname","d":"\r显示Linux系统信息"},{"n":"unarj","p":"/unarj","d":"\r解压缩由arj命令创建的压缩包"},{"n":"uniq","p":"/uniq","d":"\r报告或忽略文件中的重复行"},{"n":"unset","p":"/unset","d":"\r删除指定的shell变量或函数"},{"n":"unzip","p":"/unzip","d":"\r用于解压缩由zip命令压缩的压缩包"},{"n":"useradd","p":"/useradd","d":"\r创建的新的系统用户"},{"n":"userdel","p":"/userdel","d":"\r用于删除给定的用户以及与用户相关的文件"},{"n":"usermod","p":"/usermod","d":"\r用于修改用户的基本信息"},{"n":"w","p":"/w","d":"\r显示目前登入系统的用户信息"},{"n":"wall","p":"/wall","d":"\r向系统当前所有打开的终端上输出信息"},{"n":"wc","p":"/wc","d":"\r统计文件的字节数、字数、行数"},{"n":"whereis","p":"/whereis","d":"\r查找二进制程序、代码等相关文件路径"},{"n":"which","p":"/which","d":"\r查找并显示给定命令的绝对路径"},{"n":"who","p":"/who","d":"\r显示目前登录系统的用户信息"},{"n":"whoami","p":"/whoami","d":"\r打印当前有效的用户名称"},{"n":"write","p":"/write","d":"\r向指定登录用户终端上发送信息"},{"n":"xlsatoms","p":"/xlsatoms","d":"\r列出X服务器内部所有定义的原子成分"},{"n":"xlsclients","p":"/xlsclients","d":"\r列出显示器中的客户端应用程序"},{"n":"xlsfonts","p":"/xlsfonts","d":"\r列出X Server使用的字体"},{"n":"zip","p":"/zip","d":"\r可以用来解压缩文件"},{"n":"zipinfo","p":"/zipinfo","d":"\r用来列出压缩文件信息"}]