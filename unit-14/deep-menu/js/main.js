const deepMenu = [
  {
    title: 'Home',
    subTitle: 'sweet home',
    link: '/home',
    icon: 'fa fa-home',
  },
  {
    title: 'Home',
    subTitle: 'About us',
    link: '/about-us',
    icon: 'fa fa-edit',
    isActive: true
  },
  {
    title: 'Features',
    subTitle: 'sweet home',
    link: '/features',
    icon: 'fa fa-gift',
  },
  {
    title: 'News',
    subTitle: 'sweet home',
    link: '/news',
    icon: 'fa fa-globe',
  },
  {
    title: 'Blog',
    subTitle: 'what they say',
    link: '/blog',
    icon: 'fa fa-comments',
    children: [
      {
        title: 'Mission',
        link: '/blog/mission',
        icon: 'fa fa-globe',
      },
      {
        title: 'Our Team',
        link: '/blog/our-team',
        icon: 'fa fa-users',
        children: [
          {
            title: 'Leyla Sparks',
            link: '/blog/our-team/leyla-sparks',
            icon: 'fa fa-female',
          },
          {
            title: 'Gleb Ismailov',
            link: '/blog/our-team/gleb-ismailov',
            icon: 'fa fa-male',
            children: [
              {
                title: 'About',
                link: '/blog/our-team/gleb-ismailov/about',
                icon: 'fa fa-leaf',
              },
              {
                title: 'Skills',
                link: '/blog/our-team/gleb-ismailov/skills',
                icon: 'fa fa-tasks',
              }
            ]
          },
          {
            title: 'Viktoria Gibbers',
            link: '/blog/our-team/viktoria-gibbers',
            icon: 'fa fa-female',
          },
        ]
      },
    ]
  },
  {
    title: 'Portfolio',
    subTitle: 'sweet home',
    link: '/portfolio',
    icon: 'far fa-image',
  },
  {
    title: 'Contacts',
    subTitle: 'drop a line',
    link: '/contacts',
    icon: 'fa fa-envelope',
  },
]

const renderDeepMenu = (parent,arr) => {

  const ul = document.createElement('ul')

  arr.forEach(item => {
    const li = document.createElement('li')

    const a = document.createElement('a')
    a.setAttribute('href', item.link)

    const i = document.createElement('i')
    i.setAttribute('class', item.icon)

    const span = document.createElement('span')
    span.innerText = item.title

    if (item.subTitle) {
      const small = document.createElement('small')
      small.innerText = item.subTitle
      span.appendChild(small)
    }

    li.appendChild(a)
    a.appendChild(i)
    a.appendChild(span)

    item.isActive ? li.setAttribute('class', 'active') : ''
    
    if (Array.isArray(item.children)) {
      li.setAttribute('class', 'dropdown')
      renderDeepMenu(li,item.children)
    }

    ul.appendChild(li)
  })

  parent.appendChild(ul)
}

const render = () => {
  const menu = document.getElementById('deepMenu')
  renderDeepMenu(menu, deepMenu)
}

render()
