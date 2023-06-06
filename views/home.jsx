const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
            
              <h1>HOME</h1>
              <div>
                <img src='/images/bling-bling-dog.jpg'alt='Bling Bling Dog'/>
              </div>
              <div>
                Photo by <a href='AUTHOR_LINK'>Karsten Winegeart</a> on<a href='UNSPLASH_LINK'>Unsplash</a>
              </div>
              <a href = '/places'>
                <button className = 'btn-primary'> Places Page</button>
              </a>
          </main>
      </Def>
    )
  }
  

module.exports = home
