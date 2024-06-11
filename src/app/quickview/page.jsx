import React, { Fragment } from 'react'

const page = () => {
  return (
    <Fragment>
 
<div className="relative z-10" role="dialog" aria-modal="true">
  
  <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"></div>

  <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
      
      <div className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
        <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
          <button type="button" className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8">
            <span className="sr-only">Close</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
            <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
              <img src="https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg" alt="Two each of gray, white, and black shirts arranged on table." className="object-cover object-center"/>
            </div>
            <div className="sm:col-span-8 lg:col-span-7">
              <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">Basic Tee 6-Pack</h2>

              <section aria-labelledby="information-heading" className="mt-2">
                <h3 id="information-heading" className="sr-only">Product information</h3>

                <p className="text-2xl text-gray-900">$192</p>

                
                <div className="mt-6">
                  <h4 className="sr-only">Reviews</h4>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      
                      <svg className="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                      </svg>
                      <svg className="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                      </svg>
                      <svg className="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                      </svg>
                      <svg className="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                      </svg>
                      <svg className="h-5 w-5 flex-shrink-0 text-gray-200" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                      </svg>
                    </div>
                    <p className="sr-only">3.9 out of 5 stars</p>
                    <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
                  </div>
                </div>
              </section>

              <section aria-labelledby="options-heading" className="mt-10">
                <h3 id="options-heading" className="sr-only">Product options</h3>

                <form>
                 
                  <fieldset aria-label="Choose a color">
                    <legend className="text-sm font-medium text-gray-900">Color</legend>

                    <div className="mt-4 flex items-center space-x-3">
                      
                      <label aria-label="White" className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none">
                        <input type="radio" name="color-choice" value="White" className="sr-only"/>
                        <span aria-hidden="true" className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-white"></span>
                      </label>
                     
                      <label aria-label="Gray" className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-400 focus:outline-none">
                        <input type="radio" name="color-choice" value="Gray" className="sr-only"/>
                        <span aria-hidden="true" className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-200"></span>
                      </label>
                      
                      <label aria-label="Black" className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-900 focus:outline-none">
                        <input type="radio" name="color-choice" value="Black" className="sr-only"/>
                        <span aria-hidden="true" className="h-8 w-8 rounded-full border border-black border-opacity-10 bg-gray-900"></span>
                      </label>
                    </div>
                  </fieldset>

                 
                  <fieldset className="mt-10" aria-label="Choose a size">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium text-gray-900">Size</div>
                      <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
                    </div>

                    <div className="mt-4 grid grid-cols-4 gap-4">
                      
                      <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1">
                        <input type="radio" name="size-choice" value="XXS" className="sr-only"/>
                        <span>XXS</span>
                        
                        <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                     
                      <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1">
                        <input type="radio" name="size-choice" value="XS" className="sr-only"/>
                        <span>XS</span>
                        
                        <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                      
                      <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1">
                        <input type="radio" name="size-choice" value="S" className="sr-only"/>
                        <span>S</span>
                        
                        <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                      
                      <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1">
                        <input type="radio" name="size-choice" value="M" className="sr-only"/>
                        <span>M</span>
                        
                        <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                      
                      <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1">
                        <input type="radio" name="size-choice" value="L" className="sr-only"/>
                        <span>L</span>
                       
                        <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                      
                      <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1">
                        <input type="radio" name="size-choice" value="XL" className="sr-only"/>
                        <span>XL</span>
                        
                        <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                      
                      <label className="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-4 py-3 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1">
                        <input type="radio" name="size-choice" value="XXL" className="sr-only"/>
                        <span>XXL</span>
                       
                        <span className="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                      </label>
                    
                      <label className="group relative flex cursor-not-allowed items-center justify-center rounded-md border bg-gray-50 px-4 py-3 text-sm font-medium uppercase text-gray-200 hover:bg-gray-50 focus:outline-none sm:flex-1">
                        <input type="radio" name="size-choice" value="XXXL" disabled className="sr-only"/>
                        <span>XXXL</span>
                        <span aria-hidden="true" className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                          <svg className="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                            <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                          </svg>
                        </span>
                      </label>
                    </div>
                  </fieldset>

                  <button type="submit" className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to bag</button>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </Fragment>
  )
}

export default page