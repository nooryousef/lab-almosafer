/// <reference types= "cypress" />

let lang=["https://www.almosafer.com/ar", "https://www.almosafer.com/en"]
const nomOfele=lang.length
const randomIndex = Math.floor(Math.random() * nomOfele)

describe('mosafer test', () => {
  it('passes', () => {
    cy.visit(lang[randomIndex])

    cy.get('.cta__saudi').click();
    cy.get('#uncontrolled-tab-example-tab-hotels > .sc-dWcDbm').click()
    let dest=['Dubai', 'Jeddah', 'Riyadh']
    const desT=dest.length
    const randomdest = Math.floor(Math.random() *desT)
   
    let location=['دبي', 'جدة']
    const loC=location.length
    const randomloC = Math.floor(Math.random() * loC)
 
    cy.get('[data-testid="Header__LanguageSwitch"]').invoke('text').then((arOren)=>{
      if (arOren=='English') {
        cy.get('[data-testid="AutoCompleteInput"]').type(location[randomloC])
        cy.get('[data-testid="AutoCompleteResultsList"]').find('li').eq(1).click()

      //   let room=['غرفة واحدة، 2 بالغون، 0 أطفال','1 غرفة، 1 بالغ، 0 أطفال']

      //  let mySuite=room.length
      //   let  randomRoom=Math.floor(Math.random()*mySuite)
    
      //   cy.get('[data-testid="HotelSearchBox__ReservationSelect_Select"]').select(room[randomRoom])
      //   cy.select
    





      }
      else if (arOren=='العربية') {
        cy.get('[data-testid="AutoCompleteInput"]').type(dest[randomdest])
        cy.get('[data-testid="AutoCompleteResultsList"]').find('li').eq(1).click()
      
      //   let room=['1 Room, 2 Adults, 0 Children','1 Room, 1 Adult, 0 Children'] 

      //  let mySuite=room.length
      //    let randomRoom=Math.floor(Math.random()*mySuite)
    
      //   cy.get('[data-testid="HotelSearchBox__ReservationSelect_Select"]').select(room[randomRoom])  
    
      
      
      
      
      }

    })

   let values=['A','B']
   let valength=values.length
   let randomval=Math.floor(Math.random()*valength)
    
   cy.get('[data-testid="HotelSearchBox__ReservationSelect_Select"]').select(values[randomval]).invoke('text')
    
   cy.get('.sc-1vkdpp9-5').click()
  

     
  
  })
})