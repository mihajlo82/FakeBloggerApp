import  { allUsers } from './UserData';

export const findUser = (username, password) => {
 
  try
  {
        if(username === undefined || password === undefined || password === null || password === undefined)
        {
          throw new Error('Credentials error!');
        }
      
        let isValidUser = false;
        let userData = {};

        allUsers.forEach(item => {
          if(item.username.toLocaleLowerCase() === username.toLocaleLowerCase() && item.password === password){
            isValidUser=true;
            userData=item;
           return;
          }
        });
         
    return {isValidUser, userData}
    }
    catch(err)
    {
      return {isValidUser:false, userData: {}}
    }
}


export const deletePostSpec = (allData, id) => {

  try
  {
      if(allData !== undefined && allData !== null && id !== null && id !== undefined){
      
        let updatedData = [...allData].filter(x=> x.id !== id);
        return updatedData;
      
      }else{
        throw new Error('Data error!');
      }

  }
  catch(err)
  {

    let dataLength = allData.length;

    if(dataLength >= 0)
    {
      return allData;
    }
    else
    {
      return [];
    }
  }
}


export const filterList = (allData, chars) => 
{

  try
  {
    if(allData !== undefined  && allData !==null && chars !== undefined && chars !== null)
    {
      let filteredData = [...allData].filter(x => x.title.includes(chars) || x.body.includes(chars));
      return filteredData;
    }
    else
    {
      throw Error('Data err');
    }
  }
  catch(err)
  {
    return allData;
  }
}
