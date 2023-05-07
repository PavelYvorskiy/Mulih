const dropDown = document.querySelectorAll('.dropdown');

dropDown.forEach((elem) =>{
        activeDropDownWrapper(elem)
 })

   function activeDropDownWrapper(dropDownWrapper){
    const dropdownBtn = dropDownWrapper.querySelector('.dropdown-button');
    const dropdownList = dropDownWrapper.querySelector('.dropdown-list');
    const dropdownItem = dropdownList.querySelectorAll('.dropdown-list__item');
    const dropdownInput = dropDownWrapper.querySelector('.dropdown-input');

    
    dropdownBtn.addEventListener('click', () =>{
        dropdownList.classList.toggle("list-visibe")
        dropdownBtn.classList.add('active')
    })
    
    dropdownItem.forEach((elem)=>{
        elem.addEventListener('click', (event) =>{
            event.stopPropagation();
            dropdownBtn.innerText = elem.innerText;
            dropdownBtn.focus();
            dropdownList.classList.remove('list-visibe');
            dropdownInput.value = elem.dataset.value;
        })
    })
    document.addEventListener('click', (event) =>{
      if(event.target !== dropdownBtn){
        dropdownList.classList.remove("list-visibe");
        dropdownBtn.classList.remove('active')
      }
    
    })
    document.addEventListener('keydown', (event )=>{
       if(event.key ==='Tab' || event.key === 'Escape'){
        dropdownList.classList.remove("list-visibe");
        dropdownBtn.classList.remove('active')
       }
    })
   }
