import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Top Row */}
      <div className="flex flex-col justify-center items-center px-6 py-8 bg-gray-100 flex-1">
        <div className="text-center">
          <h1 className="lg:text-4xl md:text-2xl font-bold text-gray-900">Men’s Black Genuine Sheepskin Hooded Winter Warm 
            Thick Casual Baggy Padded Puffer Lightweight Insulated Parka Leather Jacket</h1>
          
          
          <p className="lg:text-2xl md:text-1xl text-center text-gray-700 mt-2">
          <b>Premium Sheepskin Leather:</b> This Men's Jacket Is Constructed From 100% Genuine Sheepskin Leather, 
          Offering Top-Tier Durability And A Premium Feel.</p>
          
          <p className="lg:text-2xl md:text-1xl text-center  text-gray-700 mt-2">


           <b>Thermal Insulation:</b>Enhanced With Synthetic Polyester Filling, 
           This Jacket Ensures Excellent Warmth And Comfort During Harsh Winter Conditions.</p>

          
          <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
           PKR 5,000/-
          </button>
        </div>




        <div className="flex justify-center gap-6 px-6 py-8 bg-gray-100"> 
        <div className=" w-full sm:w-1/4 md:w-1/2">
          <Image 
            src="/Sizechart.png" 
            alt="Cover image" 
            width={600} 
            height={400} 
            
          />
        </div>


      </div>

      {/* Bottom Row (Images covering full width) */}
      
      
      <div className="flex justify-center flex-wrap gap-6 px-6 py-8 bg-gray-100"> 

      
        <div className="w-full lg:w-1/4 md:w-1/3 sm:w-1/2">
          <Image 
            src="/Ten3.png" 
            alt="Cover image" 
            width={600} 
            height={400} 
            
          />
        </div>

        <div className="w-full lg:w-1/4 md:w-1/3 sm:w-1/2">
          <Image 
            src="/Men4.png" 
            alt="Cover image" 
            width={600} 
            height={400} 
            
          />
        </div>

        <div className="w-full lg:w-1/4 md:w-1/3 sm:w-1/2">
          <Image 
            src="/Men2.png" 
            alt="Cover image" 
            width={600} 
            height={400} 
            
          />

          
        </div>
      </div>
    </div>
    </div>
    
  )
}
