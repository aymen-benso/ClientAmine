document.querySelectorAll('.filter-card').forEach(button => {
    button.addEventListener('click', function() {
        // Get the id of the clicked button
        const filterId = button.getAttribute('id');
        // const tousId = button.getAttribute('id');
        

        document.querySelectorAll(`.filter-card`).forEach(card => {
            card.style.backgroundColor = 'var(--whiteColor)';
            card.style.color = 'var(--blackColor)';
            card.style.transition = '0.6s';
        } );

        document.querySelectorAll(`.filter-icon`).forEach(card => {
            card.style.backgroundColor = 'var(--softgreenColor)';
        } );
        
        document.querySelectorAll(`.filter-card[id^="${filterId}"]`).forEach(card => {
        card.style.backgroundColor = 'var(--primaryColor)';
            card.style.color = 'var(--whiteColor)';
        });
        

        // Hide all detail cards
        document.querySelectorAll('.detail-card').forEach(card => {
            card.style.display = 'none';
        });
        
        
        if ( filterId === "tous" )
        {
                document.querySelectorAll(`.detail-card`).forEach(card => {
                card.style.display = 'block';
            });   
        }
        else
        {

                document.querySelectorAll(`.detail-card[id^="${filterId}"]`).forEach(card => {
                card.style.display = 'block';
            } );         
        }        
    });
} ); 
