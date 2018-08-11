// basic config
module.exports = {
	title: 'Yuzhang\'s Notes',
  	description: 'Yuzhang Huang\'s personal online notebook',
  	markdown: {
    lineNumbers: true, // 代码块显示行标
    displayAllHeaders: true, // 默认值：false
  },
  	themeConfig: {
  	// navbar: false,
 		lastUpdated: 'Last Updated', // string | boolean
  	/* navigation start */
    nav: [
    	{ text: 'Home', link: '/' },
    	{ text: 'JavaScript', link: '/js/'},
    	{ text: 'Python', link: '/python/'},
    	{ text: 'BA', link: '/ba/'},
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

    /* sidebar start*/
    sidebar: {
          '/ba/data-analytics/': sidebarDA('Data Analytics'),
          '/ba/': sidebarBA('Business Analytics'),
          '/python/': sidebarPython('Python'),
          '/js/': sidebarJS('JavaScript'),
          '/other/': sidebarOther('Other Notes'),
          '/sample/': sampleSidebar('Sample Sidebar'),
    }
    /* sidebar end*/
  }
}


function sidebarDA(title) {
return [
      ['', 'Data Analytics'], // first item
      {
        title: 'Lecture Notes',
        collapsable: false,
        children: [
          'ch1',
          'ch2',
        ]
      },
      {
        title: 'Problem Sets',
        collapsable: false,
        children: [
          'ps1',
          'ps2',
        ]
      },
      ['appendix','Appendix']
    ]
}

function sidebarBA (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'data-analytics/',
        'strategic-analysis/',
        'programming-for-business-analytics/',
      ]
    }
  ]
}

function sidebarPython (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'syntax',
      ]
    }
  ]
}

function sidebarJS (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'syntax',
      ]
    }
  ]
}

function sidebarOther (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'tolearn',
      ]
    }
  ]
}




function sampleSidebar(title) {
return [
      ['', 'Introduction'],
      {
        title: 'Chapter 1',
        collapsable: false,
        children: [
          'ch1/',
          'ch1/topic1',
          'ch1/topic2',
        ]
      },
      {
        title: 'Chapter 2',
        collapsable: false,
        children: [
          'ch2/',
          'ch2/topic1',
          'ch2/topic2',
        ]
      }
    ]
}