import React, { useEffect, useState } from 'react'

const Pagination = ({products, setProducts, iPP }) => {
    const itemsPerPage = iPP;
    const numberOfPages = Math.ceil(products.length/itemsPerPage)
    
    
console.log(products);

    const [currentPage, setCurrentPage] = useState(1);



useEffect(() => {
  
    const startIndex = (currentPage -1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage

    const paginatedItems = [...products].reverse().slice(startIndex, endIndex)

    setProducts(paginatedItems)

  
}, [currentPage,products])



const changeNumberpage = (numberPage) => setCurrentPage(numberPage)




const renderPagesIcon = () => {
    const pageNumbers = []

    for (let index = 1; index <= numberOfPages; index++) {
        
        pageNumbers.push(<button key={index} onClick={() => changeNumberpage(index)} 
          className={currentPage===index ? "pagination-button active-tab" : "pagination-button non-active-tab"}
        >
            {index}</button>)
        
    }

    return pageNumbers;
}





  return (
    <div className="pagination bg-zinc-50/40">
          <button
             disabled={currentPage === 1}
            onClick={() => {changeNumberpage(currentPage - 1)}}
            className={ currentPage === 1 ?  "pagination-prev-button pages-ended active-tab" :
                 "pagination-prev-button"}
          >
            Back
         </button>


               {renderPagesIcon()}

    
          <button
             disabled={currentPage === numberOfPages}
            onClick={() => {changeNumberpage(currentPage + 1)}}
            className={currentPage === numberOfPages ? "pagination-next-button pages-ended active-tab":
                 "pagination-next-button"}
          >
            Next
          </button>
        </div>
  )
}

export default Pagination