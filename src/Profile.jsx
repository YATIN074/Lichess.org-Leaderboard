
import React, { useEffect, useState } from 'react'

const Profile = () => {
    const [userName,setUserName] = useState("");
    const [data,setData] = useState();
    const handleSubmit = async (e)=>{
      e.preventDefault();

        try{
          const res = await fetch(`https://lichess.org/api/user/${userName}`);
          const json = await res.json();
          setData(json);
          console.log(json);
        }
        catch(err){
          console.log(err);
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
          <label htmlFor='username'>Enter lichess.org User Name  </label>
          <input 
          required
          type='text' 
          name='username' 
          placeholder='' 
          value={userName} 
          onChange={(e)=>setUserName(e.target.value)}
            className='border border-black'
          />
          <button type='submit'>Submit</button>
      </form>
      {data ?
      <div>
        <div> Player Details: </div>
        <div>
          <div>Username : {userName}</div>
          <div>Number of games played: {data?.count?.all}</div>
          <div>Ratings:
            <div>
              <p>Blitz: {data?.perfs?.blitz?.rating}</p>
              <p>Rapid: {data?.perfs?.rapid?.rating}</p>
              <p>Classic: {data?.perfs?.classical?.rating}</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      : <p>Get user data</p>
      }
    </div>
  )
}

export default Profile