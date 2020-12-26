const shallowMenu = [
  {
    title: 'Dashboard',
    link: '/dashboard',
    children: [
      {
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
    children: [
      {
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
    children: [
      {
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
    children: [
      {
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

let element = `<ul>`
shallowMenu.forEach(item => {
  const checkDropdown = p => p > 0 ? 'dropdown' : ''

  element += `<li class="${item.title.toLowerCase()} ${checkDropdown(item.children.length)}"><a href="${item.link}">${item.title}</a>`

  if (item.children.length > 0) {
    let elementChild = '<i class="fas fa-angle-right"></i><ul>'
    item.children.forEach(itemChild => {
      elementChild += `<li><a href="${itemChild.link}">${itemChild.title}</a></li>`
  
    });
    elementChild += `</li></ul>`
    element += elementChild
  }
});
element += `</ul>`
document.getElementById('shallowMenu').innerHTML = element

window.onload = () => {
  const listItemDropdown = document.querySelectorAll('#shallowMenu .dropdown > i')

  for (let index = 0; index < listItemDropdown.length; index++) {
    listItemDropdown[index].addEventListener('click', function() {
      this.parentElement.classList.toggle('show')
    })
  }
}

