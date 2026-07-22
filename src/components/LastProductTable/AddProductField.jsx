import React from 'react'

const AddProductField = ({newProduct, setNewProduct}) => {



    const fields = [
        {label: "Title" , key: "title" , type: "text"},
        {label: "Publication Status" , key: "isPublished" , type: "select"},
        {label: "ُStock" , key: "entity" , type: "number"},
        {label: "Price" , key: "price" , type: "number"},
        {label: "Description" , key: "description" , type: "textarea"},
    ]




    const handleChange = (key, value) => {
     const thisProduct = {...newProduct,[key]: key==="price" ? +value : value}
       
     setNewProduct(thisProduct)
    }



  return (
    <div>
        {
            fields.map((item) => (
                <div key={item.key}>
                    <label className="text-xs select-none text-neutral-500">{item.label}</label>
                      

                      {
                        item.type === "textarea" ? 
                        <textarea value={newProduct[item.key]} onChange={(event) => {handleChange(item.key,event.target.value)}} className="block mt-2 text-sm min-h-35 px-3 rounded-md bg-linear-to-t from-zinc-100/70 shadow placeholder:text-sm border outline-none primary-border-color w-full" />
                      : item.type === "select" ? 

                      <select className="block mt-2 px-3 rounded-md bg-linear-to-t from-zinc-100/70 shadow placeholder:text-sm h-10 border outline-none primary-border-color w-full"
                          value={"false"}>
                         <option value="true">Published</option>
                         <option value="false">Unpublished</option>
                      </select> :

                      <input value={newProduct[item.key]} onChange={(event) => {handleChange(item.key,event.target.value)}} type={item.type}className="block mt-2 px-3 rounded-md bg-linear-to-t from-zinc-100/70 shadow placeholder:text-sm h-10 border outline-none primary-border-color w-full"/>
                    }

                </div>
            ))
        }
    </div>
  )
}

export default AddProductField