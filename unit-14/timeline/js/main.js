const timeline = [
  {
    time: '1934',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem iste nihil ratione possimus, fugit eaque excepturi quisquam expedita quas, assumenda cupiditate ullam omnis delectus voluptatum rerum esse corrupti tempore quidem!'
  },
  {
    time: '1937',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem iste nihil ratione possimus, fugit eaque excepturi quisquam expedita quas, assumenda cupiditate ullam omnis delectus voluptatum rerum esse corrupti tempore quidem!'
  },
  {
    time: '1940',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem iste nihil ratione possimus, fugit eaque excepturi quisquam expedita quas, assumenda cupiditate ullam omnis delectus voluptatum rerum esse corrupti tempore quidem!'
  },
]

let element = ``
timeline.forEach(item => {
  element += `
    <div class='item'>
      <div class='item__hook'></div>
      <div class='item__content'>
        <h3>${item.time}</h3>
        <p>${item.description}</p>
      </div>
    </div>`
});

document.getElementById('timeline').innerHTML = element
