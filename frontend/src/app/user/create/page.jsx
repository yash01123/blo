import React from 'react'


const create = () => {
  return (
    <div>
      <h2 className='text-white text-xl mx-4 uppercase' >Create Blog</h2>
      <br />
      <h5 className='mx-4 text-white'>Category</h5>
    <div className="dropdown">
  <a
    className="btn btn-secondary dropdown-toggle"
    href="#"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Dropdown link
  </a>
  <ul className="dropdown-menu">
    <li>
      <a className="dropdown-item" href="#">
        Action
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
        Another action
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#">
        Something else here
      </a>
    </li>
  </ul>
</div>

    </div>
  )
}

export default create
