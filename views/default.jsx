const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel= 'stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css'/>
                <link rel="stylesheet" href="/css/style.css" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css" integrity="sha384-b6lVK+yci+bfDmaY1u0zE8YYJt0TZxLEAFyYSLHId4xoVvsrQu3INevFKo+Xir8e" crossOrigin="anonymous"/>
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='/places'>Places</a>
                        </li>
                        <li>
                            <a href='/places/new'>Add Places</a>
                        </li>

                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
  }
  

module.exports = Def
