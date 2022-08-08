import React,{ createContext, useState, useEffect} from 'react';
import { getAllPosts } from '../api/Api';
import { storage } from '../storage/Storage';

export const MyBloggerContext = createContext();

 export const BloggerContext = ({children}) => {
    const [datas, setDatas] = useState([])
    const [datasPersistent, setDatasPersistent] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [currentId, setCurrentId] = useState(1);
    const [currentUser, setCurrentUser] = useState(storage.load('data') || {});

    useEffect(()=>{
        getAllPosts().then( res => {
            setDatas(res.data);
            setCurrentId(res.data.length + 1);
            setDatasPersistent(res.data)
            setIsLoading(false);
        }).catch(err => console.error(err));
    }, [])

    return (
        <MyBloggerContext.Provider value={{ 
               data: [datas, setDatas],
               currId: [currentId, setCurrentId],
               currUser: [currentUser, setCurrentUser],
               load: isLoading,
               peristData: [datasPersistent, setDatasPersistent]
               }} >
            {children}
        </MyBloggerContext.Provider>
    )
}
