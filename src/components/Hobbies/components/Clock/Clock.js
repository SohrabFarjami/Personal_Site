import React,{useEffect} from 'react'
import CSS from './Clock.module.css'



const Clock = () => {
    useEffect (() =>{
    const deg = 6;
    const hr = document.querySelector('#hr')
    const mn = document.querySelector('#mn')
    const sc = document.querySelector('#sc')

    const nth = (d) => {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
          case 1:  return "st";
          case 2:  return "nd";
          case 3:  return "rd";
          default: return "th";
        }
      };

        setInterval(() =>  {
            let time = new Date();
            let hh = time.getHours() * 30;
            let mm = time.getMinutes() * deg;
            let ss = time.getSeconds() * deg;
            let month = time.toLocaleString('default', { month: 'long' })
            let day = time.getDay()
            
        
            hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
            mn.style.transform = `rotateZ(${mm}deg)`;
            sc.style.transform = `rotateZ(${ss}deg)`;

            document.getElementById("digitalhr").textContent = time.getHours()
            document.getElementById("digitalmn").textContent = time.getMinutes()
            document.getElementById("digitalsc").textContent = time.getSeconds()
            document.getElementById("digitalclockmonth").textContent = month
            document.getElementById('digitalclockday').textContent = ' ' + day + nth(day)
            

        })

    })

    
  return (
    <div className={CSS.container}>
        <div className={CSS.clockgroup}>
            <div className={CSS.digital}>
                <div>
                    <h14 id="digitalclockmonth"></h14>
                    <h14 className={CSS.digitalclockday} id='digitalclockday'></h14> 
                </div>
                <div>
                    <span id='digitalhr'>00</span> <span> : </span>
                    <span id='digitalmn'>00</span> <span> : </span>
                    <span id='digitalsc'>00</span>
                </div>
            </div>
            <div className={CSS.clock} >
                <div className={CSS.hour}>
                    <div className={CSS.hr} id='hr'></div>
                </div>
                <div className={CSS.min}>
                    <div className={CSS.mn} id='mn'></div>
                </div>
                <div className={CSS.sec}>
                    <div className={CSS.sc} id='sc'></div>
                </div>
                </div>
            </div>
        </div>
  )
}

export default Clock