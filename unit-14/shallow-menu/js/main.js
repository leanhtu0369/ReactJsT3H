const shallowMenu = [{
    title: 'Dashboard',
    link: '/dashboard',
    children: [{
        title: 'Tool',
        link: '/dashboard/tool'
      },
      {
        title: 'Reports',
        link: '/dashboard/reports'
      },
      {
        title: 'Analytics',
        link: '/dashboard/analytics'
      },
      {
        title: 'Code Blocks',
        link: '/dashboard/code-blocks'
      },
    ]
  },
  {
    title: 'Sales',
    link: '/sales',
    children: [{
        title: 'New Sales',
        link: '/sales/new-sales'
      },
      {
        title: 'Expired Sales',
        link: '/sales/expired-sales'
      },
      {
        title: 'Sales Reports',
        link: '/sales/sales-reports'
      },
      {
        title: 'Deliveries',
        link: '/sales/deliveries'
      },
    ]
  },
  {
    title: 'Messages',
    link: '/messages',
    children: [{
        title: 'Inbox',
        link: '/messages/inbox'
      },
      {
        title: 'Outbox',
        link: '/messages/outbox'
      },
      {
        title: 'Sent',
        link: '/messages/sent'
      },
      {
        title: 'Archived',
        link: '/messages/archived'
      },
    ]
  },
  {
    title: 'Users',
    link: '/users',
    children: [{
        title: 'New User',
        link: '/users/new-user'
      },
      {
        title: 'User Groups',
        link: '/users/user-groups'
      },
      {
        title: 'Permissions',
        link: '/users/permissions'
      },
      {
        title: 'passwords',
        link: '/users/passwords'
      },
    ]
  },
  {
    title: 'Settings',
    link: '/settings',
    children: [
      // {
      //   title: 'Databases',
      //   link: '/settings/databases'
      // },
      // {
      //   title: 'Design',
      //   link: '/settings/design'
      // },
      // {
      //   title: 'Change User',
      //   link: '/settings/change-user'
      // },
      // {
      //   title: 'Log Out',
      //   link: '/settings/log-out'
      // },
    ]
  },
]

const render = arr => {
  const menu = document.getElementById('shallowMenu')

  const ulParent = document.createElement('ul')

  arr.forEach(item => {
    const liParent = document.createElement('li')
    liParent.setAttribute('class', `${ item.title.toLowerCase() } dropdown`)

    const aParent = document.createElement('a')
    aParent.setAttribute('href', item.link)
    aParent.innerText = item.title

    const iParent = document.createElement('i')
    iParent.setAttribute('class', 'fas fa-angle-right')
    iParent.addEventListener('click', () => {
      toogleMenu(iParent)
    })

    liParent.appendChild(aParent)
    liParent.appendChild(iParent)

    if (Array.isArray(item.children)) {
      const ulChild = document.createElement('ul')

      item.children.forEach(child => {
        const liChild = document.createElement('li')

        const aChild = document.createElement('a')
        aChild.setAttribute('href', child.link)
        aChild.innerText = child.title

        liChild.appendChild(aChild)
        ulChild.appendChild(liChild)
      })

      liParent.appendChild(ulChild)
    }

    ulParent.appendChild(liParent)
  })

  menu.appendChild(ulParent)
}

render(shallowMenu)

window.onload = () => {
  const listItemDropdown = document.querySelectorAll('#shallowMenu .dropdown > i')

  for (let index = 0; index < listItemDropdown.length; index++) {
    listItemDropdown[index].addEventListener('click', function () {
      this.parentElement.classList.toggle('show')
    })
  }
}
