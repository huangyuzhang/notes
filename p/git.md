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
### 网站目录pull项目
之后我们进入网站所在根目录，以将存放在git仓库`home/git/myweb.git`的项目`pull`到网站服务器目录`/home/www/myweb.com`为例：
``` bash
$ cd /home/www/myweb.com
$ git pull myweb master
```