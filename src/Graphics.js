import './App.css';

function mouseHover( event, id, r, g, b ) {

  var posX = event.clientX;
  var posY = event.clientY;

  var dirX = (event.offsetX - event.target.clientWidth/2) * 1/event.target.clientWidth;
  var dirY = (event.offsetY - event.target.clientHeight/2) * 1/event.target.clientHeight;

  for( let i=0; i<1+Math.random()*3; i++ ) {
    let puff = document.createElement('div')
      puff.className = 'puff'
      puff.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
      puff.style.setProperty( '--scale', 0.5 + Math.random()/2 )

      puff.style.setProperty( '--x', (posX/window.innerWidth*100) + 'vw' )
      puff.style.setProperty( '--y', (posY/window.innerHeight*100) + 'vh' )

      puff.style.setProperty( '--nx', (posX/window.innerWidth*100 + ( -0.25 + Math.random() + dirX ) * 15 ) + 'vw' )
      puff.style.setProperty( '--ny', (posY/window.innerHeight*100 + ( -0.25 + Math.random()/2 + dirY ) * 15 ) + 'vh' )
    document.body.appendChild(puff)
    setTimeout( () => { document.body.removeChild( puff ) }, 500 + Math.random() * 1500 )
  }
}

function cloudDispurse( event, id, r, g, b ) {

  var particles = document.getElementsByClassName( id );
  Array.from(particles).forEach( target => { document.body.removeChild( target ) } )

  var posX = event.clientX;
  var posY = event.clientY;

  for( let i=0; i<3+Math.random()*5; i++ ) {
    let puff = document.createElement('div')
      puff.className = 'puff'
      puff.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
      puff.style.setProperty( '--scale', 0.5 + Math.random() )

      puff.style.setProperty( '--x', (posX/window.innerWidth*100) + 'vw' )
      puff.style.setProperty( '--y', (posY/window.innerHeight*100) + 'vh' )

      puff.style.setProperty( '--nx', (posX/window.innerWidth*100 + ( -0.5 + Math.random() * 2 ) * 5 ) + 'vw' )
      puff.style.setProperty( '--ny', (posY/window.innerHeight*100 + ( -0.5 + Math.random() ) * 5 ) + 'vh' )
    document.body.appendChild(puff)
    setTimeout( () => { document.body.removeChild( puff ) }, 500 + Math.random() * 1500 )
  }
}

function makeCloud( scale, r, g, b, x, y, id ) {

  y+=1

  let randdur = Math.random() * 20 + 50
  let delay = -x/100 * randdur

  var currentScale = scale

  let particle = document.createElement('div');
    
    particle.className = 'particle ' + id

    particle.onmouseenter = event => {

      let scaleOld = currentScale

      function rescale() {
        if( currentScale <= 0.3 ) {
          cloudDispurse( event, id, r, g, b )
          setTimeout( makeCloud( scale, r, g, b, 0, y, id ), 1000 + Math.random() * 10000 )
        }
        else if( currentScale > scaleOld - 0.01 ) {
          setTimeout( () => {
            currentScale -= 0.001
            particle.style.width = currentScale * 24 + 'vmin'
            particle.style.height = currentScale * 20 + 'vmin'
            innerparticle.style.width = currentScale * 24 - 4 + 'vmin'
            innerparticle.style.height = currentScale * 20 - 4 + 'vmin'
            rescale()
          }, 10 )
        }
      }
      
      rescale()
      mouseHover( event, id, r, g, b )
    }
    particle.onmouseleave = event => {

      let scaleOld = currentScale

      function rescale() {
        if( currentScale <= 0.3 ) {
          cloudDispurse( event, id, r, g, b )
          setTimeout( makeCloud( scale, r, g, b, 0, y, id ), 1000 + Math.random() * 10000 )
        }
        else if( currentScale > scaleOld - 0.01 ) {
          setTimeout( () => {
            currentScale -= 0.001
            particle.style.width = currentScale * 24 + 'vmin'
            particle.style.height = currentScale * 20 + 'vmin'
            innerparticle.style.width = currentScale * 24 - 4 + 'vmin'
            innerparticle.style.height = currentScale * 20 - 4 + 'vmin'
            rescale()
          }, 10 )
        }
      }
      
      rescale()
      mouseHover( event, id, r, g, b )
    }
    particle.onclick = event => {
      cloudDispurse( event, id, r, g, b )
      setTimeout( makeCloud( scale, r, g, b, 0, y, id ), Math.random() * 1000 )
    }
    
    particle.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
    particle.style.width = scale * 24 + 'vmin'
    particle.style.height = scale * 20 + 'vmin'
    particle.style.setProperty( '--y' , -y + 'vh' )
    particle.style.setProperty( '--duration' , randdur + 's' )
    particle.style.animationDelay = delay + 's'
  document.body.appendChild(particle);

  let innerparticle = document.createElement('div');

    innerparticle.className = 'innerparticle ' + id

    innerparticle.onmouseenter = event => {

      let scaleOld = currentScale

      function rescale() {
        if( currentScale <= 0.3 ) {
          cloudDispurse( event, id, r, g, b )
          setTimeout( makeCloud( scale, r, g, b, 0, y, id ), 1000 + Math.random() * 10000 )
        }
        else if( currentScale > scaleOld - 0.01 ) {
          setTimeout( () => {
            currentScale -= 0.001
            particle.style.width = currentScale * 24 + 'vmin'
            particle.style.height = currentScale * 20 + 'vmin'
            innerparticle.style.width = currentScale * 24 - 4 + 'vmin'
            innerparticle.style.height = currentScale * 20 - 4 + 'vmin'
            rescale()
          }, 10 )
        }
      }
      
      rescale()
      mouseHover( event, id, r, g, b )
    }
    innerparticle.onmouseleave = event => {

      let scaleOld = currentScale

      function rescale() {
        if( currentScale <= 0.3 ) {
          cloudDispurse( event, id, r, g, b )
          setTimeout( makeCloud( scale, r, g, b, 0, y, id ), 1000 + Math.random() * 10000 )
        }
        else if( currentScale > scaleOld - 0.01 ) {
          setTimeout( () => {
            currentScale -= 0.001
            particle.style.width = currentScale * 24 + 'vmin'
            particle.style.height = currentScale * 20 + 'vmin'
            innerparticle.style.width = currentScale * 24 - 4 + 'vmin'
            innerparticle.style.height = currentScale * 20 - 4 + 'vmin'
            rescale()
          }, 10 )
        }
      }
      
      rescale()
      mouseHover( event, id, r, g, b )
    }
    innerparticle.onclick = event => {
      cloudDispurse( event, id, r, g, b )
      setTimeout( makeCloud( scale, r, g, b, 0, y, id ), 1000 + Math.random() * 10000 )
    }

    innerparticle.style.width = scale * 24 - 4 + 'vmin'
    innerparticle.style.height = scale * 20 - 4 + 'vmin'
    innerparticle.style.backgroundColor = 'rgb(' + (r-20) + ',' + (g-20) + ',' + (b-20) + ')'
    innerparticle.style.setProperty( '--y' , 'calc(' + -y + 'vh + 2vmin)' )
    innerparticle.style.setProperty( '--x' , '2vmin')
    innerparticle.style.setProperty( '--duration' , randdur + 's' )
    innerparticle.style.animationDelay = delay + 's'
  document.body.appendChild( innerparticle );
}
  
function makeDroplet( scale, r, g, b ) {
  let particle = document.createElement('div');
    particle.className = 'droplet';
    particle.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
    particle.style.width = scale * scale * 3 + 'vmin'
    particle.style.height = scale * scale * 2.5 + 'vmin'
    particle.style.animationDelay = -Math.random() * 2 + 's'
    particle.style.setProperty( '--x' , Math.random() * 120 - 20 + 'vw' )
    particle.style.setProperty( '--duration' , ( Math.random() + 2 ) * scale + 's')
  document.body.appendChild(particle);
}

function Graphics( weather ) {

  var particles = document.getElementsByClassName('particle');
  Array.from(particles).forEach( target => { document.body.removeChild( target ) } )

  var innerparticles = document.getElementsByClassName('innerparticle');
  Array.from(innerparticles).forEach( target => { document.body.removeChild( target ) } )

  var droplets = document.getElementsByClassName('droplet');
  Array.from(droplets).forEach( target => { document.body.removeChild( target ) } )

  var mobile = 1;
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) mobile = 2;
  
  switch( weather ) {

    case 'Snow' :

      document.getElementById('App').style.backgroundColor = 'rgb(119, 119, 119)'
      document.getElementById('bottombackground').style.backgroundColor = 'rgb(109, 109, 109)'
      document.getElementById('weather').style.backgroundColor = 'rgb(235, 235, 235)'
      document.getElementById('innerweather').style.backgroundColor = 'rgb(189, 189, 189)'

      if( mobile === 1 ) {
        for( let i=0;i<30/mobile;i++ ) {
          let rand = Math.random() + 0.5;
          let x = Math.random() * 100
          let y = Math.random() * 100
          makeCloud( rand, 99, 99, 99, x, y, i )
        }
      }
      for( let i=0;i<25/mobile;i++ ) {
        let rand = 1 + Math.random()/2
        makeDroplet( rand , 235, 235, 235 )
      }
    break;

    case 'Thunderstorm' :
    case 'Rain' :
    case 'Drizzle' :

      document.getElementById('App').style.backgroundColor = 'rgb(119, 119, 119)'
      document.getElementById('bottombackground').style.backgroundColor = 'rgb(109, 109, 109)'
      document.getElementById('weather').style.backgroundColor = 'rgb(99, 99, 99)'
      document.getElementById('innerweather').style.backgroundColor = 'rgb(59, 59, 59)'

      document.getElementById('bottombackground').style.clipPath = "polygon(62% 50%, 79% 46%, 100% 38%, 100% 100%, 0 100%, 0 46%, 18% 49%, 36% 41%, 49% 44%)"

      if( mobile === 1 ) {
        for( let i=0;i<30/mobile;i++ ) {
          let rand = Math.random() + 0.5;
          let x = Math.random() * 100
          let y = Math.random() * 100
          makeCloud( rand, 99, 99, 99, x, y, i )
        }
      }
      for( let i=0;i<25/mobile;i++ ) {
          let rand = 0.75 + Math.random()/3
          makeDroplet( rand, 100, 148, 237 )
      }
    break;

    case 'Clouds':

      document.getElementById('App').style.backgroundColor = 'rgb(199, 199, 199)'
      document.getElementById('bottombackground').style.backgroundColor = 'rgb(189, 189, 189)'
      document.getElementById('weather').style.backgroundColor = 'rgb(159, 159, 159)'
      document.getElementById('innerweather').style.backgroundColor = 'rgb(119, 119, 119)'

      document.getElementById('bottombackground').style.clipPath = "polygon(62% 50%, 79% 46%, 100% 38%, 100% 100%, 0 100%, 0 46%, 18% 49%, 36% 41%, 49% 44%)"

      for( let i=0;i<50/mobile;i++ ) {
          let rand = Math.random() + 0.5;
          let x = Math.random() * 100
          let y = Math.random() * 100
          makeCloud( rand, 159, 159, 159, x, y, i )
      }
    break;

    case 'Fog' :
    case 'Smoke' :
    case 'Ash' :

      document.getElementById('App').style.backgroundColor = 'rgb(100, 148, 237)'
      document.getElementById('bottombackground').style.backgroundColor = 'rgb(189, 189, 189)'
      document.getElementById('weather').style.backgroundColor = 'rgb(159, 159, 159)'
      document.getElementById('innerweather').style.backgroundColor = 'rgb(119, 119, 119)'

      document.getElementById('bottombackground').style.clipPath = "polygon(69% 70%, 83% 65%, 100% 64%, 100% 100%, 0 100%, 0 75%, 15% 70%, 31% 73%, 48% 70%)"
        
      for( let i=0;i<30/mobile;i++ ) {
        let rand = Math.random() * 2 + 0.5 * mobile;
        let x = Math.random() * 100
        let y = Math.random() * 50 / mobile
        makeCloud( rand , 159, 159, 159, x, y, i )
      }
    break;

    case 'Mist' :

      document.getElementById('App').style.backgroundColor = 'rgb(100, 148, 237)'
      document.getElementById('bottombackground').style.backgroundColor = 'rgb(90, 138, 227)'
      document.getElementById('weather').style.backgroundColor = 'rgb(235, 235, 235)'
      document.getElementById('innerweather').style.backgroundColor = 'rgb(189, 189, 189)'

      document.getElementById('bottombackground').style.clipPath = "polygon(69% 70%, 83% 65%, 100% 64%, 100% 100%, 0 100%, 0 75%, 15% 70%, 31% 73%, 48% 70%)"

      for( let i=0;i<30/mobile;i++ ) {
        let rand = Math.random() * 2 + 0.5 * mobile;
        let x = Math.random() * 100
        let y = Math.random() * 40 / mobile
        makeCloud( rand , 235, 235, 235, x, y, i )
      }
    break;

    case 'Haze' :
    case 'Dust' :
    case 'Sand' :

      document.getElementById('App').style.backgroundColor = 'rgb(100, 148, 237)'
      document.getElementById('bottombackground').style.backgroundColor = 'rgb(235, 215, 185)'
      document.getElementById('weather').style.backgroundColor = 'rgb(225, 205, 175)'
      document.getElementById('innerweather').style.backgroundColor = 'rgb(185, 165, 135)'

      document.getElementById('bottombackground').style.clipPath = "polygon(69% 70%, 83% 65%, 100% 64%, 100% 100%, 0 100%, 0 75%, 15% 70%, 31% 73%, 48% 70%)"

      for( let i=0;i<30/mobile;i++ ) {
        let rand = Math.random() * 2 + 0.5 * mobile;
        let x = Math.random() * 100
        let y = Math.random() * 50 / mobile
        makeCloud( rand , 225, 205, 175, x, y, i )
      }
    break;

    default:

      document.getElementById('App').style.backgroundColor = 'rgb(100, 148, 237)'
      document.getElementById('bottombackground').style.backgroundColor = 'rgb(90, 138, 227)'
      document.getElementById('weather').style.backgroundColor = 'rgb(255, 235, 0)'
      document.getElementById('innerweather').style.backgroundColor = 'rgb(209, 189, 0)'

      document.getElementById('bottombackground').style.clipPath = "polygon(62% 50%, 79% 46%, 100% 38%, 100% 100%, 0 100%, 0 46%, 18% 49%, 36% 41%, 49% 44%)"

      for( let i=0;i<10/mobile;i++ ) {
        let rand = Math.random() + 0.2;
        let x = Math.random() * 100
        let y = Math.random() * 100
        makeCloud( rand , 235, 235, 235, x, y, i )
      }
    break;
  }
}

export default Graphics;