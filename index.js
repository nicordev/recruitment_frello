const path = require('path')

// Require Provider 
const LTI = require('ltijs').Provider

// Configure provider
const lti = new LTI('EXAMPLEKEY', 
            { url: 'mongodb://127.0.0.1:27017/lti' }, 
            { appUrl: '/', loginUrl: '/login', logger: true })


let setup = async () => {
  // Deploy and open connection to the database
  await lti.deploy()

  // Register platform
  let plat = await lti.registerPlatform({ 
    url: 'https://moodle.test',
    name: 'Frello moodle test',
    clientId: '2o3PuOqqDCZq3Tb',
    authenticationEndpoint: 'https://moodle.test/mod/lti/auth.php',
    accesstokenEndpoint: 'https://moodle.test/mod/lti/token.php',
    authConfig: { method: 'JWK_SET', key: 'https://moodle.test/mod/lti/certs.php' }
})

  // Set connection callback
  lti.onConnect((connection, request, response) => {
    // Call redirect function
    console.log('renard')
    lti.redirect(response, '/main')
  })

  // Set main endpoint route
  lti.app.get('/main', (req, res) => {
    // Id token
    console.log(res.locals.token)
    res.send('It\'s alive!')
  })
}
setup()