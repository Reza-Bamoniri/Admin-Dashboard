import React from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import { BsEye, BsEyeSlash } from 'react-icons/bs'

const TotalCardProduct = ({product}) => {
  return (
    <article className="w-full duration-150 hover:border-zinc-400/90! p-4  space-y-3 border primary-border-color bg-white">
          <header className="h-50 w-full flex-center overflow-hidden!">
            <img
              src={product.img}
              className="size-full object-cover duration-150 hover:scale-110  transition-all rounded-lg"
              alt={product.title}
            />
          </header>
          <main className="space-y-2">
            <h2 className="font-bold! line-clamp-2">{product.title}</h2>
            <p className="text-[13px] text-neutral-500 line-clamp-2 h-9.75">
              {product.description}
            </p>
    
            <div className="flex items-center justify-between gap-1">
              <div
                className={
                 
                  product.isPublished ? "badge success-badge" : "badge danger-badge"
                }
              >
                {product.isPublished ? (
                  <>
                    <BsEye />
                     Published
                  </>
                ) : (
                  <>
                    <BsEyeSlash />
                     Unpublished
                  </>
                )}
              </div>
    
              <div className="text-xs text-zinc-600 inline-flex gap-1 items-center">
                <BiShoppingBag className="size-4" />
                <span>Stock :</span>
                <span>{product.entity}</span>
              </div>
            </div>
          </main>
          <footer className="flex items-center justify-between">
            <div className="inline-flex items-center gap-1">
              <span className="text-lg font-black">
                {" "}
                {product.price.toLocaleString()}{" "}
              </span>
              <span className="text-zinc-500 text-xs">$</span>
            </div>
    
            <div className="flex items-center gap-1 text-lg!">Icons</div>
          </footer>
        </article>
  )
}

export default TotalCardProduct