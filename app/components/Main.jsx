var React = require('react')

var Nav = require('./Nav')

var Main = (props) => {
  return(
    <div>
      <div>
        <div>
          <Nav />
          <p>Hei Hei hello</p>
          { props.children }
        </div>
      </div>
    </div>
  )
}

module.exports = Main
