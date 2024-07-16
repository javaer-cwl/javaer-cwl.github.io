import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "实习两年半",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico'}],
  ],
  description: "做一个快乐的钓鱼佬🎣",
  themeConfig: {
    logo: '/favicon.ico',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'Docker笔记', link: '/docker/1.Docker安装' },
      { text: 'Linux运维', link: '/linux/基础命令/1.解压缩' },
      { text: '面试题', link: '/interview/redis/0.Redis异常' },
      {
        text: '常用框架',
        items:[
          {
            text:'Spring5',link:'/framework/spring5/1.spring5入门案例',
          },
          {
            text:'SpringBoot',link:'/12',
          },
          {
            text:'Mybatis/Plus',link:'/222',
          }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    // 多侧边栏
    sidebar:{
      '/interview/': [
        {
          text: 'Redis 面试全集',
          collapsed: false,
          items: [
            { text: '缓存异常', link: '/interview/redis/0.Redis异常' },
            { text: '主从、哨兵、集群', link: '/interview/redis/2.Redis' },
          ]
        }
      ],
      '/framework/spring5/': [
        {
          text: 'IOC xml bean管理',
          collapsed: true,
          items: [
            { text: 'Spring5入门案例', link: '/framework/spring5/1.spring5入门案例' },
            { text: 'IOC（xml bean 管理）创建对象，DI注入基本属性', link: '/framework/spring5/' },
            { text: 'IOC（xml bean 管理）注入null值和特殊符号', link: '/framework/spring5/' },
            { text: '04.IOC（xml bean 管理）注入内/外部bean、级联赋值、集合类型', link: '/framework/spring5/' },
            { text: 'IOC（xml bean 管理）FactoryBean', link: '/framework/spring5/' },
            { text: 'IOC（xml bean 管理）bean的作用域、生命周期', link: '/framework/spring5/' },
            { text: 'IOC（xml bean 管理）自动装配', link: '/framework/spring5/' },
            { text: 'IOC（xml bean 管理）外部属性文件', link: '/framework/spring5/' },
            { text: 'IOC (注解 bean 管理) 创建对象', link: '/framework/spring5/' },
            { text: 'IOC (注解 bean 管理) 注入属性', link: '/framework/spring5/' },
            { text: 'IOC (注解 bean 管理) 纯注解开发', link: '/framework/spring5/' },
          ]
        },
        {
          text: 'IOC注解实现',
          collapsed: true,
          items: [
            { text: 'IOC (注解 bean 管理) 创建对象', link: '/framework/spring5/' },
            { text: 'IOC (注解 bean 管理) 注入属性', link: '/framework/spring5/' },
            { text: 'IOC (注解 bean 管理) 纯注解开发', link: '/framework/spring5/' },
          ]
        },
        {
          text: 'AOP xml与注解',
          collapsed: true,
          items: [
            { text: 'AOP 基本概念、底层原理、术语', link: '/framework/spring5/' },
            { text: 'AOP 环境配置', link: '/framework/spring5/' },
            { text: 'AOP 操作（AspectJ 注解）常用', link: '/framework/spring5/' },
            { text: 'AOP 操作（AspectJ xml )', link: '/framework/spring5/' },
          ]
        }
      ],
      '/docker/': [
        {
          text: 'Docker精简笔记',
          collapsed: false,
          items: [
            { text: 'Docker 安装', link: '/docker/1.Docker安装' },
            { text: 'Docker 镜像', link: '/docker/2.Docker镜像' },
            { text: 'Docker 容器', link: '/docker/3.Docker容器' },
            { text: 'Docker 常用服务安装', link: '/docker/4.Docker常用服务安装' },
            { text: 'DockerFile', link: '/docker/5.DockerFile' },
            { text: 'DockerFile 实战', link: '/docker/6.DockerFile实战' },
            { text: 'Docker-Compose', link: '/docker/7.Docker-Compose' },
            { text: 'Docker-Compose 实战', link: '/docker/8.Docker-Compose 实战' },
          ]
        }
      ],
      '/linux/': [
        {
          text: '常用命令',
          collapsed: false,
          items: [
            { text: '压缩与解压', link: '/linux/基础命令/1.解压缩' },
            { text: '文件与目录', link: '/linux/基础命令/2.文件目录' },
            { text: '用户、用户组', link: '/linux/基础命令/3.解压缩' },
            { text: '文件权限', link: '111dfdd' },
            { text: 'Vim命令', link: '/linux/基础命令/4.解压缩' },
            { text: '磁盘管理', link: '/linux/基础命令/5.解压缩' },
            { text: '系统目录', link: '/linux/基础命令/6.解压缩' },
          ]
        },
        {
          text: '磁盘管理',
          collapsed: false,
          items: [
            { text: '相关命令', link: '/linux/基础命令/7.解压缩' },
            { text: '磁盘挂载', link: '/linux/基础命令/8.解压缩' },
            { text: '磁盘空间调节', link: '/linux/基础命令/9.解压缩' },
            { text: '磁盘格式化', link: '/linux/基础命令/10.解压缩' },
            { text: '磁盘分区', link: '/linux/基础命令/11.解压缩' },
          ]
        },
        {
          text: '其它',
          collapsed: false,
          items: [
            { text: '时间同步', link: '/linux/基础命令/12.解压缩' },
            { text: 'DNS配置', link: '/linux/基础命令/13.解压缩' },
            { text: '定时任务', link: '/linux/基础命令/14.解压缩' },
            { text: '守护进程', link: '/linux/基础命令/15.解压缩' },
            { text: '端口映射', link: '/linux/基础命令/15.解压缩' },
            { text: '防火墙', link: '/linux/基础命令/15.解压缩' },
          ]
        }
      ],
    },


    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
