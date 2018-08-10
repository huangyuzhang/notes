// basic config
module.exports = {
	title: 'Yuzhang\'s Notes',
  	description: 'Yuzhang Huang\'s personal online notebook',
  	markdown: {
    lineNumbers: true // 代码块显示行标
  },
  	themeConfig: {
  	// navbar: false,
 		lastUpdated: 'Last Updated', // string | boolean
  		displayAllHeaders: true, // 默认值：false
  	/* navigation start */
    nav: [
    	{ text: 'Home', link: '/' },
    	{ text: 'JavaScript', link: '/js/'},
    	{ text: 'Python', link: '/python/'},
    	{ text: 'Business Analytics', link: '/ba/'},
      	{
        	text: 'Others',
        	items: [
        		{ text: '', items: [
        		  { text: 'Other Notes', link: '/other/' },
              { text: 'About me', link: '/about/'}
     				] 
     			},
     			{ text: 'External', items: [
        	    { text: '热带鱼', link: 'https://www.51redaiyu.com' },
     			    { text: '爱鱼客', link: 'http://www.iyu.co' }
     				] 
     			}
        	]
      	} 
    ],
    /* navigation end */

    /* sidebar satrt */
    sidebar: {
      '/note': [
        {
          title:'前端',
          collapsable: true,
          children:[
            '/notes/frontEnd/VueJS组件编码规范',
            '/notes/frontEnd/vue-cli脚手架快速搭建项目',
            '/notes/frontEnd/深入理解vue中的slot与slot-scope',
            '/notes/frontEnd/webpack入门',
            '/notes/frontEnd/PWA介绍及快速上手搭建一个PWA应用',
          ]
        },
        {
          title:'后端',
          collapsable: true,
          children:[
            'notes/backEnd/nginx入门',
            'notes/backEnd/CentOS如何挂载磁盘',
          ]
        },
      ],
    },
    /* sidebar end */

  }
}


function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'basic-config',
        'assets',
        'markdown',
        'using-vue',
        'custom-themes',
        'i18n',
        'deploy'
      ]
    }
  ]
}