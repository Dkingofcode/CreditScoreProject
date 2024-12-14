import React from 'react';
import Speedometer from './Speedometer';
import { useState } from 'react';

function Dashboard() {
   const [level, setLevel] = useState(50); // Example level

  return (
      <div className='main  items-center flex flex-col justify-center border border-red-500'>
        
         {/* Credit Score  */}
        <div className="Credit p-5 w-full border  border-gray-700 h-80">
          
          <div className='border border-red-700 flex justify-between'>
           <h1>Credit Score:</h1>
            <h1 className='border border-red-500 pl-32'>Scoring guide</h1>
          </div>

          <div className='graph flex justify-between'>
           <div className='border border-gray-400 w-1/2'>
            <Speedometer className="w-96" level={level} />
           </div>
          
          <div className='border border-red-700 flex justify-between w-1/2'>
          
            <div className='items-center align-middle my-auto w-full flex flex-col'>
            <h1 className='text-lg'>This wallet&apos;s Credit Score is: </h1>
            <span className='text-lg text-green-700 text-8xl'>688</span>
            </div>

            <div className='wallet border border-red-950 w-56 h-64'>
                
                <div className='guide'>
                    <div>
                    <p className='color-label bg-red-950 pt-3 pb-3 pr-1 pl-1 w-1/2'>1 - 6  </p> <span>8%</span>
                    </div>
                    <div>
                    <p className='color-label bg-red-500 pt-3 pb-3 pr-1 pl-1 w-1/2'>1 - 6</p><span>9%</span>
                    </div>
                    <div>
                    <p className='color-label bg-orange-500 pt-3 pb-3 pr-1 pl-1 w-1/2'>1 - 6</p><span>7%</span>
                    </div>
                    <div>
                    <p className='color-label bg-yellow-500 pt-3 pb-3 pr-1 pl-1 w-1/2'>1 - 6</p><span>5%</span>
                    </div>
                    <div>
                    <p className='color-label bg-green-400 pt-3 pb-3 pr-1 pl-1 w-1/2'>1 - 6</p><span>3%</span>
                    </div>
                    <div>
                    <p className='color-label bg-green-700 pt-3 pb-3 pr-1 pl-1 w-1/2'>1 - 6</p><span>1.5%</span>
                    </div>
                </div>
           
            </div>
          
          </div>
        
         </div>

        </div>

        <div className='Account border border-yellow-400'>
            <h1>Loan Account Detail:</h1>
            <div className='table border border-purple-500 grid grid-cols-10 w-full pt-3 pb-3 pl-3 pr-3'>
                <div className='Protocol border border-gray-500'>
                    <div className='head'><p>Protocol</p></div>
                    <div className='item'><p><img /> (AAVE)</p></div>
                    <div className='item'><p><img /> (AAVE)</p></div>
                    <div className='item'><p><img /> (AAVE)</p></div>
                    <div className='item'><p><img /> (MKR)</p></div>
                    <div className='item'><p><img /> (CRV)</p></div>
                    <div className='item'><p><img /> (MKR)</p></div>
                    <div className='item'><p><img /> (YFI)</p></div>
                    <div className='item'><p><img /> (COMP)</p></div>
                    <div className='item'><p><img /> (COMP)</p></div>
                </div>

                <div className='Protocol border border-gray-500'>
                    <div className='head'><p>Open Date</p></div>
                    <div className='item'><p>12 Jan 2020</p></div>
                    <div className='item'><p>15 Mar 2020</p></div>
                    <div className='item'><p>1 Dec 2020</p></div>
                    <div className='item'><p>17 Jul 2021</p></div>
                    <div className='item'><p>12 Aug 2021</p></div>
                    <div className='item'><p>28 Nov 2021</p></div>
                    <div className='item'><p>20 Apr 2022</p></div>
                    <div className='item'><p>18 May 2022</p></div>
                    <div className='item'><p>15 May 2022</p></div>
                </div>

                <div className='Protocol border border-gray-500'>
                    <div className='head'><p>Loan Value</p></div>
                    <div className='item'><p>$ 3,500</p></div>
                    <div className='item'><p>$ 1000</p></div>
                    <div className='item'><p>$ 1000</p></div>
                    <div className='item'><p>$ 9500</p></div>
                    <div className='item'><p>$ 5000</p></div>
                    <div className='item'><p>$ 3000</p></div>
                    <div className='item'><p>$ 2500</p></div>
                    <div className='item'><p>$ 2000</p></div>
                    <div className='item'><p>$ 11000</p></div>
                </div>

                <div className='Protocol border border-gray-500'>
                    <div className='head'><p>Status</p></div>
                    <div className='item'><p>Settled</p></div>
                    <div className='item'><p>Settled</p></div>
                    <div className='item'><p>Settled</p></div>
                    <div className='item'><p>Liquidated</p></div>
                    <div className='item'><p>Settled</p></div>
                    <div className='item'><p>Liquidated</p></div>
                    <div className='item'><p>Active</p></div>
                    <div className='item'><p>Active</p></div>
                    <div className='item'><p>Active</p></div>
                </div>

                <div className='Protocol border border-gray-500'>
                    <div className='head'><p>Current Balance</p></div>
                    <div className='item'><p>$0</p></div>
                    <div className='item'><p>$0</p></div>
                    <div className='item'><p>$0</p></div>
                    <div className='item'><p>$0</p></div>
                    <div className='item'><p>$0</p></div>
                    <div className='item'><p>$0</p></div>
                    <div className='item'><p>$25</p></div>
                    <div className='item'><p>$500</p></div>
                    <div className='item'><p>$11000</p></div>
                </div>

                <div className='Protocol border border-green-700 w-full flex flex-col gap-y-2 col-span-2'>
                    <div className='head'><p>Delinquency History</p></div>
                    <div className='grid grid-cols-12'>
                        {Array.from({ length: 12}).map((_, index) => (
                           <div key={index} className='border border-gray-500 flex justify-center items-center sm:pt-2 pb-2'></div> 
                        ))}
                        </div>
                    <div className='grid grid-cols-12 '>
                    {Array.from({ length: 12}).map((_, index) => (
                           <div key={index} className='border border-gray-500  flex justify-center items-center sm:pt-2 pb-2'></div> 
                        ))}
                        </div>
                    <div className='grid grid-cols-12 '>
                    {Array.from({ length: 12}).map((_, index) => (
                           <div key={index} className='border border-gray-500 flex justify-center items-center sm:pt-2 pb-2'></div> 
                        ))}
                        </div>
                    <div className='grid grid-cols-12 '>
                    {Array.from({ length: 12}).map((_, index) => (
                           <div key={index} className='border border-gray-500 flex justify-center items-center sm:pt-2 pb-2'></div> 
                        ))}
                        </div>
                    <div className='grid grid-cols-12 '>
                    {Array.from({ length: 12}).map((_, index) => (
                           <div key={index} className='border border-gray-500 flex justify-center items-center sm:pt-2 pb-2'></div> 
                        ))}
                    </div>
                    <div className='grid grid-cols-12 '>
                    {Array.from({ length: 12}).map((_, index) => (
                           <div key={index} className='border border-gray-500 flex justify-center items-center sm:pt-2 pb-2'></div> 
                        ))}
                    </div>
                    <div className='grid grid-cols-12 '>
                    {Array.from({ length: 12}).map((_, index) => (
                           <div key={index} className='border border-gray-500  flex justify-center items-center sm:pt-2 pb-2'></div> 
                        ))}
                    </div>
                    <div className='grid grid-cols-12'>
                    {Array.from({ length: 12}).map((_, index) => (
                           <div key={index} className='border border-gray-500 p-1 flex justify-center items-center  sm:pt-2 pb-2'></div> 
                        ))}
                    </div>
                </div>
            </div>
        </div>
      
      </div>
  )
}

export default Dashboard;




