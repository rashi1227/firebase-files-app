import React from 'react'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


const Login = () => {
  const {data : session} = useSession();
  const router = useRouter();
  useEffect(()=>{
    if(session){
      router.push("/");
    }
    else{
      console.log("User Session")
    }

  } ,[session])
  return (
    <div className='flex justify-center 
    items-center ml-[50%] '>
        
         <div>
         <div class="mx-auto my-36 flex h-[150px] w-[350px] flex-col border-2 bg-white text-black shadow-xl">
  <div class="mx-8 mt-7 mb-1 flex flex-row justify-start space-x-2">
    <div class="h-7 w-3 bg-blue-400 mb-3"></div>
    <div class="w-3 text-center font-sans text-xl font-bold"><h1>Login</h1></div>
  </div>

  <div class="my-2 flex justify-center">
    <button className='bg-blue-400  w-72 border p-2 font-sans '
         onClick={()=>signIn()}>Login with google

         </button>
  </div>
 
</div>
         </div>
    </div>
  )
}

export default Login