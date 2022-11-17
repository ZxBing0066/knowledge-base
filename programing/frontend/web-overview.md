# 一个 Web 站点涉及到哪些东西

## Git 托管

### 公共

-   GitHub
-   GitLab
-   BitBucket

### 自建

-   GitLab
-   GitBucket
-   Gitea
-   Girret

## CI/CD

### 开源

-   GitHub Actions
-   Circle CI
-   Travis CI

### 自建

-   GitLab CI
-   Jenkins

## DDoS

### 什么是 DDoS

-   DDoS 是指攻击者通过发送海量的请求，将服务器资源耗尽，导致正常请求无法正常抵达的一系列攻击方式。
-   一般会攻击目标服务器的域名或者直接通过 IP 攻击

-   https://www.akamai.com/zh/our-thinking/ddos?vid=october-2018-release-security-animation

### DDoS 防护

-   一定要注意保护源 IP 不泄漏，一旦源 IP 泄漏后即可直接通过 IP 进行 DDoS 攻击，防护难度会大大增加
-   通过 CDN 可防护一定程度攻击
-   通过 WAF 保护 IP 不泄漏
-   通过高防服务防护
-   通过服务扩容增加抗击能力
