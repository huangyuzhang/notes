---
title: git 服务器搭建
sidebar: auto
sidebarDepth: 2
footer: Copyright © 2018 Yuzhang Huang
---
# git 服务器搭建及配置
::: tip 代码规范
远程服务器命令前有符号“$”，本地服务器则没有
:::
## git 服务安装
下载git服务：[git官网](https://git-scm.com/downloads)

网站会自动检测你的操作系统匹配的版本，下载后按照引导进行安装即可；Linux系统通过命令行进行安装，如：
``` bash
$ yum install git
```
## git 操作指令
``` bash
# git 状态
git status

# git 状态
git status -s

# git 进入到指定分制
git checkout <branch>
```
## git 远程服务器配置及连接
由于 GitHub 的私有仓库收收费的，而如果我们并不想要开源当前的项目，我们就可以通过以下方法在服务器上建立一个私有的 git 仓库。

以本地编写的网站项目为例，以下教程将展示如何为现有项目创建 git 仓库，并推送至远程服务器的 git 仓库，最后再网站服务器下载存储在远程 git 仓库的网站项目。

（远程仓库和网站服务器不需要是同一台服务器）
### 远程 git 仓库创建
通过 ssh 连接服务器，假设已经有一个统一存放 git 库的父文件夹，位于`/home/git`，在其中为项目`myweb`创建一个 git 仓库 `myweb.git`。

目录结构为 `/home/git/myweb.git`。
``` bash
$ cd /home/git
$ mkdir myweb.git
$ cd myweb.git
$ git init --bare
```
::: tip
`git init`命令会在当前项目目录中创建一个`.git`文件夹作为当前项目的 git；

`git init --bare`命令直接将当前文件夹创建为 git 仓库，不会创建`.git`文件夹。
:::
#### 远程服务器允许接受push请求
``` bash
$ cd .git
$ vi config
```
添加一下代码：
```
[receive]
	denyCurrentBranch = ignore
```
### 本地 git 仓库创建
进入项目所在根目录，初始化 git 仓库。
``` bash
git init
```
将项目现有文件加入stage。
``` bash
git add .
```
提交当前更改。
``` bash
git commit -m "add git"
```
::: tip 为远程服务器地址设置别名
为远程服务器地址设置别名可以方便日后的连接。
``` bash
git remote add <name> <url>
```
如
``` bash
git remote add myweb ssh://ipaddress/path/myweb.git>
```
日后当需要连接到该服务器下的`myweb`git仓库时，只需要通过别名即可快速调用，如：
``` bash
git push myweb master
# 等同于
git push ssh://ipaddress/path/myweb.git master
```
查看该git仓库中已经保存的别名：
``` bash
git remote
```
:::
将项目`push`推送到远程服务器中指定的 git 仓库（项目别名设置参考上方提示）：
``` bash
git push <项目别名> master
```
### 网站服务器`pull`项目
之后我们进入网站所在根目录，以将存放在git仓库`home/git/myweb.git`的项目`pull`到网站服务器目录`/home/www/myweb.com`为例：
``` bash
$ cd /home/www/myweb.com
$ git pull myweb master
```
至此，我们就成功的将本地的项目存放到远程服务器的git仓库，并在远程服务器成功获取存放在git仓库中的项目。
### 流程化操作
日后即可按照以下操作快速将本地网站同步到网站服务器，以 vuepress 为例：
``` bash
# 本地 项目编辑完成
vuepress build . # vuepress 编译
git add . # stage 编译的文件
git commit -m "操作记录" # 提交修改并记录
git push myweb master # push 到远程 git 服务器
```
``` bash
# 网站服务器
$ cd /home/myweb.com # 进入网页服务器项目页面
$ git pull myweb master # 从远程 git 服务器 pull 项目文件
```
## 常见问题
### pull 冲突
``` bash
Please, commit your changes or stash them before you can merge.  
Aborting
```
这是由于远程库中的更改与本地的更改有冲突。
git的提示已经非常明确了，告诉我们要么把我们的更新进行commit要么就先stash本地更新。

第一种方法，stash：
``` bash
$ git stash
$ git pull
$ git stash pop
```

第二种方法：放弃本地的修改，直接覆盖
``` bash
git reset --hard
git pull myweb master
```
 
## 附录
Gogs提供类似于 GitHub 的开源服务，并且易于部署，项目地址：[Gogs：一款极易搭建的自助 Git 服务](https://gogs.io/)