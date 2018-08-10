---
title: ShadowsocksR 安装使用教程
sidebar: auto
sidebarDepth: 2
footer: Copyright © 2018 Yuzhang Huang
---
::: tip 使用前提
以下教程仅对在 Simon 处购买的 ShadowsocksR 账号设置有效，若没有账号，请联系微信：`yulone` 购买。

<img src="/img/201808/wechat-simon.jpg" alt="Simon微信" width=200>

&nbsp;
:::
# 科学上网安装使用教程
## 一、iOS 安装教程
### 下载 ShadowRocket
<img src="/img/201808/ss-ios-1.jpg" alt="ShadowRocket图标" class="appIcon">

* 【方法一】：（约需12~18元人民币）使用美区 Apple id 登录 Appstore，搜索 “ShadowRocket” 下载安装，或直接点击[这里](https://itunes.apple.com/us/app/shadowrocket/id932747118?mt=8)。
* 【方法二】：（免费）在电脑上下载“PP助手”（Windows及MacOS均支持），通过USB连接iPhone后给手机安装“ShadowRocket”。下载后不能直接打开，需要在手机“通用”->“设置”->“证书”中允许PP助手的证书，若打开app出现apple id账号密码输入框，则手机USB连上电脑，打开“PP助手”修复一下闪退。

### ShadowRocket 服务器设置
打开 ShadowRocket 应用程序，右上角“+”添加服务器，按照 Simon 发送的账号进行配置。
::: tip ShadowRocket 服务器配置
类型：`ShadowsocksR`<br />
服务器：`服务器IP`<br />
端口：`端口号`<br />
密码：`密码`<br />
算法：`none`<br />
混淆点进去（协议名称选择：`auth_chain_a`，内容留空；混淆名称选择：`plain`，内容留空）<br />
:::
#### 配置视频教程
`视频大小：1.2MB`

<video src="/img/201808/ss-ios-config.mp4" controls="controls"></video>

添加服务器完成后回到app“首页”，在顶部打开开关连接服务器。

设置完成。
## 二、MacOS安装教程
### 下载 ShadowsocksX-NG-R8
1. 下载地址：[http://yuns.co/f.php?k=bf0ae](http://yuns.co/f.php?k=bf0ae)
2. 下载后将 ”ShadowsocksX-NG-R8.app“ 拖入 ”应用程序“ 目录。
::: tip
若无法打开app，则需进入 ”系统偏好设置“ -> “安全性与隐私” 中允许打开从 “任何来源” 下载的应用。

如果没有这个选项，则需要打开“终端Terminal”应用，输入以下代码，按提示输入开机密码（输入密码时界面上不会出现星号替代符）后回车即会出现该选项。
```
sudo spctl --master-disable
```
:::
### ShadowsocksX-NG-R8设置
::: tip
安装后系统托盘中会出现小飞机，点击后可以先开启“登录时自动启动”使程序随系统启动。
:::

点击系统托盘中的小飞机图标，打开“服务器”->“服务器设置”来添加/配置服务器信息，根据 Simon 给你的账号信息填写即可。如下图：
![MacOS设置页面](/img/201808/ss-mac-1.jpg)
::: warning 注意
经常有同学在复制IP地址和端口号时会不小心复制出多行的情况，如果设置后不能访问可以在每个输入框按键盘上下键”↑↓“删除多余内容。你也可以点左侧服务器列表下方的”+“来重新填写一遍。
:::

设置完成。
## 三、Windows安装教程
### 下载 ShadowsocksR
下载地址：[http://yuns.co/f.php?k=67945](http://yuns.co/f.php?k=67945)
::: tip
此版本提供2.0及4.0版本，4.0版本需要.NET Framework 4.0，如果计算机无法安装，可以使用2.0版本。
:::
### 服务器配置
右键点击桌面系统托盘中的小飞机，配置服务器，按照 Simon 提供的服务器及账号、端口信息进行配置即可。
::: warning
Windows系统不可安装诸如“360安全卫士”、“腾讯电脑管家”、“360杀毒”等流氓监控软件。

若电脑需要安全监测及杀毒软件，推荐安装：[火绒安全](https://www.huorong.cn)。
:::

## 四、连接模式说明
### PAC（配置）模式
简单的来说，PAC模式指的国内无法访问的网站流量自动走代理，国内可以直连的网站则不会走代理。
### 全局（代理）模式
全局模式则是将所有的流量都走代理，这样可能会造成国内网站访问速度变慢。不过可以解决所需访问网站不在PAC地址库中的情况。
## 五、服务使用规则（必看）
服务是廉价提供给大家提供方便的，请尊重其他一同使用的用户及服务提供商，不要违反使用规则让上网变得越来越难。请各位使用遵守以下规则。
::: tip Shadowsocks 服务使用规则
1. 服务仅限个人使用，可在同一人的手机、电脑上使用，不可转借他人使用。如果有朋友也要合租，欢迎邀请一起合租；
2. 不可通过服务进行诸如bt下载、挂机等消耗服务资源的服务；
2. 不可长时间使用下载、高清视频等占用大量带宽的服务（如有此类需求，可以联系 Simon 购买独立服务器）；
3. Windows系统不可安装诸如“360安全卫士”、“腾讯电脑管家”、“360杀毒”等流氓监控软件；
4. 服务不可用于违反中国法律及有违伦理道德等目的；
:::

::: danger
服务器均安装监测软件，违反以上任何使用规则直接删除账号，不做任何退款！
:::
## 附：获取帮助
配置过程中遇到其他问题，或在使用中遇到任何问题请联系 Simon 微信：`yulone`