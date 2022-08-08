class Storage {

     saveData(key, data){
        try {
            localStorage.setItem(key,JSON.stringify(data));

        }
        catch (error) {
            // Error saving data
            localStorage.removeItem(key);
        }
    }

     remove(key){
        try {
            localStorage.removeItem(key);
        }
        catch (error) {
            console.error('storage', error);
        }
        }

    load(key){
        try {
            const data = localStorage.getItem(key);
            if (!data) {
                return null;
            }
            // We have data!!
            return JSON.parse(data);
        }
        catch (error) {
            window.localStorage.removeItem(key);
        }
    }

}

export const storage = new Storage();