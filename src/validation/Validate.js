import { MIN_PASS_LENGTH, MIN_USERNAME_LENGTH, MAX_USERNAME_LENGTH, MAX_PASS_LENGTH, MIN_BODY_LENGTH, MAX_BODY_LENGTH, MIN_TITLE_LENGTH, MAX_TITLE_LENGTH } from './ValidationConst';

class Validate {

  checkLoginCredentials(username, password) {
      
      let tPass = password;
      let tUname = username;
      
      let trimmedPass = tPass.trim();
      let trimmedUsername = tUname.trim();

      if(trimmedPass.length > MAX_PASS_LENGTH || trimmedPass.length < MIN_PASS_LENGTH || trimmedUsername.length > MAX_USERNAME_LENGTH || trimmedUsername.length < MIN_USERNAME_LENGTH ){
          return false;
      }
      return true;
    }

  checkPostInputs(title, body) {
      
      let tTitle = title;
      let tBody = body;
      
      let trimmedTitle = tTitle.trim();
      let trimmedBody = tBody.trim();

      if(trimmedTitle.length > MAX_TITLE_LENGTH || trimmedTitle.length < MIN_TITLE_LENGTH || trimmedBody.length > MAX_BODY_LENGTH || trimmedBody.length < MIN_BODY_LENGTH ){
          return false ;
      }
      const data = {
        isValid: true,
        sbody: trimmedBody,
        stitle: trimmedTitle
      }
      return data;   
    }

}

export const validate = new Validate();